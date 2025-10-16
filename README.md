# Portfolio Website - Fakhri Habibi

A stunning, modern portfolio website for an Information Systems student specializing in Software Engineering and Project Management. Built with cutting-edge web technologies featuring smooth scrolling, 3D graphics, and interactive particle effects.

## Features

### Design & Style
- **Dark Theme** with neon green brand colors (#00ff88)
- **Glassmorphism** effects throughout the UI
- **Gradient text effects** and neon glow animations
- **Space Grotesk** font for hero titles, **Inter** for body text
- Fully responsive design (mobile, tablet, desktop)

### Wow Factors
1. **Lenis Smooth Scrolling** - Butter-smooth scroll experience
2. **Three.js 3D Scene** - Interactive animated 3D background with distorted sphere and particle field
3. **tsParticles** - Interactive particles that respond to mouse hover with grab, bubble, and repulse effects
4. **GSAP + ScrollTrigger** - Scroll-linked animations for all sections

### Sections
1. **Hero** - Full-screen landing with animated gradient title and scroll indicator
2. **About** - Bio, skills categorized by expertise, and tech stack with icons
3. **Experience** - Timeline layout showing internships and organizational roles
4. **Projects** - Grid of project cards with glassmorphic design and hover effects
5. **Contact** - Social links with interactive cards
6. **Footer** - Quick links and additional information

## Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **Tailwind CSS v4** - Utility-first CSS framework

### Animation & Effects
- **Lenis** (v1.3.11) - Smooth scrolling foundation
- **GSAP** (v3.13.0) - Professional-grade animation library
- **ScrollTrigger** - Scroll-based animations
- **Three.js** (v0.180.0) - 3D graphics
- **@react-three/fiber** (v9.4.0) - React renderer for Three.js
- **@react-three/drei** (v10.7.6) - Three.js helpers
- **@tsparticles/react** (v3.0.0) - Interactive particle system
- **@tsparticles/slim** (v3.9.1) - Lightweight particles bundle

### Fonts
- **Inter** - Body text
- **Space Grotesk** - Display/hero text

## Project Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with fonts and metadata
│   ├── page.js            # Main landing page
│   └── globals.css        # Global styles, theme, animations
├── components/
│   ├── providers/
│   │   └── SmoothScrollProvider.jsx  # Lenis integration
│   ├── particles/
│   │   └── ParticleBackground.jsx    # tsParticles configuration
│   ├── three/
│   │   └── Scene3D.jsx              # Three.js 3D scene
│   └── sections/
│       ├── Hero.jsx                 # Landing section
│       ├── About.jsx                # About me & skills
│       ├── Experience.jsx           # Timeline of experience
│       ├── Projects.jsx             # Project showcase
│       ├── Contact.jsx              # Contact & social links
│       └── Footer.jsx               # Footer section
├── utils/
│   └── animations.js      # GSAP animation utilities
└── data/
    └── portfolio.js       # Dummy data (personal info, projects, etc.)
```

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Update Personal Information

Edit `src/data/portfolio.js` to customize:
- Personal info (name, title, bio, email)
- Skills and expertise areas
- Tech stack with icons
- Work experience
- Projects with images and descriptions
- Social media links

### Update Brand Colors

Edit `src/app/globals.css` CSS variables:
```css
--brand-primary: #00ff88;    /* Primary green */
--brand-secondary: #00cc6a;  /* Secondary green */
--brand-tertiary: #66ffaa;   /* Tertiary green */
```

### Adjust Animations

Modify animation utilities in `src/utils/animations.js` or component-specific animations in their respective files.

### Three.js Scene

Customize the 3D scene in `src/components/three/Scene3D.jsx`:
- Change sphere distortion
- Adjust particle count and distribution
- Modify colors and lighting

### Particle Effects

Configure tsParticles in `src/components/particles/ParticleBackground.jsx`:
- Particle count, size, and opacity
- Interaction modes (grab, bubble, repulse)
- Connection lines and colors

## Performance Optimizations

- **Lazy Loading**: Three.js scene is lazy-loaded for faster initial page load
- **Responsive Particles**: Reduced particle count on mobile devices
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic code splitting by Next.js
- **Reduced Motion**: Respects user's reduced motion preferences

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Enhancements

- [ ] Integrate with CMS (Supabase) for dynamic content
- [ ] Add blog section
- [ ] Implement dark/light mode toggle
- [ ] Add more 3D models/scenes
- [ ] Contact form with backend integration
- [ ] Analytics integration
- [ ] SEO improvements

## License

This project is for portfolio purposes.

## Author

**Fakhri Habibi**
- Information Systems Student
- Software Engineering & Project Management Expert

---

Built with ❤️ using Next.js, Three.js, GSAP, and Lenis
