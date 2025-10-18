import { NextRequest, NextResponse } from 'next/server';
import { analyzeTypingPerformance, generatePersonalizedTips, analyzeCodeQuality } from '@/lib/gemini';

export async function POST(request: NextRequest) {
  try {
    const { type, data } = await request.json();
    
    let result;
    
    switch (type) {
      case 'typing_performance':
        result = await analyzeTypingPerformance(
          data.userInput,
          data.originalCode,
          data.wpm,
          data.accuracy,
          data.errors
        );
        break;
        
      case 'personalized_tips':
        result = await generatePersonalizedTips(
          data.userStats,
          data.currentLanguage
        );
        break;
        
      case 'code_quality':
        result = await analyzeCodeQuality(
          data.userCode,
          data.originalCode,
          data.language
        );
        break;
        
      default:
        return NextResponse.json({ error: 'Invalid analysis type' }, { status: 400 });
    }

    return NextResponse.json({ analysis: result });
  } catch (error) {
    console.error('AI Analysis error:', error);
    return NextResponse.json({ error: 'Analysis failed' }, { status: 500 });
  }
}
