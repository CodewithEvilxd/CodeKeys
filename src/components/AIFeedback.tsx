'use client';

import { useState } from 'react';
import { Brain, Sparkles, Loader2 } from 'lucide-react';

interface AIFeedbackProps {
  userInput: string;
  originalCode: string;
  wpm: number;
  accuracy: number;
  errors: number;
  language: string;
}

export default function AIFeedback({ userInput, originalCode, wpm, accuracy, errors, language }: AIFeedbackProps) {
  const [analysis, setAnalysis] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const getAIAnalysis = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'typing_performance',
          data: {
            userInput,
            originalCode,
            wpm,
            accuracy,
            errors
          }
        })
      });

      const data = await response.json();
      setAnalysis(data.analysis);
      setShowFeedback(true);
    } catch (error) {
      console.error('AI Analysis error:', error);
      setAnalysis("Great job! Keep practicing to improve your typing speed and accuracy.");
      setShowFeedback(true);
    } finally {
      setLoading(false);
    }
  };

  const getPersonalizedTips = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/ai/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'personalized_tips',
          data: {
            userStats: {
              bestWPM: wpm,
              averageAccuracy: accuracy,
              totalErrors: errors,
              totalLessonsCompleted: 1
            },
            currentLanguage: language
          }
        })
      });

      const data = await response.json();
      setAnalysis(data.analysis);
      setShowFeedback(true);
    } catch (error) {
      console.error('AI Tips error:', error);
      setAnalysis("Keep practicing regularly to improve your coding skills!");
      setShowFeedback(true);
    } finally {
      setLoading(false);
    }
  };

  if (showFeedback) {
    return (
      <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-2 mb-3">
          <Brain className="h-5 w-5 text-purple-400" />
          <h3 className="text-lg font-semibold text-purple-400">AI Analysis</h3>
        </div>
        <p className="text-gray-300 text-sm leading-relaxed">{analysis}</p>
        <button
          onClick={() => setShowFeedback(false)}
          className="mt-3 text-xs text-purple-400 hover:text-purple-300 transition-colors"
        >
          Hide Analysis
        </button>
      </div>
    );
  }

  return (
    <div className="flex space-x-2 mb-4">
      <button
        onClick={getAIAnalysis}
        disabled={loading}
        className="flex items-center space-x-2 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Brain className="h-4 w-4" />
        )}
        <span>Get AI Analysis</span>
      </button>
      
      <button
        onClick={getPersonalizedTips}
        disabled={loading}
        className="flex items-center space-x-2 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-50"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Sparkles className="h-4 w-4" />
        )}
        <span>Get Tips</span>
      </button>
    </div>
  );
}
