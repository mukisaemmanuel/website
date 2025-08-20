# Calculator App

A modern, responsive calculator application built with React, TypeScript, and Tailwind CSS.

## Features

- Clean, modern UI with glassmorphism design
- Dark/Light theme toggle
- Responsive design for all devices
- Basic arithmetic operations
- Keyboard support
- Smooth animations and transitions

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- CSS3 with custom animations
- Context API for theme management

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

   ```bash
   cd calculator-project
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/
│   ├── Button.tsx          # Calculator button component
│   ├── Calculator.tsx      # Main calculator component
│   ├── Display.tsx         # Calculator display component
│   └── ThemeToggle.tsx     # Theme toggle component
├── contexts/
│   └── ThemeContext.tsx    # Theme context provider
├── hooks/
│   └── useCalculator.tsx   # Calculator logic hook
├── types/
│   └── calculator.types.ts # TypeScript type definitions
├── utils/
│   └── calculator.utils.ts # Calculator utility functions
├── App.tsx                 # Main application component
├── index.tsx              # Application entry point
└── index.css              # Global styles
```

## License

This project is open source and available under the [MIT License](LICENSE).
