# Invest Saudi Portal - Landing Page Structure

## Recommended Project Structure

```
investsaudi-portal-web/
├── public/
│   ├── image.png              # Your logo
│   └── [other assets]         # Images, icons, etc.
│
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Main landing page (composes all sections)
│   │   └── globals.css        # Global styles
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx     # Top navigation with logo
│   │   │   └── Footer.tsx     # Footer with links/info
│   │   │
│   │   └── sections/
│   │       ├── Hero.tsx       # Hero section with main CTA
│   │       ├── Features.tsx    # Key features/benefits grid
│   │       ├── About.tsx      # About section
│   │       ├── Services.tsx   # Services offered
│   │       ├── Statistics.tsx # Key metrics/numbers
│   │       ├── Testimonials.tsx # Customer reviews
│   │       ├── CTASection.tsx # Call-to-action section
│   │       └── Contact.tsx    # Contact form/section
│   │
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn, etc.)
│   │
│   └── constants/
│       └── site.ts            # Site metadata, navigation links, etc.
```

## Component Responsibilities

### Layout Components
- **Header.tsx**: Navigation bar, logo, menu items
- **Footer.tsx**: Footer links, copyright, social media

### Section Components
- **Hero.tsx**: Main banner, headline, primary CTA button
- **Features.tsx**: Grid/list of key features or benefits
- **About.tsx**: Company/organization information
- **Services.tsx**: Services or products offered
- **Statistics.tsx**: Key metrics, numbers, achievements
- **Testimonials.tsx**: Customer reviews or testimonials
- **CTASection.tsx**: Secondary call-to-action section
- **Contact.tsx**: Contact form, email, phone, address

## Benefits of This Structure

1. **Modular**: Each section is a separate component, easy to maintain
2. **Reusable**: Components can be reused or modified independently
3. **Scalable**: Easy to add new sections or modify existing ones
4. **Organized**: Clear separation between layout and content sections
5. **Type-safe**: TypeScript support throughout
6. **Performance**: Next.js App Router optimizations

## Next Steps

1. Create component folders
2. Build Header and Footer components
3. Create section components one by one
4. Compose them in `page.tsx`
5. Add your content and styling

