# 🎬 Movana

A modern, feature-rich movie database application inspired by TMDB, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

**[View Live Application](https://movana-eight.vercel.app/)**

## ✨ Features

### 🎭 Core Functionality
- **Movie Browsing**: Browse popular, trending, top-rated, and upcoming movies
- **Search**: Real-time movie search with instant results
- **Movie Details**: Comprehensive movie pages with cast, crew, and detailed information
- **Responsive Design**: Fully responsive across all device sizes

### 🔒 Spoiler Protection
- **Spoiler-Free Mode**: Toggle to hide/show spoiler content
- **Content Protection**: Automatic blurring of spoiler reviews, comments, and scenes
- **Reveal Mechanism**: Click-to-reveal spoiler content with clear warnings
- **Persistent Settings**: User preferences saved across sessions

### 🌙 Theme Support
- **Dark Mode**: Complete dark/light theme support
- **System Detection**: Automatically follows system theme preference
- **Theme Persistence**: Theme choice saved and restored
- **Smooth Transitions**: Seamless theme switching animations

### ♿ Accessibility
- **Screen Reader Support**: Full ARIA labels and semantic HTML
- **Keyboard Navigation**: Complete keyboard accessibility
- **Focus Management**: Proper focus indicators and management
- **Color Contrast**: WCAG compliant color schemes

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: Zustand
- **Theme Management**: next-themes
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/your-username/movana.git
   cd movana
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Environment Variables

To integrate with the real TMDB API, create a \`.env.local\` file:

\`\`\`env
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_BASE_URL=https://api.themoviedb.org/3
TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
\`\`\`

### TMDB API Integration

The application currently uses mock data. To integrate with the real TMDB API:

1. Get an API key from [TMDB](https://www.themoviedb.org/settings/api)
2. Replace the mock functions in \`lib/api.ts\` with actual API calls
3. Update image URLs to use TMDB's CDN

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js app directory
│   ├── movie/[id]/        # Dynamic movie detail pages
│   ├── search/            # Search results page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── header.tsx        # Navigation header
│   ├── movie-card.tsx    # Movie card component
│   ├── spoiler-content.tsx # Spoiler protection wrapper
│   └── theme-toggle.tsx  # Dark mode toggle
├── lib/                  # Utility functions
│   ├── api.ts           # API functions (currently mock)
│   └── spoiler-store.ts # Spoiler mode state management
└── public/              # Static assets
\`\`\`

## 🎨 Features in Detail

### Spoiler-Free Mode
- **Global Toggle**: Available in header on desktop and mobile
- **Content Types**: Protects reviews, comments, scenes, and images
- **Visual Indicators**: Clear spoiler badges and warnings
- **Accessibility**: Screen reader announcements for spoiler content

### Dark Mode
- **Three Options**: Light, Dark, and System preference
- **Persistent**: Choice saved in localStorage
- **Smooth Transitions**: Animated theme switching
- **Component Support**: All UI components support both themes

### Responsive Design
- **Mobile-First**: Optimized for mobile devices
- **Breakpoints**: Tailored layouts for all screen sizes
- **Touch-Friendly**: Large touch targets and gestures
- **Performance**: Optimized images and lazy loading

## 🚀 Deployment

The application is deployed on Vercel. To deploy your own instance:

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy to Vercel**
    - Connect your GitHub repository to Vercel
    - Configure environment variables
    - Deploy automatically on push

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for the API and inspiration
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Vercel](https://vercel.com/) for hosting and deployment
- [Next.js](https://nextjs.org/) team for the amazing framework

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the [TMDB API documentation](https://developer.themoviedb.org/docs/getting-started)
- Review the Next.js documentation

---

**Built with ❤️ using Next.js and deployed on Vercel**
