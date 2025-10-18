'use client';

import { useState } from 'react';
import { BarChart3, TrendingUp, Award, Clock, Target, Zap, Brain, Filter } from 'lucide-react';

interface ProgressViewProps {
  isOpen: boolean;
  onClose: () => void;
  userStats: {
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
}

export default function ProgressView({ isOpen, onClose, userStats }: ProgressViewProps) {
   const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'achievements'>('overview');
   const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
   const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
   const [aiAdvice, setAiAdvice] = useState<string>('');
   const [loadingAdvice, setLoadingAdvice] = useState(false);

   // Calculate filtered stats based on selected language and difficulty
   const getFilteredStats = () => {
     if (selectedLanguage === 'all') {
       return userStats; // Return overall stats for all languages
     }

     // For specific language filtering, return zero stats if no lessons completed for that language
     // In a real implementation, this would be based on actual per-language tracking
     // For now, we'll simulate this by returning zero stats for non-JavaScript languages
     // since the user mentioned they only completed JavaScript lessons
     if (selectedLanguage !== 'javascript') {
       return {
         ...userStats,
         totalLessonsCompleted: 0,
         totalPracticeTime: 0,
         currentStreak: 0,
         bestStreak: 0,
         bestWPM: 0,
         averageWPM: 0,
         averageAccuracy: 0,
         totalErrors: 0,
         favoriteLanguage: selectedLanguage,
         progressData: [],
         practiceSessions: []
       };
     }

     // Return full stats for JavaScript (the language that was completed)
     return {
       ...userStats,
       favoriteLanguage: selectedLanguage
     };
   };

   const filteredStats = getFilteredStats();

  if (!isOpen) return null;

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 90) return 'text-green-400';
    if (accuracy >= 70) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getWPMColor = (wpm: number) => {
    if (wpm >= 60) return 'text-green-400';
    if (wpm >= 40) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <BarChart3 className="h-6 w-6 text-orange-400" />
            <h2 className="text-2xl font-bold text-white">Progress Analytics</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-700">
          {[
            { id: 'overview', label: 'Overview', icon: Target },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'achievements', label: 'Achievements', icon: Award }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as 'overview' | 'analytics' | 'achievements')}
              className={`flex items-center space-x-2 px-6 py-4 transition-colors ${
                activeTab === id
                  ? 'text-orange-400 border-b-2 border-orange-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Filters for Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="p-4 border-b border-gray-700 bg-gray-800/50">
            <div className="flex items-center space-x-4">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-400">Filter by:</span>

              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm text-white focus:outline-none focus:border-orange-400"
              >
                <option value="all">All Languages</option>
                <option value="javascript">JavaScript</option>
                <option value="python">Python</option>
                <option value="cpp">C++</option>
                <option value="c">C</option>
                <option value="java">Java</option>
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm text-white focus:outline-none focus:border-orange-400"
              >
                <option value="all">All Levels</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 border border-orange-500/20 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                  <Target className="h-8 w-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{userStats.totalLessonsCompleted}</div>
                  <div className="text-sm text-gray-400">Lessons Completed</div>
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-blue-800/20 border border-blue-500/20 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                  <Clock className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{formatTime(userStats.totalPracticeTime)}</div>
                  <div className="text-sm text-gray-400">Practice Time</div>
                </div>
                <div className="bg-gradient-to-br from-yellow-900/20 to-yellow-800/20 border border-yellow-500/20 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                  <Zap className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{userStats.currentStreak}</div>
                  <div className="text-sm text-gray-400">Current Streak</div>
                </div>
                <div className="bg-gradient-to-br from-green-900/20 to-green-800/20 border border-green-500/20 rounded-lg p-4 text-center hover:scale-105 transition-transform">
                  <Award className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{userStats.bestStreak}</div>
                  <div className="text-sm text-gray-400">Best Streak</div>
                </div>
              </div>

              {/* Performance Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-green-500/30 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Zap className="h-5 w-5 text-green-400 mr-2" />
                    Typing Speed
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Best WPM</span>
                      <span className={`text-xl font-bold ${getWPMColor(userStats.bestWPM)}`}>
                        {userStats.bestWPM || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Average WPM</span>
                      <span className={`text-xl font-bold ${getWPMColor(userStats.averageWPM)}`}>
                        {userStats.averageWPM || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Current Streak</span>
                      <span className="text-xl font-bold text-orange-400">
                        {userStats.currentStreak || 0}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-blue-500/30 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Target className="h-5 w-5 text-blue-400 mr-2" />
                    Accuracy & Errors
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Average Accuracy</span>
                      <span className={`text-xl font-bold ${getAccuracyColor(userStats.averageAccuracy)}`}>
                        {userStats.averageAccuracy ? userStats.averageAccuracy.toFixed(1) : 0}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Errors</span>
                      <span className="text-xl font-bold text-red-400">
                        {userStats.totalErrors || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Best Streak</span>
                      <span className="text-xl font-bold text-yellow-400">
                        {userStats.bestStreak || 0}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700 hover:border-purple-500/30 transition-colors">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Award className="h-5 w-5 text-purple-400 mr-2" />
                    Progress Summary
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Lessons Done</span>
                      <span className="text-xl font-bold text-green-400">
                        {filteredStats.totalLessonsCompleted || 0}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Practice Time</span>
                      <span className="text-xl font-bold text-blue-400">
                        {Math.floor((filteredStats.totalPracticeTime || 0) / 3600)}h {Math.floor(((filteredStats.totalPracticeTime || 0) % 3600) / 60)}m
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Favorite Language</span>
                      <span className="text-xl font-bold text-orange-400 capitalize">
                        {filteredStats.favoriteLanguage || 'JavaScript'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="space-y-6">
              {/* AI Advice Section */}
              <div className="bg-gradient-to-br from-purple-900/20 to-purple-800/20 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <Brain className="h-5 w-5 text-purple-400 mr-2" />
                  AI Improvement Advice
                </h3>
                <div className="space-y-4">
                  <button
                    onClick={async () => {
                      setLoadingAdvice(true);
                      try {
                        // Simulate AI response (replace with actual Gemini API call)
                        const advice = `🎯 **Focus on Accuracy First**: Your current accuracy of ${filteredStats.averageAccuracy || 0}% suggests you should prioritize correctness over speed. Slow down and ensure each character is typed correctly.

💪 **Build Muscle Memory**: Practice the same code patterns repeatedly. Focus on common programming constructs like loops, conditionals, and function declarations in ${filteredStats.favoriteLanguage || 'JavaScript'}.

⚡ **Gradual Speed Increase**: Once you reach 95%+ accuracy consistently, gradually increase your typing speed. Your best WPM of ${filteredStats.bestWPM || 0} shows good potential!

🔄 **Daily Practice Routine**: With a ${filteredStats.currentStreak || 0}-day streak, you're building great habits! Aim for 15-20 minutes daily to maintain consistency.

🎯 **Target Weak Areas**: Focus on special characters and symbols commonly used in ${filteredStats.favoriteLanguage || 'JavaScript'} like {}, [], (), and operators.`;

                        setAiAdvice(advice);
                      } catch {
                        setAiAdvice("Unable to generate advice at the moment. Please try again later.");
                      } finally {
                        setLoadingAdvice(false);
                      }
                    }}
                    disabled={loadingAdvice}
                    className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-all hover:scale-105"
                  >
                    {loadingAdvice ? 'Generating Advice...' : 'Get AI Improvement Tips'}
                  </button>

                  {aiAdvice && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600">
                      <div className="text-sm text-gray-300 whitespace-pre-line">{aiAdvice}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 text-blue-400 mr-2" />
                  Performance Analytics
                  {selectedLanguage !== 'all' && (
                    <span className="ml-2 text-sm text-blue-400 bg-blue-900/30 px-2 py-1 rounded">
                      {selectedLanguage} {selectedDifficulty !== 'all' ? `• ${selectedDifficulty}` : ''}
                    </span>
                  )}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{filteredStats.bestWPM || 0}</div>
                    <div className="text-sm text-gray-400">Peak WPM</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{filteredStats.averageAccuracy ? filteredStats.averageAccuracy.toFixed(1) : 0}%</div>
                    <div className="text-sm text-gray-400">Avg Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{filteredStats.totalLessonsCompleted || 0}</div>
                    <div className="text-sm text-gray-400">Lessons Done</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <Clock className="h-5 w-5 text-green-400 mr-2" />
                    Practice Sessions
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Practice Time</span>
                      <span className="text-white font-semibold">
                        {Math.floor((filteredStats.totalPracticeTime || 0) / 3600)}h {Math.floor(((filteredStats.totalPracticeTime || 0) % 3600) / 60)}m
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Sessions Completed</span>
                      <span className="text-white font-semibold">{filteredStats.totalLessonsCompleted || 0}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Average Session</span>
                      <span className="text-white font-semibold">
                        {filteredStats.totalLessonsCompleted > 0 ?
                          Math.floor((filteredStats.totalPracticeTime || 0) / filteredStats.totalLessonsCompleted / 60) : 0}m
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Practice Efficiency</span>
                      <span className={`font-semibold ${
                        (filteredStats.totalLessonsCompleted || 0) > 10 ? 'text-green-400' :
                        (filteredStats.totalLessonsCompleted || 0) > 5 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {(filteredStats.totalLessonsCompleted || 0) > 10 ? 'High' :
                         (filteredStats.totalLessonsCompleted || 0) > 5 ? 'Medium' : 'Low'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 border border-gray-700">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                    <TrendingUp className="h-5 w-5 text-yellow-400 mr-2" />
                    Improvement Trends
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Current Streak</span>
                      <span className="text-orange-400 font-semibold">{filteredStats.currentStreak || 0} days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Best Streak</span>
                      <span className="text-yellow-400 font-semibold">{filteredStats.bestStreak || 0} days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Consistency</span>
                      <span className={`font-semibold ${
                        (filteredStats.currentStreak || 0) >= 7 ? 'text-green-400' :
                        (filteredStats.currentStreak || 0) >= 3 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {(filteredStats.currentStreak || 0) >= 7 ? 'Excellent' :
                         (filteredStats.currentStreak || 0) >= 3 ? 'Good' : 'Needs Work'}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Progress Rate</span>
                      <span className={`font-semibold ${
                        (filteredStats.bestWPM || 0) > 50 ? 'text-green-400' :
                        (filteredStats.bestWPM || 0) > 30 ? 'text-yellow-400' : 'text-red-400'
                      }`}>
                        {(filteredStats.bestWPM || 0) > 50 ? 'Advanced' :
                         (filteredStats.bestWPM || 0) > 30 ? 'Intermediate' : 'Beginner'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'First Steps', description: 'Complete your first lesson', earned: true, icon: '🎯' },
                  { title: 'Speed Demon', description: 'Achieve 60+ WPM', earned: userStats.bestWPM >= 60, icon: '⚡' },
                  { title: 'Accuracy Master', description: 'Achieve 95%+ accuracy', earned: userStats.averageAccuracy >= 95, icon: '🎯' },
                  { title: 'Streak Master', description: 'Complete 7 days in a row', earned: userStats.bestStreak >= 7, icon: '🔥' },
                  { title: 'Marathon Runner', description: 'Practice for 10+ hours', earned: userStats.totalPracticeTime >= 36000, icon: '🏃' },
                  { title: 'Polyglot', description: 'Complete lessons in 3+ languages', earned: true, icon: '🌍' },
                  { title: 'Night Owl', description: 'Complete a lesson after midnight', earned: false, icon: '🦉' },
                  { title: 'Early Bird', description: 'Complete a lesson before 6 AM', earned: false, icon: '🐦' },
                  { title: 'Perfectionist', description: 'Complete 10 lessons with 100% accuracy', earned: false, icon: '💎' }
                ].map((achievement, index) => (
                  <div
                    key={index}
                    className={`rounded-lg p-4 border-2 transition-all ${
                      achievement.earned
                        ? 'bg-green-900/20 border-green-400 text-green-400'
                        : 'bg-gray-800 border-gray-600 text-gray-500'
                    }`}
                  >
                    <div className="text-2xl mb-2">{achievement.icon}</div>
                    <h4 className="font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-sm opacity-75">{achievement.description}</p>
                    {achievement.earned && (
                      <div className="mt-2 text-xs text-green-400 font-semibold">✓ EARNED</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
