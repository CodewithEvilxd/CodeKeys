'use client';

import { useRef, useEffect } from 'react';
import { CharacterState } from '@/types';
import AIFeedback from './AIFeedback';

interface CodeEditorProps {
  characterStates: CharacterState[];
  userInput: string;
  onInput: (input: string) => void;
  isComplete: boolean;
  currentPosition: number;
  originalCode?: string;
  wpm?: number;
  accuracy?: number;
  errors?: number;
  language?: string;
}

export default function CodeEditor({ 
  characterStates, 
  userInput, 
  onInput, 
  isComplete, 
  currentPosition,
  originalCode,
  wpm,
  accuracy,
  errors,
  language
}: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onInput(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    // Keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
      switch (e.key) {
        case 'r':
          e.preventDefault();
          // Reset typing (Ctrl+R / Cmd+R)
          window.location.reload();
          break;
        case 'n':
          e.preventDefault();
          // Next lesson (Ctrl+N / Cmd+N)
          const nextLessonEvent = new CustomEvent('nextLesson');
          window.dispatchEvent(nextLessonEvent);
          break;
        case 'p':
          e.preventDefault();
          // Previous lesson (Ctrl+P / Cmd+P)
          const prevLessonEvent = new CustomEvent('prevLesson');
          window.dispatchEvent(prevLessonEvent);
          break;
        case 'Enter':
          if (isComplete) {
            e.preventDefault();
            // Complete lesson and show modal (Ctrl+Enter / Cmd+Enter)
            const completeLessonEvent = new CustomEvent('completeLesson');
            window.dispatchEvent(completeLessonEvent);
          }
          break;
      }
    } else if (e.key === 'Enter') {
      // Show lesson complete modal on Enter when lesson is complete
      if (isComplete) {
        e.preventDefault();
        const showModalEvent = new CustomEvent('showLessonCompleteModal');
        window.dispatchEvent(showModalEvent);
      }
    } else if (e.key === 'Escape') {
      // Toggle sidebar (Escape)
      const toggleSidebarEvent = new CustomEvent('toggleSidebar');
      window.dispatchEvent(toggleSidebarEvent);
    }
  };

  const getCharacterClass = (state: CharacterState) => {
    if (!state.typed) {
      return 'text-gray-400';
    }
    if (state.correct) {
      return 'text-green-400 bg-green-900/20';
    }
    return 'text-red-400 bg-red-900/20 underline decoration-red-500';
  };

  return (
    <div className="flex-1 flex flex-col min-h-0">
      {isComplete && originalCode && wpm !== undefined && accuracy !== undefined && errors !== undefined && language && (
        <AIFeedback
          userInput={userInput}
          originalCode={originalCode}
          wpm={wpm}
          accuracy={accuracy}
          errors={errors}
          language={language}
        />
      )}
      <div className="flex-1 relative overflow-y-auto min-h-0">
        <div className="absolute inset-0 p-6">
          <div className="font-mono text-sm leading-relaxed whitespace-pre-wrap">
            {characterStates.map((state, index) => (
              <span
                key={index}
                className={getCharacterClass(state)}
              >
                {state.character}
              </span>
            ))}
            {currentPosition < characterStates.length && (
              <span className="inline-block w-0.5 h-5 bg-cyan-400 animate-pulse ml-0.5 shadow-lg shadow-cyan-400/50" />
            )}
          </div>
        </div>

        <textarea
          ref={textareaRef}
          value={userInput}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full h-full bg-transparent text-transparent caret-transparent resize-none outline-none font-mono text-sm leading-relaxed p-6"
          placeholder=""
          spellCheck={false}
        />
      </div>
      
      <div className="px-6 py-4 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-sm text-gray-400">
              💡 Start typing to begin • Green = correct, Red = error • Complete the code to see AI feedback
            </p>
            <div className="mt-2 text-xs text-gray-500">
              <span className="font-medium">Keyboard shortcuts:</span> Ctrl+R (reset) • Ctrl+N (next) • Ctrl+P (previous) • Ctrl+Enter (complete) • Enter (show graph) • Esc (sidebar)
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span className="text-xs text-gray-500">Correct</span>
            <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
            <span className="text-xs text-gray-500">Error</span>
          </div>
        </div>
      </div>
    </div>
  );
}
