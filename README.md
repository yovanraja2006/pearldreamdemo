# Pearl Dream - Static Business Website

A premium, elegant static business website built with React and Vite, showcasing courses and professional services.

## 🌟 Features

- **Modern Design**: Premium pearl and gold color palette with elegant typography
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **5 Complete Pages**:
  - Home - Hero section with business introduction and CTAs
  - About - Company story, values, mission, and vision
  - Courses - Filterable course catalog with detailed information
  - Our Work - Service showcase with client testimonials
  - Contact - Contact form and business information
- **SEO Optimized**: Comprehensive meta tags and semantic HTML
- **Smooth Animations**: Micro-interactions and hover effects throughout
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🎨 Design System

- **Color Palette**: Pearl white, cream, beige, and gold accents
- **Typography**: Playfair Display (headings) and Inter (body)
- **Components**: Reusable card components, buttons, and form elements
- **Animations**: Smooth transitions and floating shape effects

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd "c:\Storage\PD\Pearl Dream Site"
```

2. Install dependencies (already done):
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:5173
```

## 📦 Build for Production

To create a production-ready build:

```bash
npm run build
```

The optimized files will be in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## 🌐 Deployment

This website can be deployed to various platforms:

### Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

### Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel --prod
```

### Hostinger or Traditional Hosting

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist` folder to your hosting provider via FTP or their file manager

3. Ensure your server is configured to serve the `index.html` file for all routes (for React Router to work)

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Header.css
│   ├── Footer.jsx      # Site footer
│   └── Footer.css
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Home.css
│   ├── About.jsx       # About page
│   ├── About.css
│   ├── Courses.jsx     # Courses catalog
│   ├── Courses.css
│   ├── Work.jsx        # Services/work showcase
│   ├── Work.css
│   ├── Contact.jsx     # Contact page
│   └── Contact.css
├── assets/             # Static assets
├── App.jsx             # Main app component with routing
├── App.css
├── index.css           # Global styles and design system
└── main.jsx            # App entry point
```

## 🎯 Key Technologies

- **React 19** - UI library
- **React Router DOM** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties
- **Google Fonts** - Typography (Playfair Display, Inter)

## 📝 Customization

### Updating Content

All content is hardcoded in the respective page components. To update:

1. **Courses**: Edit the `courses` array in `src/pages/Courses.jsx`
2. **Services**: Edit the `services` array in `src/pages/Work.jsx`
3. **Contact Info**: Update details in `src/pages/Contact.jsx` and `src/components/Footer.jsx`

### Changing Colors

Update CSS variables in `src/index.css`:

```css
:root {
  --pearl-gold: #D4AF37;
  --pearl-white: #FDFBF7;
  /* ... other colors */
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation link in `src/components/Header.jsx`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is created for Pearl Dream business website.

## 🎉 Credits

Built with excellence and attention to detail for Pearl Dream.

---

**Pearl Dream** - Transforming aspirations into achievements through excellence in education
