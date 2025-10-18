'use client';

import { TypingStats } from '@/types';
import dynamic from 'next/dynamic';

// Dynamically import ThemeToggle to avoid SSR issues
const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
  loading: () => (
    <div className="p-2 rounded-lg bg-gray-800 border border-gray-600">
      <div className="h-5 w-5 bg-gray-600 rounded"></div>
    </div>
  ),
});

interface StatsBarProps {
  stats: TypingStats;
  onShowProgress?: () => void;
  practiceMode?: boolean;
  currentStreak?: number;
  bestStreak?: number;
}

export default function StatsBar({ stats, onShowProgress, currentStreak = 0, bestStreak = 0 }: StatsBarProps) {
  const statItems = [
    { label: 'ACC', value: `${stats.accuracy}%` },
    { label: 'CPM', value: stats.cpm },
    { label: 'WPM', value: stats.wpm },
    { label: 'Errors', value: stats.errors },
    { label: 'Streak', value: `${currentStreak}/${bestStreak}` }
  ];

  return (
    <div className="bg-gray-800 dark:bg-gray-800 light:bg-white border-b border-gray-700 dark:border-gray-700 light:border-gray-200 px-4 sm:px-6 py-4">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4 sm:space-x-8">
          {statItems.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-xs text-gray-500 uppercase tracking-wide">
                {item.label}
              </div>
              <div className={`text-xl sm:text-2xl font-bold tabular-nums ${
                item.label === 'WPM' ? 'text-green-400 dark:text-green-400 light:text-green-600' :
                item.label === 'CPM' ? 'text-blue-400 dark:text-blue-400 light:text-blue-600' :
                item.label === 'ACC' ? 'text-yellow-400 dark:text-yellow-400 light:text-yellow-600' :
                item.label === 'Errors' ? 'text-red-400 dark:text-red-400 light:text-red-600' :
                item.label === 'Streak' ? 'text-purple-400 dark:text-purple-400 light:text-purple-600' : 'text-orange-400 dark:text-orange-400 light:text-orange-600'
              }`}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex items-center space-x-2 sm:space-x-3">
          <ThemeToggle />
          <button
            onClick={() => window.location.reload()}
            className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:from-green-600 hover:to-green-700 transition-all hover:scale-105 shadow-lg"
          >
            Reset
          </button>
          <button
            onClick={onShowProgress}
            className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-all hover:scale-105 shadow-lg"
          >
            View Progress
          </button>
        </div>
      </div>
    </div>
  );
}
