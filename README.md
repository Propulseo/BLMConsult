# Professional Multilingual Website

A modern, responsive multilingual website built with React, TypeScript, and Tailwind CSS. Features comprehensive internationalization (i18n) support for English, French, and Spanish.

## 🌟 Features

### Internationalization (i18n)
- **Multi-language support**: English, French, Spanish
- **Automatic language detection**: Browser language detection with fallbacks
- **URL language parameters**: SEO-friendly language switching
- **Persistent language preference**: Stored in localStorage
- **RTL/LTR support**: Ready for right-to-left languages
- **Localized formatting**: Numbers, dates, and currency formatting

### SEO & Performance
- **SEO-optimized**: Meta tags, structured data, and language alternates
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Performance optimized**: Lazy loading and code splitting ready
- **Accessibility**: WCAG compliant components

### Technical Stack
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for build tooling
- **Custom i18n system** (no external dependencies)

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd multilingual-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Layout components (Header, Footer)
│   ├── LanguageSelector.tsx
│   └── SEOHead.tsx
├── config/              # Configuration files
│   └── languages.ts     # Language configuration
├── hooks/               # Custom React hooks
│   └── useTranslation.ts
├── locales/             # Translation files
│   ├── en.ts           # English translations
│   ├── fr.ts           # French translations
│   └── es.ts           # Spanish translations
├── pages/               # Page components
│   ├── MultiHome.tsx    # Multilingual home page
│   ├── MultiAbout.tsx   # Multilingual about page
│   └── ...
├── types/               # TypeScript type definitions
│   └── i18n.ts         # i18n type definitions
└── App.tsx             # Main application component
```

## 🌍 Internationalization Guide

### Adding New Languages

1. **Add language configuration** in `src/config/languages.ts`:
   ```typescript
   {
     code: 'de',
     name: 'German',
     nativeName: 'Deutsch',
     flag: '🇩🇪',
     dir: 'ltr',
     dateFormat: 'DD.MM.YYYY',
     numberFormat: {
       locale: 'de-DE',
       currency: 'EUR'
     }
   }
   ```

2. **Create translation file** `src/locales/de.ts`:
   ```typescript
   import { TranslationKeys } from '../types/i18n';
   
   export const de: TranslationKeys = {
     nav: {
       home: 'Startseite',
       // ... other translations
     }
   };
   ```

3. **Import in useTranslation hook** `src/hooks/useTranslation.ts`:
   ```typescript
   import { de } from '../locales/de';
   
   const translations: Record<Language, TranslationKeys> = {
     en, fr, es, de
   };
   ```

### Using Translations in Components

```typescript
import { useTranslation } from '../hooks/useTranslation';

const MyComponent = () => {
  const { t, currentLanguage, changeLanguage } = useTranslation();
  
  return (
    <div>
      <h1>{t.nav.home}</h1>
      <p>Current language: {currentLanguage}</p>
      <button onClick={() => changeLanguage('fr')}>
        Switch to French
      </button>
    </div>
  );
};
```

### Language Switching

The `LanguageSelector` component provides three variants:

- **Default**: Full dropdown with flags and native names
- **Compact**: Minimal dropdown for headers
- **Mobile**: Select dropdown for mobile devices

```typescript
<LanguageSelector variant="compact" showLabel={false} />
```

## 🎨 Styling & Theming

### Tailwind CSS Configuration

The project uses a custom Tailwind configuration with:
- Extended color palette
- Custom animations
- Responsive breakpoints
- Typography scale

### Component Styling

Components follow a consistent design system:
- **Colors**: Primary blue (#3B82F6), secondary grays
- **Typography**: Inter font family with proper hierarchy
- **Spacing**: 8px grid system
- **Shadows**: Layered shadow system for depth

## 📱 Responsive Design

The website is fully responsive with:
- **Mobile-first approach**: Designed for mobile, enhanced for desktop
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Flexible layouts**: CSS Grid and Flexbox
- **Touch-friendly**: Proper touch targets and interactions

## 🔍 SEO Features

### Meta Tags
- Dynamic title and description per page
- Language-specific meta tags
- Open Graph and Twitter Card support
- Structured data (JSON-LD)

### Language SEO
- `hreflang` attributes for language alternates
- Language-specific URLs with parameters
- Proper canonical URLs
- XML sitemap ready

### Performance
- Optimized images with proper alt tags
- Lazy loading ready
- Minimal JavaScript bundle
- Fast loading times

## 🧪 Testing

### Manual Testing Checklist
- [ ] Language switching works correctly
- [ ] Translations display properly
- [ ] URL parameters update
- [ ] localStorage persistence
- [ ] Browser language detection
- [ ] Responsive design on all devices
- [ ] SEO meta tags update
- [ ] Accessibility compliance

### Automated Testing (Future)
- Unit tests for translation hooks
- Integration tests for language switching
- E2E tests for user flows
- Performance testing

## 🚀 Deployment

### Build Process
```bash
npm run build
```

### Environment Variables
Create `.env` file for environment-specific settings:
```
VITE_DEFAULT_LANGUAGE=en
VITE_SITE_URL=https://yoursite.com
```

### Deployment Platforms
- **Netlify**: Automatic deployments with branch previews
- **Vercel**: Zero-config deployments
- **GitHub Pages**: Static site hosting
- **AWS S3**: Scalable static hosting

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- **TypeScript**: Strict mode enabled
- **ESLint**: Airbnb configuration
- **Prettier**: Code formatting
- **Conventional Commits**: Commit message format

### Translation Guidelines
- Use clear, concise language
- Maintain consistent terminology
- Consider cultural context
- Test with native speakers
- Keep translations up to date

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue on GitHub
- Check the documentation
- Review existing issues and discussions

## 🔄 Changelog

### Version 1.0.0
- Initial release with EN/FR/ES support
- Complete i18n system implementation
- Responsive design
- SEO optimization
- Professional UI components

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**