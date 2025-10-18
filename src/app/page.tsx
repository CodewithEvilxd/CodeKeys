'use client';

import { useState, useEffect } from 'react';
import { lessons } from '@/data/lessons';
import { AppState, UserStats } from '@/types';
import Sidebar from '@/components/Sidebar';
import StatsBar from '@/components/StatsBar';
import CodeEditor from '@/components/CodeEditor';
import PracticeMode from '@/components/PracticeMode';
import ProgressView from '@/components/ProgressView';
import LessonCompleteModal from '@/components/LessonCompleteModal';
import { useTyping } from '@/hooks/useTyping';
import { useStats } from '@/hooks/useStats';

export default function Home() {
  const [appState, setAppState] = useState<AppState>({
    currentLesson: 1,
    userInput: '',
    isTyping: false,
    startTime: null,
    completedLessons: [],
    practiceMode: false,
    sidebarOpen: false,
    selectedLanguage: 'javascript',
    selectedDifficulty: 'all',
    practiceTimer: 300, // 5 minutes
    isPracticeActive: false,
    practiceStartTime: null,
    totalPracticeTime: 0,
    streak: 0,
    bestWPM: 0,
    averageAccuracy: 0
  });

  const [showProgress, setShowProgress] = useState(false);
  const [showLessonComplete, setShowLessonComplete] = useState(false);
  const [userStats, setUserStats] = useState<UserStats>({
    totalLessonsCompleted: 0,
    totalPracticeTime: 0,
    currentStreak: 0,
    bestStreak: 0,
    bestWPM: 0,
    averageWPM: 0,
    averageAccuracy: 0,
    totalErrors: 0,
    favoriteLanguage: 'javascript',
    progressData: [],
    practiceSessions: [],
    lastActivityDate: new Date().toISOString().split('T')[0] // Today's date
  });

  // Load user stats from localStorage on component mount
  useEffect(() => {
    const loadUserStats = () => {
      try {
        const savedStats = localStorage.getItem('userStats');
        const savedProgress = localStorage.getItem('userProgress');

        if (savedStats) {
          const parsedStats = JSON.parse(savedStats);
          // Ensure lastActivityDate is set for streak calculation
          if (!parsedStats.lastActivityDate) {
            parsedStats.lastActivityDate = new Date().toISOString().split('T')[0];
          }
          setUserStats(parsedStats);
        }

        if (savedProgress) {
          const parsedProgress = JSON.parse(savedProgress);
          setAppState(prev => ({
            ...prev,
            completedLessons: parsedProgress.completedLessons || [],
            bestWPM: parsedProgress.bestWPM || 0,
            averageAccuracy: parsedProgress.averageAccuracy || 0,
            totalPracticeTime: parsedProgress.totalPracticeTime || 0,
            streak: parsedProgress.streak || 0
          }));
        }
      } catch (error) {
        console.log('Error loading saved data, using defaults:', error);
      }
    };

    loadUserStats();
  }, []);

  const currentLesson = lessons.find(lesson => lesson.id === appState.currentLesson) || lessons[0];

  // Display lesson title and description
  const lessonTitle = currentLesson.title;
  const lessonDescription = currentLesson.description;
  const { userInput, isTyping, startTime, characterStates, handleInput, resetTyping, isComplete, currentPosition } = useTyping(currentLesson);
  const stats = useStats(characterStates, startTime, isTyping, isComplete);

  // Keyboard shortcuts event listeners
  useEffect(() => {
    const handleNextLesson = () => {
      const currentIndex = lessons.findIndex(l => l.id === appState.currentLesson);
      const nextIndex = (currentIndex + 1) % lessons.length;
      setAppState(prev => ({
        ...prev,
        currentLesson: lessons[nextIndex].id,
        sidebarOpen: false
      }));
      resetTyping();
    };

    const handlePrevLesson = () => {
      const currentIndex = lessons.findIndex(l => l.id === appState.currentLesson);
      const prevIndex = currentIndex > 0 ? currentIndex - 1 : lessons.length - 1;
      setAppState(prev => ({
        ...prev,
        currentLesson: lessons[prevIndex].id,
        sidebarOpen: false
      }));
      resetTyping();
    };

    const handleCompleteLesson = () => {
      if (isComplete) {
        handleNextLesson();
      }
    };

    const handleShowLessonCompleteModal = () => {
      if (isComplete && !appState.practiceMode) {
        setShowLessonComplete(true);
      }
    };

    const handleToggleSidebar = () => {
      setAppState(prev => ({
        ...prev,
        sidebarOpen: !prev.sidebarOpen
      }));
    };

    // Add event listeners
    window.addEventListener('nextLesson', handleNextLesson);
    window.addEventListener('prevLesson', handlePrevLesson);
    window.addEventListener('completeLesson', handleCompleteLesson);
    window.addEventListener('showLessonCompleteModal', handleShowLessonCompleteModal);
    window.addEventListener('toggleSidebar', handleToggleSidebar);

    // Cleanup
    return () => {
      window.removeEventListener('nextLesson', handleNextLesson);
      window.removeEventListener('prevLesson', handlePrevLesson);
      window.removeEventListener('completeLesson', handleCompleteLesson);
      window.removeEventListener('showLessonCompleteModal', handleShowLessonCompleteModal);
      window.removeEventListener('toggleSidebar', handleToggleSidebar);
    };
  }, [appState.currentLesson, isComplete, resetTyping, appState.practiceMode]);

  const handleLessonSelect = (lessonId: number) => {
    setAppState(prev => ({
      ...prev,
      currentLesson: lessonId,
      sidebarOpen: false
    }));
    resetTyping();
  };

  const handlePracticeModeToggle = (enabled: boolean) => {
    setAppState(prev => ({
      ...prev,
      practiceMode: enabled,
      isPracticeActive: enabled
    }));
  };

  const handleDifficultyChange = (difficulty: 'easy' | 'medium' | 'hard' | 'all') => {
    setAppState(prev => ({
      ...prev,
      selectedDifficulty: difficulty
    }));
  };

  const handlePracticeTimeUp = () => {
    setAppState(prev => ({
      ...prev,
      isPracticeActive: false,
      practiceMode: false
    }));
  };

  const handleShowProgress = () => {
    setShowProgress(true);
  };

  const handleLessonCompleteClose = () => {
    setShowLessonComplete(false);
  };

  const handleRetryLesson = () => {
    setShowLessonComplete(false);
    resetTyping();
  };

  const handleNextLessonFromModal = () => {
    setShowLessonComplete(false);
    const currentIndex = lessons.findIndex(l => l.id === appState.currentLesson);
    const nextIndex = (currentIndex + 1) % lessons.length;
    handleLessonSelect(lessons[nextIndex].id);
  };

  const handleSidebarToggle = () => {
    setAppState(prev => ({
      ...prev,
      sidebarOpen: !prev.sidebarOpen
    }));
  };

  useEffect(() => {
    if (isComplete && !appState.completedLessons.includes(appState.currentLesson)) {
      const newAccuracy = appState.averageAccuracy === 0 ?
        stats.accuracy :
        ((appState.averageAccuracy * appState.completedLessons.length) + stats.accuracy) / (appState.completedLessons.length + 1);

      const updatedAppState = {
        ...appState,
        completedLessons: [...appState.completedLessons, appState.currentLesson],
        bestWPM: Math.max(appState.bestWPM, stats.wpm),
        averageAccuracy: newAccuracy,
        totalPracticeTime: appState.totalPracticeTime + (startTime ? (Date.now() - startTime) / 1000 : 0)
      };

      setAppState(updatedAppState);

      // Update streak when lesson is completed
      const today = new Date().toISOString().split('T')[0];
      const lastActivityDate = userStats.lastActivityDate || today;

      let newStreak = userStats.currentStreak;
      if (lastActivityDate !== today) {
        if (lastActivityDate === new Date(Date.now() - 86400000).toISOString().split('T')[0]) {
          // Yesterday - continue streak
          newStreak = userStats.currentStreak + 1;
        } else {
          // More than a day ago - reset streak
          newStreak = 1;
        }
      }

      // Update userStats with new streak
      const updatedUserStats = {
        ...userStats,
        currentStreak: newStreak,
        bestStreak: Math.max(userStats.bestStreak, newStreak),
        lastActivityDate: today
      };
      setUserStats(updatedUserStats);

      // Save progress to localStorage
      const saveProgress = () => {
        try {
          const progressData = {
            completedLessons: updatedAppState.completedLessons,
            bestWPM: updatedAppState.bestWPM,
            averageAccuracy: updatedAppState.averageAccuracy,
            totalPracticeTime: updatedAppState.totalPracticeTime,
            streak: newStreak,
            lastUpdated: Date.now()
          };
          localStorage.setItem('userProgress', JSON.stringify(progressData));
          localStorage.setItem('userStats', JSON.stringify(updatedUserStats));
        } catch (error) {
          console.error('Failed to save progress to localStorage:', error);
        }
      };

      saveProgress();

      // Show lesson complete modal (only for regular lessons, not practice mode)
      if (!appState.practiceMode) {
        // Small delay to ensure stats are calculated properly
        setTimeout(() => {
          setShowLessonComplete(true);
        }, 100);
      }

      // Notify practice mode of lesson completion
      if (appState.practiceMode && appState.isPracticeActive) {
        const event = new CustomEvent('practiceLessonComplete', {
          detail: {
            wpm: stats.wpm,
            accuracy: stats.accuracy,
            errors: stats.errors
          }
        });
        window.dispatchEvent(event);
      }
    }
  }, [isComplete, appState.currentLesson, appState.completedLessons.length, appState.averageAccuracy, stats.wpm, stats.accuracy, stats.errors, startTime, appState, userStats]);

  // Update userStats when appState changes and save to localStorage
  useEffect(() => {
    const updatedStats = {
      totalLessonsCompleted: appState.completedLessons.length,
      totalPracticeTime: appState.totalPracticeTime,
      currentStreak: userStats.currentStreak,
      bestStreak: userStats.bestStreak,
      bestWPM: appState.bestWPM,
      averageWPM: appState.averageAccuracy > 0 ? appState.bestWPM * 0.8 : 0,
      averageAccuracy: appState.averageAccuracy,
      totalErrors: Math.floor(appState.completedLessons.length * 2), // Estimate errors
      favoriteLanguage: appState.selectedLanguage,
      progressData: [],
      practiceSessions: [],
      lastActivityDate: userStats.lastActivityDate
    };

    setUserStats(updatedStats);

    // Save stats to localStorage
    try {
      localStorage.setItem('userStats', JSON.stringify(updatedStats));
    } catch (error) {
      console.error('Failed to save stats to localStorage:', error);
    }
  }, [appState, userStats.currentStreak, userStats.bestStreak, userStats.lastActivityDate]);

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-hidden">
      <Sidebar
        lessons={lessons}
        currentLessonId={appState.currentLesson}
        completedLessons={appState.completedLessons}
        practiceMode={appState.practiceMode}
        selectedDifficulty={appState.selectedDifficulty}
        onLessonSelect={handleLessonSelect}
        onPracticeModeToggle={handlePracticeModeToggle}
        onDifficultyChange={handleDifficultyChange}
        onSidebarToggle={handleSidebarToggle}
        isOpen={appState.sidebarOpen}
      />
      
      <div className="flex-1 flex flex-col lg:ml-64">
        <StatsBar
          stats={stats}
          onShowProgress={handleShowProgress}
          practiceMode={appState.practiceMode}
          currentStreak={userStats.currentStreak}
          bestStreak={userStats.bestStreak}
        />
        
        {/* Lesson Header */}
        <div className="p-6 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-white">{lessonTitle}</h2>
              <p className="text-sm text-gray-400 mt-1">{lessonDescription}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className={`px-2 py-1 text-xs font-medium rounded ${
                currentLesson.difficulty === 'easy' ? 'bg-green-900 text-green-400' :
                currentLesson.difficulty === 'medium' ? 'bg-yellow-900 text-yellow-400' :
                'bg-red-900 text-red-400'
              }`}>
                {currentLesson.difficulty.toUpperCase()}
              </span>
              <span className="px-2 py-1 text-xs font-medium bg-blue-900 text-blue-400 rounded">
                {currentLesson.language.toUpperCase()}
              </span>
            </div>
          </div>
        </div>


        <CodeEditor
                   characterStates={characterStates}
                   userInput={userInput}
                   onInput={handleInput}
                   isComplete={isComplete}
                   currentPosition={currentPosition}
                   originalCode={currentLesson.code}
                   wpm={stats.wpm}
                   accuracy={stats.accuracy}
                   errors={stats.errors}
                   language={currentLesson.language}
                 />

        {appState.practiceMode && (
          <div className="p-6 border-t border-gray-700">
            <PracticeMode
              isActive={appState.isPracticeActive}
              onToggle={(active) => setAppState(prev => ({ ...prev, isPracticeActive: active }))}
              onTimeUp={handlePracticeTimeUp}
              initialTime={appState.practiceTimer}
            />
          </div>
        )}
      </div>

      <ProgressView
        isOpen={showProgress}
        onClose={() => setShowProgress(false)}
        userStats={userStats}
      />

      <LessonCompleteModal
        isOpen={showLessonComplete}
        onClose={handleLessonCompleteClose}
        onRetry={handleRetryLesson}
        onNextLesson={handleNextLessonFromModal}
        stats={{
          wpm: stats.wpm,
          cpm: stats.cpm,
          accuracy: stats.accuracy,
          errors: stats.errors,
          timeSpent: startTime ? (Date.now() - startTime) / 1000 : 0,
          progressData: stats.progressData
        }}
        lessonTitle={lessonTitle}
        lessonNumber={appState.currentLesson}
        totalLessons={lessons.length}
        previousStats={[]} // Will be populated from database in production
      />
    </div>
  );
}
