# CodeKeys - Interactive Code Typing Practice Platform

[![GitHub](https://img.shields.io/badge/GitHub-codewithevilxd-black?style=flat-square&logo=github)](https://github.com/codewithevilxd)
[![Discord](https://img.shields.io/badge/Discord-codewithevilxd-5865F2?style=flat-square&logo=discord)](https://discord.gg/codewithevilxd)
[![Instagram](https://img.shields.io/badge/Instagram-codewithevilxd-E4405F?style=flat-square&logo=instagram)](https://instagram.com/codewithevilxd)
[![Email](https://img.shields.io/badge/Email-codewithevilxd-red?style=flat-square&logo=gmail)](mailto:codewithevilxd@gmail.com)

A modern, dark-themed code typing practice platform built with Next.js 14+, TypeScript, and Tailwind CSS. Master programming languages through immersive typing practice with real-time feedback, progress tracking, and gamification features.

## 🚀 Features

- **46 Interactive Lessons** covering JavaScript, Python, and C++
- **Real-time Typing Stats** - WPM, CPM, Accuracy, Errors, and Streak tracking
- **Character-by-character Color Coding** - Visual feedback for correct/incorrect typing
- **PWA Support** - Install as a native app on mobile and desktop
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Dark Theme** - Easy on the eyes with a modern color palette
- **Progress Tracking** - Track completed lessons and overall progress
- **Streak System** - Daily practice streaks with best streak tracking
- **Offline Support** - Works without internet connection
- **Smooth Animations** - Polished user experience with smooth transitions
- **Practice Mode** - Timed practice sessions with customizable duration

## 🎨 Design System

### Color Palette
- **Primary Background**: `#0d0d0d` (Deep Dark)
- **Secondary Background**: `#1a1a1a` (Card Backgrounds)
- **Accent/Primary**: `#f97316` (Orange - Brand Color)
- **Text Primary**: `#e5e5e5` (Light Gray)
- **Text Secondary**: `#9ca3af` (Medium Gray)
- **Text Tertiary**: `#6b7280` (Muted Gray)
- **Success**: `#22c55e` (Green)
- **Error**: `#ef4444` (Red)
- **Warning**: `#f59e0b` (Amber)
- **Info**: `#3b82f6` (Blue)

### Typography
- **Primary Font**: Geist Sans (Modern, Clean)
- **Monospace Font**: Geist Mono (Code Display)
- **Font Sizes**: Responsive scaling (mobile to desktop)
- **Line Heights**: Optimized for readability

### UI Components
- **Buttons**: Gradient backgrounds with hover effects
- **Cards**: Subtle borders with rounded corners
- **Inputs**: Clean borders with focus states
- **Stats Display**: Color-coded metrics with icons

## 🛠️ Tech Stack

- **Next.js 15** with App Router and Turbopack
- **React 19** with modern hooks and concurrent features
- **TypeScript** for type safety and better DX
- **Tailwind CSS 4** for utility-first styling
- **Lucide React** for beautiful, consistent icons
- **PWA Support** with Service Workers and Web App Manifest
- **Local Storage** for offline progress persistence
- **MongoDB** integration for cloud data storage
- **Google Gemini AI** for intelligent code analysis and feedback

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- MongoDB (optional, for cloud features)
- Git

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/codewithevilxd/codekeys.git
cd codekeys
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
```bash
cp .env.local.example .env.local
# Edit .env.local with your API keys
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Start practicing immediately!

### Production Deployment

```bash
npm run build
npm start
```

The app is optimized for deployment on Vercel, Netlify, or any Node.js hosting platform.

## 🏗️ Project Architecture

```
codekeys/
├── public/
│   ├── manifest.json         # PWA manifest
│   ├── sw.js                # Service worker
│   ├── image.png            # App icon
│   └── favicon.ico          # Browser favicon
├── src/
│   ├── app/
│   │   ├── api/             # API routes (progress, AI analysis)
│   │   ├── globals.css      # Global styles & Tailwind config
│   │   ├── layout.tsx       # Root layout with PWA meta tags
│   │   └── page.tsx         # Main typing interface
│   ├── components/
│   │   ├── CodeEditor.tsx   # Interactive typing area
│   │   ├── LessonCompleteModal.tsx # Completion celebrations
│   │   ├── PWAInstallPrompt.tsx    # App installation UI
│   │   ├── ProgressView.tsx # Analytics dashboard
│   │   ├── Sidebar.tsx      # Navigation & lesson selection
│   │   ├── StatsBar.tsx     # Real-time performance metrics
│   │   └── ThemeProvider.tsx # Dark/light theme management
│   ├── data/
│   │   └── lessons.ts       # 46 programming lessons
│   ├── hooks/
│   │   ├── useStats.ts      # Performance calculations
│   │   └── useTyping.ts     # Typing state management
│   ├── lib/
│   │   ├── gemini.ts        # AI code analysis
│   │   ├── mongodb.ts       # Database connection
│   │   └── utils.ts         # Helper functions
│   └── types/
│       ├── css.d.ts         # CSS module types
│       └── index.ts         # Core type definitions
├── package.json             # Dependencies & scripts
├── tailwind.config.ts       # Styling configuration
├── next.config.ts          # Next.js configuration
└── README.md               # This file
```

## 🎯 How to Use

### Getting Started
1. **Choose Your Language** - Select between JavaScript, Python, or C++ from the sidebar
2. **Pick a Lesson** - Browse through 46 comprehensive lessons by difficulty
3. **Start Practicing** - Click in the code editor and begin typing exactly as shown
4. **Monitor Progress** - Watch real-time WPM, accuracy, and streak updates
5. **Complete & Advance** - Press Enter to finish lessons and unlock the next challenge

### Advanced Features
- **Practice Mode**: Set timed sessions (default 5 minutes) for focused practice
- **Streak Tracking**: Build daily coding habits with streak counters
- **Progress Analytics**: View detailed statistics and performance graphs
- **PWA Installation**: Install as a native app for offline practice
- **Theme Toggle**: Switch between light and dark modes

### Keyboard Shortcuts
- `Ctrl/Cmd + N`: Next lesson
- `Ctrl/Cmd + P`: Previous lesson
- `Enter`: Complete current lesson
- `Tab`: Toggle sidebar

## 📊 Stats & Gamification

### Performance Metrics
- **WPM (Words Per Minute)** - Standard typing speed metric (characters/5 per minute)
- **CPM (Characters Per Minute)** - Raw typing speed
- **Accuracy** - Percentage of correctly typed characters
- **Errors** - Total incorrect keystrokes
- **Streak** - Current/Best consecutive practice days

### Gamification Features
- **Daily Streaks** - Build coding habits with streak tracking
- **Progress Visualization** - Real-time graphs and analytics
- **Achievement System** - Unlock milestones and badges
- **Leaderboards** - Compare progress with other learners
- **Practice Sessions** - Timed challenges with detailed breakdowns

### Data Persistence
- **Local Storage** - Progress saved automatically in browser
- **Cloud Sync** - Optional MongoDB integration for cross-device sync
- **Offline Mode** - Full functionality without internet connection

## 🎨 Customization

The app uses CSS custom properties for easy theming. You can modify the colors in `src/app/globals.css`:

```css
:root {
  --background: #0d0d0d;
  --foreground: #e5e5e5;
  --card: #1a1a1a;
  --border: #2a2a2a;
  --primary: #f97316;
  --secondary: #9ca3af;
  --tertiary: #6b7280;
  --success: #22c55e;
  --error: #ef4444;
}
```

## 🚀 Deployment & PWA

### One-Click Deployment
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/codewithevilxd/codekeys)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/codewithevilxd/codekeys)

### Manual Deployment
```bash
npm run build
npm start
```

### PWA Features
- **Installable** - Add to home screen on mobile/desktop
- **Offline-First** - Service worker caches essential resources
- **Native App Experience** - Standalone mode with proper app icons
- **Background Sync** - Progress syncs when connection returns
- **Push Notifications** - Optional streak reminders (future feature)

### Environment Variables
```env
# Required for AI features
GOOGLE_GEMINI_API_KEY=your_gemini_api_key

# Optional for cloud storage
MONGODB_URI=mongodb://localhost:27017/codekeys
```

## 📱 Responsive Design

- **Mobile (< 768px)**: Overlay sidebar with toggle button
- **Tablet (768px - 1024px)**: Collapsible sidebar
- **Desktop (> 1024px)**: Always visible sidebar

## 🎓 Lessons Covered

The platform includes 46 comprehensive lessons covering:

1. Declaring Variables
2. Conditional Statements
3. Loops
4. Functions
5. Arrays
6. Variables Detailed
7. Data Types
8. Type Conversion
9. Comparison
10. Strings
11. Numbers & Math
12. Dates
13. Arrays Basics
14. Array Methods
15. Objects Basics
16. Objects Advanced
17. Functions Detailed
18. Scopes
19. Arrow Functions
20. IIFE
21. Control Flow Basics
22. Switch Statement
23. Truthy & Falsy
24. For Loop
25. While Loop
26. For...of Loop
27. For...in Loop
28. forEach
29. Filter
30. Map
31. Reduce
32. Prototypes
33. Classes
34. Inheritance
35. DOM Selection
36. DOM Manipulation
37. Event Listeners
38. Event Propagation
39. This Keyword
40. Bind, Call, Apply
41. Callbacks
42. Promises
43. Async/Await
44. Destructuring
45. Spread & Rest
46. Modules

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute
- 🐛 **Bug Reports** - Found an issue? [Open an issue](https://github.com/codewithevilxd/codekeys/issues)
- 💡 **Feature Requests** - Have an idea? [Suggest it here](https://github.com/codewithevilxd/codekeys/discussions)
- 🔧 **Code Contributions** - Submit pull requests with improvements
- 📖 **Documentation** - Help improve docs and tutorials
- 🎨 **Design** - UI/UX improvements and accessibility enhancements

### Development Setup
```bash
git clone https://github.com/codewithevilxd/codekeys.git
cd codekeys
npm install
npm run dev
```

### Guidelines
- Follow the existing code style and TypeScript conventions
- Add tests for new features
- Update documentation for API changes
- Ensure PWA compatibility for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing React framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Google Gemini** - For AI-powered code analysis
- **Open Source Community** - For the incredible tools and libraries

## 📞 Contact & Support

- **GitHub**: [@codewithevilxd](https://github.com/codewithevilxd)
- **Discord**: [codewithevilxd](https://discord.gg/codewithevilxd)
- **Instagram**: [@codewithevilxd](https://instagram.com/codewithevilxd)
- **Email**: [codewithevilxd@gmail.com](mailto:codewithevilxd@gmail.com)

---

**Built with ❤️ by [codewithevilxd](https://github.com/codewithevilxd)**

**Happy Coding! 🚀**