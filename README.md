# Hung Truong - Portfolio

A stunning 3D portfolio website built with React, Three.js, and Framer Motion.

## 🚀 Tech Stack

- **React 18** - UI Framework
- **Three.js / React Three Fiber** - 3D Graphics
- **Framer Motion** - Animations
- **TailwindCSS** - Styling
- **Vite** - Build Tool

## 📁 Project Structure

```
portfolio-3d/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Loader.jsx
│   │   └── ParticleField.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── constants/
│   │   └── index.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🛠️ Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## ✨ Features

- Interactive 3D particle background
- Smooth scroll animations
- Responsive design
- Dark theme with accent colors
- Timeline-based experience section
- Animated skill bars
- Featured project showcase

## 🎨 Customization

Edit `src/constants/index.js` to update:
- Personal information
- Experience history
- Projects
- Skills

## 📦 Deployment

```bash
npm run build
```

Deploy the `dist` folder to Vercel, Netlify, or any static hosting.

## 📄 License

MIT License - Feel free to use for your own portfolio!
