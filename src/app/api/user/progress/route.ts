import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get user ID from query params or headers
    const userId = request.nextUrl.searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ error: 'User ID required' }, { status: 400 });
    }

    // For now, return mock data during build/development
    // TODO: Replace with actual Prisma queries once database client is properly generated
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

    /*
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
          practiceSessions: true
        }
      });

      if (!user) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      return NextResponse.json({
        progress: {
          completedLessons: user.completedLessons,
          practiceSessions: user.practiceSessions,
          achievements: user.achievements
        },
        stats: {
          totalLessonsCompleted: user.totalLessonsCompleted,
          totalPracticeTime: user.totalPracticeTime,
          currentStreak: user.currentStreak,
          bestStreak: user.bestStreak,
          bestWPM: user.bestWPM,
          averageWPM: user.averageWPM,
          averageAccuracy: user.averageAccuracy,
          totalErrors: user.totalErrors,
          favoriteLanguage: user.favoriteLanguage
        },
        preferences: {
          selectedLanguage: user.selectedLanguage,
          selectedDifficulty: user.selectedDifficulty,
          practiceMode: user.practiceMode,
          practiceTimer: user.practiceTimer
        }
      });
    /*
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
    */
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, lessonId, wpm, accuracy, errors, timeSpent } = await request.json();

    if (!userId || !lessonId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // For now, simulate success during build/development
    // TODO: Replace with actual Prisma queries once database client is properly generated
    console.log('Progress saved (mock):', { userId, lessonId, wpm, accuracy, errors, timeSpent });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
