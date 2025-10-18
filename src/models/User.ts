import { ObjectId } from 'mongodb';

export interface User {
  _id?: ObjectId;
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  preferences: {
    selectedLanguage: 'javascript' | 'python' | 'cpp' | 'c' | 'java';
    selectedDifficulty: 'easy' | 'medium' | 'hard' | 'all';
    practiceMode: boolean;
    practiceTimer: number;
  };
  stats: {
    totalLessonsCompleted: number;
    totalPracticeTime: number;
    currentStreak: number;
    bestStreak: number;
    bestWPM: number;
    averageWPM: number;
    averageAccuracy: number;
    totalErrors: number;
    favoriteLanguage: string;
  };
  progress: {
    completedLessons: number[];
    practiceSessions: PracticeSession[];
    achievements: string[];
  };
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
