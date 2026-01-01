# Momentum Mentor - Visual Assets & Layout Export

This package contains all visual assets, components, and styling for the Momentum Mentor landing page.

## Contents

### 📁 components/
All React components for the landing page:
- `Hero.tsx` - Main hero section with logo and headline
- `ProblemStatement.tsx` - Problem statement section
- `CPRFramework.tsx` - CPR framework explanation
- `Benefits.tsx` - Key benefits section
- `ProductSuite.tsx` - Product suite overview
- `HowItWorks.tsx` - How it works section
- `FinalCTA.tsx` - Call to action section
- `Footer.tsx` - Page footer
- `AuthButton.tsx` - Authentication button component

### 📁 app/
Next.js app files:
- `globals.css` - Global styles with Tailwind directives
- `layout.tsx` - Root layout component
- `page.tsx` - Main landing page

### 📁 hooks/
- `useAuth.ts` - Authentication hooks and utilities

### 📁 lib/
- `supabase.ts` - Supabase client configuration

### 📁 public/
Image assets:
- `MMLOGO.png` - Momentum Mentor logo
- `kfwt_nhbnrc2kmqpymn_y.png` - Background visual asset

### 📁 config/
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration

## Color Scheme

- **Navy**: `#0D1B3F` (primary brand color)
- **Gold**: `#F2B81C` (accent color)
- **Teal**: `#14B8A6` (secondary accent)

## Installation in New Project

### 1. Install Dependencies
```bash
npm install react react-dom next
npm install -D tailwindcss @tailwindcss/postcss autoprefixer typescript @types/react @types/react-dom
npm install framer-motion lucide-react @supabase/supabase-js
```

### 2. Copy Files
- Copy `components/*` to your `components/` directory
- Copy `app/*` to your `app/` directory
- Copy `hooks/*` to your `hooks/` directory
- Copy `lib/*` to your `lib/` directory
- Copy `public/*` to your `public/` directory
- Copy `config/tailwind.config.js` to project root
- Copy `config/postcss.config.js` to project root

### 3. Setup Environment Variables
Create `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Update Import Paths
Adjust import paths based on your project structure:
- Use `../` relative paths or
- Configure path aliases in `tsconfig.json`

## Framework Adaptations

### For Next.js 13+ App Router
Files work as-is

### For Vite/Create React App
- Convert `app/page.tsx` to standard React component
- Import `globals.css` in main entry file
- Remove Next.js specific imports

### For Non-React Frameworks
- Adapt components to Vue/Svelte/etc
- Maintain styling structure
- Use same Tailwind config

## Typography

System font stack with 150% line spacing for body text, 120% for headings

## Responsive Design

Mobile-first approach with Tailwind breakpoints

## Animations

All components use Framer Motion for smooth animations and interactions
