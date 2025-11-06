# ⌨️ Type.io

<div align="center">
  <img src="https://img.shields.io/badge/App-Type.io-brightgreen" alt="Type.io">
  <img src="https://img.shields.io/badge/Language-JavaScript-yellow" alt="JavaScript">
  <img src="https://img.shields.io/badge/Framework-React-blue" alt="React">
  <img src="https://img.shields.io/badge/License-MIT-blue" alt="MIT License">
</div>

<div align="center">
  <h3>⚡ A modern typing speed test application built with React and Tailwind CSS</h3>
  <p>Test your typing speed with two exciting game modes!</p>
</div>

---

## 📖 Table of Contents

- [🚀 Quick Start](#-quick-start)
- [✨ Features](#-features)
- [🎯 Game Modes](#-game-modes)
- [🎮 How to Play](#-how-to-play)
- [🏆 Scoring System](#-scoring-system)
- [📁 Project Structure](#-project-structure)
- [🛠️ Technical Details](#️-technical-details)
- [🎨 Styling](#-styling)
- [📧 Contact](#-contact)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SujitInWeb/Type.io.git
   ```

2. **Navigate to project directory:**
   ```bash
   cd Type.io
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   ```
   Navigate to http://localhost:5173
   ```

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎮 **Two Game Modes** | Infinite Mode and Calculator Mode (30s timed) |
| ⚡ **Real-time Tracking** | Live WPM calculation and error tracking |
| 🎯 **Accurate Scoring** | Precise character-by-character validation |
| 📱 **Responsive Design** | Works seamlessly across all device sizes |
| 🎨 **Modern UI** | Sleek dark theme with glassmorphism effects |
| ⌨️ **Smooth Scrolling** | Auto-scroll text as you type |
| 🔄 **Instant Restart** | Quick game reset functionality |
| 💯 **WPM Calculator** | Accurate Words Per Minute calculation |

---

## 🎯 Game Modes

### ⚡ Infinite Mode
- **No time limit** - Practice at your own pace
- **Error tracking** - See your mistakes in real-time
- **Continuous practice** - Perfect for improving accuracy
- **Restart anytime** - Reset and try again whenever you want

### ⏱️ Calculator Mode (30s Challenge)
- **30-second timer** - Race against the clock
- **WPM calculation** - Get your typing speed results
- **Performance metrics** - See your words per minute and error count
- **Immediate results** - View your score when time runs out

---

## 🎮 How to Play

### Getting Started
1. **Select a mode** from the sidebar (Infinite or Calculator)
2. **Start typing** - The game begins automatically when you type
3. **Match the text** - Type exactly as shown on screen
4. **Track your progress** - Watch your stats update in real-time
5. **Restart anytime** - Click the restart button to try again

### Gameplay Mechanics
- **Correct characters** appear in gray
- **Incorrect characters** appear in red
- **Current position** highlighted with white background
- **Upcoming text** shown in white
- **Auto-scrolling** keeps the active text visible

---

## 🏆 Scoring System

### 📊 Metrics Tracked

| Metric | Description | Display |
|--------|-------------|---------|
| **Typos** | Number of incorrect characters typed | Real-time counter |
| **WPM** | Words Per Minute (Calculator Mode only) | Final score screen |
| **Time** | Remaining time (Calculator Mode only) | Live countdown |
| **Accuracy** | Correct vs incorrect characters | Visual feedback |

### 🧮 WPM Calculation
```javascript
WPM = (Correct Characters / 5) / (Time Elapsed in Minutes)
```
- Uses standard 5-character word length
- Updates in real-time during typing
- Final score displayed at game end (Calculator Mode)

---

## 📁 Project Structure

```
Type.io/
├── 📁 src/
│   ├── 📁 assets/
│   │   ├── github-fill.svg      # GitHub icon
│   │   └── twitter-x-line.svg   # Twitter/X icon
│   ├── 📄 App.jsx               # Main app component & mode switching
│   ├── 📄 App.css               # App-level styles & font imports
│   ├── 📄 Calculator.jsx        # 30s timed mode component
│   ├── 📄 Infinite.jsx          # Infinite practice mode component
│   ├── 📄 Sidebar.jsx           # Navigation sidebar component
│   ├── 📄 main.jsx              # React entry point
│   └── 📄 index.css             # Global styles & scrollbar config
├── 📄 index.html                # HTML entry point
├── 📄 package.json              # Dependencies & scripts
├── 📄 vite.config.js            # Vite configuration
└── 📋 readme.md                 # This file
```

### 📦 Component Breakdown

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| **App.jsx** | Root component | Mode state management, layout structure |
| **Sidebar.jsx** | Navigation | Mode switching, social links |
| **Infinite.jsx** | Practice mode | Unlimited typing practice, error tracking |
| **Calculator.jsx** | Timed mode | 30s countdown, WPM calculation, results screen |

---

## 🛠️ Technical Details

### ⚙️ Technology Stack
- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Fonts**: 
  - Bungee Spice (headings)
  - Electrolize (text display)
  - Roboto (UI elements)

### 🎮 Game Configuration
| Setting | Value | Description |
|---------|-------|-------------|
| **Word Pool** | 80+ words | Random pangram-based words |
| **Text Length** | 200 words | Generated per game session |
| **Timer** | 30 seconds | Calculator Mode only |
| **Font Size** | 2xl (text-2xl) | Main typing area |
| **Scroll Behavior** | Smooth | Auto-scroll as you type |

### 🔄 Core Game Logic

#### State Management
```javascript
// Common States (Both Modes)
- displayText      // Generated text to type
- currentIndex     // Current character position
- typoCount        // Total errors made
- mistakes         // Set of mistake indices

// Calculator Mode Additional States
- timeLeft         // Countdown timer (30s)
- isGameActive     // Game running state
- isGameOver       // Game completion state
- wpm              // Words per minute score
- typedText        // User's typed input
```

#### Key Functions
| Function | Purpose | Implementation |
|----------|---------|----------------|
| **randomWord()** | Select random word from pool | Math.random() based selection |
| **newGame()** | Reset game state | Reinitialize all state variables |
| **renderText()** | Display text with colors | Character-by-character mapping |
| **handlekeypress()** | Process user input | Event listener for keyboard input |
| **Auto-scroll** | Keep current text visible | Smooth scroll based on character position |

### 📊 WPM Calculation Algorithm
```javascript
1. Track time elapsed (30s - timeLeft)
2. Count correct characters typed
3. Calculate correct words (correctChars / 5)
4. Compute WPM: (correctWords / minutes)
5. Update in real-time during typing
```

### 🎯 Collision Detection (Character Matching)
- **Exact matching**: Character must match exactly (case-sensitive)
- **Space handling**: Spaces counted as characters
- **Error tracking**: Mistakes stored in Set for visual feedback
- **Progress tracking**: currentIndex updated for each keypress

---

## 🎨 Styling

### 🎨 Color Scheme
| Element | Color Code | Usage |
|---------|------------|-------|
| **Background** | `#000000` | Main app background |
| **Sidebar** | `#000000` | Navigation sidebar |
| **Glass Effect** | `#F0F6FC/10` | Calculator/stats bar with backdrop-blur |
| **Correct Text** | `#666666` | Successfully typed characters |
| **Incorrect Text** | `#B62324` | Error characters (red) |
| **Current Char** | `#FFFFFF` | Active character (white bg, black text) |
| **Upcoming Text** | `#FFFFFF` | Not yet typed characters |
| **Buttons** | `white/50` → `white/80` | Hover effect on buttons |

### 🎭 Visual Effects
- **Glassmorphism**: Translucent background with backdrop blur
- **Gradient Fade**: Bottom fade effect for text container
- **Smooth Transitions**: 280ms transition duration
- **Shadow Effects**: Subtle shadows for depth
- **Hover States**: Interactive button feedback

### 📱 Responsive Design
```css
/* Custom scrollbar hidden */
.txt {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.txt::-webkit-scrollbar {
  display: none;
}
```

### 🔤 Typography
| Font | Usage | Style |
|------|-------|-------|
| **Bungee Spice** | App title, game over | Bold, decorative |
| **Electrolize** | Typing text display | Monospace-like, readable |
| **Roboto** | Buttons, UI elements | Clean, modern |

---

## 📧 Contact

<div align="center">

### Connect with the Developer

[![Twitter/X](https://img.shields.io/badge/Twitter-@SujitInweb-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://x.com/SujitInweb)
[![GitHub](https://img.shields.io/badge/GitHub-SujitInWeb-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/SujitInWeb/Type.io)

</div>

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push** to the branch
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### 💡 Ideas for Contribution
- Add more typing tests (60s, 120s, custom duration)
- Implement difficulty levels (easy, medium, hard)
- Add high score leaderboard with localStorage
- Create user profile system
- Add sound effects for correct/incorrect typing
- Implement different text sources (code, quotes, literature)
- Add keyboard heatmap visualization
- Create practice modes for specific keys
- Add multiplayer racing mode
- Implement typing accuracy graphs
- Add custom themes and color schemes
- Create mobile-optimized touch typing interface

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

### What does MIT License mean?
- ✅ **Commercial use allowed**
- ✅ **Modification allowed**
- ✅ **Distribution allowed**
- ✅ **Private use allowed**
- ⚠️ **Must include license and copyright**
- ❌ **No warranty provided**

---

<div align="center">
  <h3>⌨️ Ready to Test Your Typing Speed?</h3>
  <p>Start the app and see how fast you can type!</p>
  <p><strong>Happy Typing! 🚀</strong></p>
  
  <br>
  
  **Made with ❤️ by [Sujit](https://github.com/SujitInWeb)**
</div>

---

## 🙏 Acknowledgments

- **React** - For the amazing frontend framework
- **Vite** - For lightning-fast build tooling
- **Tailwind CSS** - For utility-first styling
- **Google Fonts** - For beautiful typography
- All contributors and users of Type.io

---

<div align="center">
  <sub>Built with React • Styled with Tailwind • Deployed with ❤️</sub>
</div>