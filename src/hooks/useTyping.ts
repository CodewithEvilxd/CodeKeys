import { useState, useEffect, useCallback, useMemo } from 'react';
import { Lesson } from '@/types';

export const useTyping = (currentLesson: Lesson) => {
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  // Initialize character states when lesson changes
  useEffect(() => {
    setUserInput('');
    setIsTyping(false);
    setStartTime(null);
  }, [currentLesson]);

  // Calculate character states based on user input and lesson code
  const characterStates = useMemo(() => {
    return currentLesson.code.split('').map((char, index) => ({
      typed: index < userInput.length,
      correct: index < userInput.length ? char === userInput[index] : false,
      character: char
    }));
  }, [currentLesson.code, userInput]);

  const handleInput = useCallback((input: string) => {
    if (!isTyping) {
      setIsTyping(true);
      setStartTime(Date.now());
    }
    setUserInput(input);
  }, [isTyping]);

  const resetTyping = useCallback(() => {
    setUserInput('');
    setIsTyping(false);
    setStartTime(null);
  }, []);

  const isComplete = userInput === currentLesson.code;
  const currentPosition = userInput.length;

  return {
    userInput,
    isTyping,
    startTime,
    characterStates,
    handleInput,
    resetTyping,
    isComplete,
    currentPosition
  };
};
