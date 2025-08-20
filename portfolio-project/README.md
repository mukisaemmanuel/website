# Mukisa Emmanuel - Portfolio Website

A modern, professional portfolio website showcasing software engineering skills, projects, and experience.

## Features

### 🎨 Design & UX

- Modern, responsive design with glassmorphism effects
- Dark/Light theme toggle with smooth transitions
- Smooth scrolling navigation with active section highlighting
- Professional color scheme and typography
- Mobile-first responsive design

### 📱 Sections

- **Hero Section**: Dynamic introduction with animated typing effect
- **About Section**: Personal story, statistics, education, and values
- **Skills Section**: Interactive skill cards with progress bars and filtering
- **Projects Section**: Showcase of featured projects with technology stacks
- **Experience Section**: Professional timeline with career highlights
- **Contact Section**: Contact form, social links, and availability status

### 🛠 Technical Features

- Built with React 18 and TypeScript for type safety
- Tailwind CSS for modern, utility-first styling
- Font Awesome icons for professional iconography
- Context API for global theme management
- Custom hooks for enhanced functionality
- Fully accessible and SEO optimized

## Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, CSS3 animations
- **Icons**: Font Awesome
- **State Management**: React Context API
- **Build Tool**: Create React App
- **Fonts**: Inter, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:

   ```bash
   cd portfolio-project
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
│   ├── About.tsx           # About section component
│   ├── Contact.tsx         # Contact section with form
│   ├── Experience.tsx      # Work experience timeline
│   ├── Hero.tsx           # Landing/hero section
│   ├── Navigation.tsx     # Main navigation component
│   ├── Projects.tsx       # Projects showcase
│   └── Skills.tsx         # Skills and technologies
├── contexts/
│   └── ThemeContext.tsx   # Theme context provider
├── data/
│   └── portfolio.data.ts  # Portfolio content data
├── types/
│   └── portfolio.types.ts # TypeScript type definitions
├── App.tsx                # Main application component
├── index.tsx             # Application entry point
└── index.css             # Global styles and animations
```

## Customization

### Updating Personal Information

Edit the data in `src/data/portfolio.data.ts` to customize:

- Personal information and bio
- Skills and proficiency levels
- Project details and links
- Work experience and education
- Contact information and social links

### Styling and Theme

- Colors and design tokens are defined in `tailwind.config.js`
- Custom animations are in `src/index.css`
- Theme switching logic is in `src/contexts/ThemeContext.tsx`

### Adding New Sections

1. Create a new component in `src/components/`
2. Add the component to `src/App.tsx`
3. Update navigation links in `src/components/Navigation.tsx`
4. Add corresponding data types in `src/types/portfolio.types.ts`

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `build/` directory with optimized production files.

### Deployment Options

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Import your project for instant deployment
- **GitHub Pages**: Use `gh-pages` package for GitHub hosting
- **Traditional Hosting**: Upload the `build/` folder contents

## Performance

- Lighthouse Performance Score: 95+
- Fully responsive design
- Optimized images and assets
- Minimal bundle size
- Fast loading times

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Mukisa Emmanuel**

- Email: mukisa.emmanuel@example.com
- LinkedIn: [linkedin.com/in/mukisa-emmanuel](https://linkedin.com/in/mukisa-emmanuel)
- GitHub: [github.com/mukisa](https://github.com/mukisa)
- Portfolio: [mukisa-emmanuel.dev](https://mukisa-emmanuel.dev)
