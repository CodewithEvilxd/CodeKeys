import { GoogleGenerativeAI } from '@google/generative-ai';
import { UserStats } from '@/types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export const analyzeTypingPerformance = async (
  userInput: string,
  originalCode: string,
  wpm: number,
  accuracy: number,
  errors: number
) => {
  try {
    // Check if API key is available
    if (!process.env.GEMINI_API_KEY || process.env.GEMINI_API_KEY === 'your_gemini_api_key_here') {
      console.log('Gemini API key not configured, using fallback response');
      return generateFallbackFeedback(wpm, accuracy, errors);
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    const prompt = `
    Analyze the following typing performance and provide constructive feedback:

    Original Code: ${originalCode}
    User Input: ${userInput}
    WPM: ${wpm}
    Accuracy: ${accuracy}%
    Errors: ${errors}

    Please provide:
    1. A brief performance summary
    2. Specific areas for improvement
    3. Tips to increase speed and accuracy
    4. Encouragement and motivation

    Keep the response concise and helpful (max 200 words).
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    return generateFallbackFeedback(wpm, accuracy, errors);
  }
};

const generateFallbackFeedback = (wpm: number, accuracy: number, errors: number) => {
  let feedback = '';

  if (wpm >= 40 && accuracy >= 90) {
    feedback = "Excellent work! Your typing speed and accuracy are impressive. Keep up the great practice!";
  } else if (wpm >= 25 && accuracy >= 80) {
    feedback = "Good job! You're making solid progress. Focus on accuracy to improve your overall performance.";
  } else if (wpm >= 15) {
    feedback = "Nice effort! Keep practicing regularly. Try to type more deliberately to reduce errors.";
  } else {
    feedback = "Great start! Focus on accuracy first, then gradually increase your speed. Regular practice will help you improve significantly.";
  }

  if (errors > 10) {
    feedback += " Try to look at the code ahead and anticipate what comes next.";
  }

  return feedback;
};

export const generatePersonalizedTips = async (
  userStats: UserStats,
  currentLanguage: string
) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `
    Based on the user's typing statistics, provide personalized tips:
    
    Language: ${currentLanguage}
    Best WPM: ${userStats.bestWPM}
    Average Accuracy: ${userStats.averageAccuracy}%
    Total Errors: ${userStats.totalErrors}
    Completed Lessons: ${userStats.totalLessonsCompleted}
    
    Provide 3-5 specific, actionable tips to help improve their ${currentLanguage} typing skills.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    return "Keep practicing regularly to improve your coding skills!";
  }
};

export const analyzeCodeQuality = async (
  userCode: string,
  originalCode: string,
  language: string
) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    
    const prompt = `
    Analyze the code quality and provide feedback:
    
    Language: ${language}
    Original Code: ${originalCode}
    User Code: ${userCode}
    
    Please provide:
    1. Syntax accuracy
    2. Code structure feedback
    3. Best practices suggestions
    4. Areas for improvement
    
    Keep it concise and educational (max 150 words).
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Gemini API Error:', error);
    return "Code looks good! Keep practicing to master the syntax.";
  }
};
