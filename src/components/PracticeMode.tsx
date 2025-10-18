'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, Square, Clock, Trophy, Target } from 'lucide-react';

interface PracticeModeProps {
  isActive: boolean;
  onToggle: (active: boolean) => void;
  onTimeUp: () => void;
  initialTime: number;
}

export default function PracticeMode({ isActive, onToggle, onTimeUp, initialTime }: PracticeModeProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isPaused, setIsPaused] = useState(false);
  const [practiceStats, setPracticeStats] = useState({
    lessonsCompleted: 0,
    currentStreak: 0,
    totalWPM: 0,
    totalAccuracy: 0,
    sessionsCount: 0
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive && !isPaused && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            onTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isActive, isPaused, timeLeft, onTimeUp]);

  // Listen for lesson completion events
  useEffect(() => {
    const handleLessonComplete = (event: CustomEvent) => {
      const { wpm, accuracy } = event.detail;
      setPracticeStats(prev => ({
        lessonsCompleted: prev.lessonsCompleted + 1,
        currentStreak: prev.currentStreak + 1,
        totalWPM: prev.totalWPM + wpm,
        totalAccuracy: prev.totalAccuracy + accuracy,
        sessionsCount: prev.sessionsCount + 1
      }));
    };

    window.addEventListener('practiceLessonComplete', handleLessonComplete as EventListener);

    return () => {
      window.removeEventListener('practiceLessonComplete', handleLessonComplete as EventListener);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    onToggle(true);
    setIsPaused(false);
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  const handleStop = () => {
    onToggle(false);
    setIsPaused(false);
    setTimeLeft(initialTime);
  };

  const progress = ((initialTime - timeLeft) / initialTime) * 100;

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Target className="h-5 w-5 text-orange-400" />
          <h3 className="text-lg font-semibold text-white">Practice Mode</h3>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="h-4 w-4 text-gray-400" />
          <span className="text-2xl font-mono text-orange-400">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-700 rounded-full h-2 mb-4">
        <div 
          className="bg-orange-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Control Buttons */}
      <div className="flex items-center justify-center space-x-3">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
          >
            <Play className="h-4 w-4" />
            <span>Start Practice</span>
          </button>
        ) : (
          <>
            <button
              onClick={handlePause}
              className="flex items-center space-x-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors"
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
              <span>{isPaused ? 'Resume' : 'Pause'}</span>
            </button>
            <button
              onClick={handleStop}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              <Square className="h-4 w-4" />
              <span>Stop</span>
            </button>
          </>
        )}
      </div>

      {/* Practice Stats */}
      {isActive && (
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-gray-700 rounded-lg p-3">
            <Trophy className="h-5 w-5 text-yellow-400 mx-auto mb-1" />
            <div className="text-sm text-gray-400">Lessons</div>
            <div className="text-lg font-bold text-white">{practiceStats.lessonsCompleted}</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <Target className="h-5 w-5 text-green-400 mx-auto mb-1" />
            <div className="text-sm text-gray-400">Streak</div>
            <div className="text-lg font-bold text-white">{practiceStats.currentStreak}</div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <Clock className="h-5 w-5 text-blue-400 mx-auto mb-1" />
            <div className="text-sm text-gray-400">Avg WPM</div>
            <div className="text-lg font-bold text-white">
              {practiceStats.sessionsCount > 0 ? Math.round(practiceStats.totalWPM / practiceStats.sessionsCount) : 0}
            </div>
          </div>
          <div className="bg-gray-700 rounded-lg p-3">
            <Trophy className="h-5 w-5 text-purple-400 mx-auto mb-1" />
            <div className="text-sm text-gray-400">Avg Acc</div>
            <div className="text-lg font-bold text-white">
              {practiceStats.sessionsCount > 0 ? Math.round(practiceStats.totalAccuracy / practiceStats.sessionsCount) : 0}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
