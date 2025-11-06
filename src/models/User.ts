// Legacy User interface - now using Prisma generated types
// This file is kept for backward compatibility and type definitions

export interface User {
  id: string;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  // Preferences (flattened in Prisma schema)
  selectedLanguage: 'javascript' | 'python' | 'cpp' | 'c' | 'java';
  selectedDifficulty: 'easy' | 'medium' | 'hard' | 'all';
  practiceMode: boolean;
  practiceTimer: number;
  // Stats (flattened in Prisma schema)
  totalLessonsCompleted: number;
  totalPracticeTime: number;
  currentStreak: number;
  bestStreak: number;
  bestWPM: number;
  averageWPM: number;
  averageAccuracy: number;
  totalErrors: number;
  favoriteLanguage: string;
  // Progress
  completedLessons: number[];
  achievements: string[];
  // Relations
  practiceSessions: PracticeSession[];
}

export interface PracticeSession {
  id: string;
  startTime: number;
  endTime: number;
  duration: number;
  lessonsCompleted: number;
  averageWPM: number;
  averageAccuracy: number;
  difficulty: string;
  language: string;
}

export interface LessonProgress {
  lessonId: number;
  completed: boolean;
  attempts: number;
  bestWPM: number;
  bestAccuracy: number;
  totalTime: number;
  lastAttempted: Date;
  errors: number;
}
