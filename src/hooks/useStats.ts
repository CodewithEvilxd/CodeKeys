import { useMemo, useState, useEffect, useRef } from 'react';
import { TypingStats, CharacterState } from '@/types';

export const useStats = (
  characterStates: CharacterState[],
  startTime: number | null,
  isTyping: boolean,
  isComplete: boolean = false
): TypingStats => {
  const [progressData, setProgressData] = useState<{ time: number; wpm: number; cpm: number; accuracy: number }[]>([]);
  const characterStatesRef = useRef(characterStates);

  useEffect(() => {
    characterStatesRef.current = characterStates;
  }, [characterStates]);

  useEffect(() => {
    if (isTyping && startTime && !isComplete) {
      const interval = setInterval(() => {
        const currentTime = Date.now();
        const timeElapsed = (currentTime - startTime) / 1000 / 60; // in minutes

        const typedCharacters = characterStatesRef.current.filter(state => state.typed).length;
        const correctCharacters = characterStatesRef.current.filter(state => state.correct).length;

        const wpm = timeElapsed > 0 ? (correctCharacters / 5) / timeElapsed : 0;
        const cpm = timeElapsed > 0 ? correctCharacters / timeElapsed : 0;
        const accuracy = typedCharacters > 0 ? (correctCharacters / typedCharacters) * 100 : 100;

        setProgressData(prev => [...prev, {
          time: Math.floor((currentTime - startTime) / 1000), // Convert to seconds
          wpm: Math.max(0, Math.round(wpm)),
          cpm: Math.max(0, Math.round(cpm)),
          accuracy: Math.max(0, Math.round(accuracy * 100) / 100)
        }]);
      }, 1000); // Update every second

      return () => clearInterval(interval);
    }
  }, [startTime, isTyping, isComplete]);

  return useMemo(() => {
    if (!startTime || !isTyping) {
      return { wpm: 0, cpm: 0, accuracy: 0, errors: 0, progressData: [] };
    }

    const currentTime = Date.now();
    const timeElapsed = (currentTime - startTime) / 1000 / 60; // in minutes

    const typedCharacters = characterStates.filter(state => state.typed).length;
    const correctCharacters = characterStates.filter(state => state.correct).length;
    const errors = typedCharacters - correctCharacters;

    // WPM calculation: (correct characters / 5) / time in minutes
    const wpm = timeElapsed > 0 ? (correctCharacters / 5) / timeElapsed : 0;

    // CPM calculation: correct characters per minute
    const cpm = timeElapsed > 0 ? correctCharacters / timeElapsed : 0;

    // Accuracy calculation: (correct characters / typed characters) * 100
    // Default to 0% when no characters typed
    const accuracy = typedCharacters > 0 ? (correctCharacters / typedCharacters) * 100 : 100;

    return {
      wpm: Math.max(0, Math.round(wpm)),
      cpm: Math.max(0, Math.round(cpm)),
      accuracy: Math.max(0, Math.round(accuracy * 100) / 100),
      errors: Math.max(0, errors),
      progressData // Add progress data to return
    };
  }, [characterStates, startTime, isTyping, progressData]);
};
