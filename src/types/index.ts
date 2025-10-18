export interface Lesson {
  id: number;
  title: string;
  language: 'javascript' | 'python' | 'cpp' | 'c' | 'java';
  code: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  estimatedTime: number; // in minutes
  description?: string;
}

export interface TypingStats {
  wpm: number;
  cpm: number;
  accuracy: number;
  errors: number;
  progressData?: { time: number; wpm: number; cpm: number; accuracy: number }[];
}

export interface AppState {
  currentLesson: number;
  userInput: string;
  isTyping: boolean;
  startTime: number | null;
  completedLessons: number[];
  practiceMode: boolean;
  sidebarOpen: boolean;
  selectedLanguage: 'javascript' | 'python' | 'cpp' | 'c' | 'java';
  selectedDifficulty: 'easy' | 'medium' | 'hard' | 'all';
  practiceTimer: number; // in seconds
  isPracticeActive: boolean;
  practiceStartTime: number | null;
  totalPracticeTime: number; // in seconds
  streak: number;
  bestWPM: number;
  averageAccuracy: number;
}

export interface CharacterState {
  typed: boolean;
  correct: boolean;
  character: string;
}

export interface ProgressData {
  date: string;
  wpm: number;
  accuracy: number;
  lessonsCompleted: number;
  practiceTime: number;
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

export interface UserStats {
  totalLessonsCompleted: number;
  totalPracticeTime: number;
  currentStreak: number;
  bestStreak: number;
  bestWPM: number;
  averageWPM: number;
  averageAccuracy: number;
  totalErrors: number;
  favoriteLanguage: string;
  progressData: ProgressData[];
  practiceSessions: PracticeSession[];
  lastActivityDate: string; // ISO date string for streak tracking
}
