-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "selectedLanguage" TEXT NOT NULL DEFAULT 'javascript',
    "selectedDifficulty" TEXT NOT NULL DEFAULT 'easy',
    "practiceMode" BOOLEAN NOT NULL DEFAULT false,
    "practiceTimer" INTEGER NOT NULL DEFAULT 0,
    "totalLessonsCompleted" INTEGER NOT NULL DEFAULT 0,
    "totalPracticeTime" INTEGER NOT NULL DEFAULT 0,
    "currentStreak" INTEGER NOT NULL DEFAULT 0,
    "bestStreak" INTEGER NOT NULL DEFAULT 0,
    "bestWPM" INTEGER NOT NULL DEFAULT 0,
    "averageWPM" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "averageAccuracy" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "totalErrors" INTEGER NOT NULL DEFAULT 0,
    "favoriteLanguage" TEXT NOT NULL DEFAULT '',
    "completedLessons" INTEGER[],
    "achievements" TEXT[],

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "practice_sessions" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "startTime" INTEGER NOT NULL,
    "endTime" INTEGER NOT NULL,
    "duration" INTEGER NOT NULL,
    "lessonsCompleted" INTEGER NOT NULL,
    "averageWPM" DOUBLE PRECISION NOT NULL,
    "averageAccuracy" DOUBLE PRECISION NOT NULL,
    "difficulty" TEXT NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "practice_sessions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "practice_sessions" ADD CONSTRAINT "practice_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
