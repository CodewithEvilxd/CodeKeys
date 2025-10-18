'use client';

import { Play, Circle, CheckCircle } from 'lucide-react';
import { Lesson } from '@/types';

interface LessonItemProps {
  lesson: Lesson;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

export default function LessonItem({ lesson, isActive, isCompleted, onClick }: LessonItemProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'hard': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center justify-between p-2 rounded-lg transition-all duration-200
        hover:bg-gray-700/50
        ${isActive ? 'bg-orange-400/20 text-orange-400' : 'text-gray-400 hover:text-gray-300'}
      `}
    >
      <div className="flex items-center space-x-2 flex-1 min-w-0">
        <div className="flex-shrink-0">
          {isActive ? (
            <Play className="h-3 w-3" />
          ) : isCompleted ? (
            <CheckCircle className="h-3 w-3 text-green-400" />
          ) : (
            <Circle className="h-3 w-3" />
          )}
        </div>
        <div className="text-left flex-1 min-w-0">
          <div className="text-xs font-medium truncate">{lesson.title}</div>
          <div className="flex items-center space-x-2 mt-1">
            <div className="text-xs text-gray-500 uppercase">{lesson.language}</div>
            <div className={`text-xs font-medium ${getDifficultyColor(lesson.difficulty)}`}>
              {lesson.difficulty}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
