'use client';

import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Lesson } from '@/types';
import LessonItem from './LessonItem';
import ToggleSwitch from './ToggleSwitch';
import DifficultySelector from './DifficultySelector';

interface SidebarProps {
  lessons: Lesson[];
  currentLessonId: number;
  completedLessons: number[];
  practiceMode: boolean;
  selectedDifficulty: 'easy' | 'medium' | 'hard' | 'all';
  onLessonSelect: (lessonId: number) => void;
  onPracticeModeToggle: (enabled: boolean) => void;
  onDifficultyChange: (difficulty: 'easy' | 'medium' | 'hard' | 'all') => void;
  onSidebarToggle: () => void;
  isOpen: boolean;
}

export default function Sidebar({
  lessons,
  currentLessonId,
  completedLessons,
  practiceMode,
  selectedDifficulty,
  onLessonSelect,
  onPracticeModeToggle,
  onDifficultyChange,
  onSidebarToggle,
  isOpen
}: SidebarProps) {
  const [selectedLanguage, setSelectedLanguage] = useState<'javascript' | 'python' | 'cpp' | 'c' | 'java'>('javascript');

  const filteredLessons = lessons.filter(lesson => {
    const languageMatch = lesson.language === selectedLanguage;
    const difficultyMatch = selectedDifficulty === 'all' || lesson.difficulty === selectedDifficulty;
    return languageMatch && difficultyMatch;
  }).sort((a, b) => a.id - b.id); // Sort by ID to ensure proper order
  const totalCount = filteredLessons.length;

  return (
    <>
      {/* Sidebar */}
      <div className={`
        fixed left-0 top-0 h-full w-64 bg-gray-900 border-r border-gray-700 transform transition-transform duration-300 z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold text-orange-400">CodeKeys</h1>
                <p className="text-xs text-gray-600">Learn by typing</p>
              </div>
              <button
                onClick={onSidebarToggle}
                className="lg:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Language Selector */}
          <div className="p-6 border-b border-gray-700">
            <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wide mb-3">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {([
                { id: 'javascript', label: 'JS', fullName: 'JavaScript' },
                { id: 'python', label: 'PY', fullName: 'Python' },
                { id: 'cpp', label: 'C++', fullName: 'C++' },
                { id: 'c', label: 'C', fullName: 'C' },
                { id: 'java', label: 'JAVA', fullName: 'Java' }
              ] as const).map((lang) => (
                <button
                  key={lang.id}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`
                    px-3 py-2 text-xs font-medium rounded transition-colors text-center
                    ${selectedLanguage === lang.id 
                      ? 'bg-orange-400 text-black' 
                      : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                    }
                  `}
                  title={lang.fullName}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          {/* Practice Mode Toggle */}
          <div className="p-4 border-b border-gray-700">
            <ToggleSwitch
              checked={practiceMode}
              onChange={onPracticeModeToggle}
              label="Practice Mode"
            />
          </div>

          {/* Difficulty Selector */}
          <div className="p-4 border-b border-gray-700">
            <DifficultySelector
              selectedDifficulty={selectedDifficulty}
              onDifficultyChange={onDifficultyChange}
            />
          </div>

          {/* Lessons List */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="mb-4">
              <div className="text-xs text-gray-500 mb-2">
                Showing {filteredLessons.length} lessons
              </div>
              <div className="text-xs text-gray-600">
                Language: {selectedLanguage} | Difficulty: {selectedDifficulty}
              </div>
              {filteredLessons.length < 50 && (
                <div className="text-xs text-orange-400 mt-1">
                  💡 More lessons coming soon!
                </div>
              )}
            </div>
            <div className="space-y-2">
              {filteredLessons.length > 0 ? (
                filteredLessons.map((lesson) => (
                  <LessonItem
                    key={lesson.id}
                    lesson={lesson}
                    isActive={lesson.id === currentLessonId}
                    isCompleted={completedLessons.includes(lesson.id)}
                    onClick={() => onLessonSelect(lesson.id)}
                  />
                ))
              ) : (
                <div className="text-center text-gray-500 py-8">
                  <div className="text-sm">No lessons found</div>
                  <div className="text-xs mt-1">Try changing language or difficulty</div>
                </div>
              )}
            </div>
          </div>

          {/* Progress Counter */}
          <div className="p-6 border-t border-gray-700">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Done</span>
              <span className="text-orange-400 font-bold">
                {completedLessons.filter(id =>
                  filteredLessons.some(lesson => lesson.id === id)
                ).length}
              </span>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className="text-gray-400">Total</span>
              <span className="text-gray-400">{totalCount}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={onSidebarToggle}
        />
      )}

      {/* Sidebar Toggle Button */}
      <button
        onClick={onSidebarToggle}
        className="fixed left-4 top-4 z-50 p-2 bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 transition-all duration-200 hover:scale-105 lg:hidden"
        aria-label="Toggle sidebar"
      >
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          <ChevronLeft className="h-5 w-5 text-gray-400" />
        </div>
      </button>
    </>
  );
}
