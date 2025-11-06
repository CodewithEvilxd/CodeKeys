'use client';

interface DifficultySelectorProps {
  selectedDifficulty: 'easy' | 'medium' | 'hard' | 'all';
  onDifficultyChange: (difficulty: 'easy' | 'medium' | 'hard' | 'all') => void;
}

export default function DifficultySelector({ selectedDifficulty, onDifficultyChange }: DifficultySelectorProps) {
  const difficulties = [
    { id: 'all' as const, label: 'All Levels', color: 'gray' as const, description: 'Mix of all difficulties' },
    { id: 'easy' as const, label: 'Easy', color: 'green' as const, description: 'Beginner friendly' },
    { id: 'medium' as const, label: 'Medium', color: 'yellow' as const, description: 'Intermediate level' },
    { id: 'hard' as const, label: 'Hard', color: 'red' as const, description: 'Advanced challenges' }
  ];

  return (
    <div className="space-y-1">
      <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-2">
        Difficulty
      </h3>
      <div className="grid grid-cols-2 gap-1">
        {difficulties.map((difficulty) => (
          <button
            key={difficulty.id}
            onClick={() => onDifficultyChange(difficulty.id)}
            className={`
              px-2 py-1 text-xs font-medium rounded transition-all duration-200 text-center
              ${selectedDifficulty === difficulty.id 
                ? difficulty.color === 'green' ? 'bg-green-400 text-black' :
                  difficulty.color === 'yellow' ? 'bg-yellow-400 text-black' :
                  difficulty.color === 'red' ? 'bg-red-400 text-black' :
                  'bg-orange-400 text-black'
                : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
              }
            `}
            title={difficulty.description}
          >
            {difficulty.label}
          </button>
        ))}
      </div>
    </div>
  );
}
