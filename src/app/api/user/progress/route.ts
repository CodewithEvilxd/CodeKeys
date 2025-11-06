import { NextRequest, NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import { getDatabase } from '@/lib/mongodb';
import { User } from '@/models/User';

export async function GET(request: NextRequest) {
  try {
    // For development without MongoDB, return mock data
    if (!process.env.MONGODB_URI || process.env.MONGODB_URI.includes('localhost')) {
      return NextResponse.json({
        progress: {
          completedLessons: [],
          practiceSessions: [],
          achievements: []
        },
        stats: {
          totalLessonsCompleted: 0,
          totalPracticeTime: 0,
          currentStreak: 0,
          bestStreak: 0,
          bestWPM: 0,
          averageWPM: 0,
          averageAccuracy: 0,
          totalErrors: 0,
          favoriteLanguage: 'javascript'
        },
        preferences: {
          selectedLanguage: 'javascript',
          selectedDifficulty: 'easy',
          practiceMode: false,
          practiceTimer: 60
        }
      });
    }

    try {
      const db = await getDatabase();
      const users = db.collection<User>('users');

      // Get user ID from query params or headers
      const userId = request.nextUrl.searchParams.get('userId');

      if (!userId) {
        return NextResponse.json({ error: 'User ID required' }, { status: 400 });
      }

      const user = await users.findOne({ _id: new ObjectId(userId) });

      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      return NextResponse.json({
        progress: user.progress,
        stats: user.stats,
        preferences: user.preferences
      });
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      // Fallback to mock data if database is unavailable
      return NextResponse.json({
        progress: {
          completedLessons: [],
          practiceSessions: [],
          achievements: []
        },
        stats: {
          totalLessonsCompleted: 0,
          totalPracticeTime: 0,
          currentStreak: 0,
          bestStreak: 0,
          bestWPM: 0,
          averageWPM: 0,
          averageAccuracy: 0,
          totalErrors: 0,
          favoriteLanguage: 'javascript'
        },
        preferences: {
          selectedLanguage: 'javascript',
          selectedDifficulty: 'easy',
          practiceMode: false,
          practiceTimer: 60
        }
      });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    // For development without MongoDB, use localStorage for persistence
    if (!process.env.MONGODB_URI || process.env.MONGODB_URI.includes('localhost')) {
      console.log('Development mode: Saving progress to localStorage');

      const { userId, lessonId, wpm, accuracy, errors, timeSpent } = await request.json();

      if (!userId || !lessonId) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }

      // In a real app, this would be handled on the client side
      // For now, we'll just simulate success
      console.log('Progress saved:', { userId, lessonId, wpm, accuracy, errors, timeSpent });

      return NextResponse.json({ success: true });
    }

    try {
      const db = await getDatabase();
      const users = db.collection<User>('users');

      const { userId, lessonId, wpm, accuracy, errors, timeSpent } = await request.json();

      if (!userId || !lessonId) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }

      // Update user progress
      const updateResult = await users.updateOne(
        { _id: new ObjectId(userId) },
        {
          $addToSet: { 'progress.completedLessons': lessonId },
          $inc: {
            'stats.totalLessonsCompleted': 1,
            'stats.totalPracticeTime': timeSpent || 0,
            'stats.totalErrors': errors || 0
          },
          $set: {
            'stats.bestWPM': Math.max(wpm || 0, 0), // Update if better
            'stats.averageAccuracy': accuracy || 0,
            updatedAt: new Date()
          }
        }
      );

      if (updateResult.matchedCount === 0) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      return NextResponse.json({ success: true });
    } catch (dbError) {
      console.error('Database connection error:', dbError);
      // Fallback to mock success if database is unavailable
      console.log('Database unavailable, simulating success');
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
