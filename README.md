# Cradleman Website

A modern, professional B2B website for **Cradleman** built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS.

## Features

- 🚀 **Next.js 14+** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for styling
- 🌙 **Dark Mode** support with next-themes
- ✨ **Framer Motion** for smooth animations
- 📝 **React Hook Form** with Zod validation
- 📱 **Fully Responsive** design
- 🔍 **SEO Optimized** with metadata
- ♿ **Accessible** (WCAG AA compliant)

## Pages

- **Home** - Hero, stats, featured products, services, clients, projects, testimonials, insights
- **About** - Company story, mission, values, team, timeline
- **Services** - Service listings and individual service pages
- **Products** - Products overview and product detail pages
- **Gallery** - Filterable gallery with lightbox
- **Clients** - Client segments, testimonials, project highlights
- **Career** - Open roles and application form
- **Downloads** - Request catalogs/brochures/technical docs
- **Projects** - Case studies / projects and installations
- **Insights** - Blog-style insights (optional)
- **Contact** - Contact form, business info, map
- **FAQ** - Frequently asked questions with categories
- **Legal** - Privacy Policy, Terms of Service, Cookie Policy

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pinodeai-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cradleman-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── career/            # Career page
│   ├── contact/           # Contact page
│   ├── clients/           # Clients page
│   ├── downloads/         # Downloads page
│   ├── faq/               # FAQ page
│   ├── gallery/           # Gallery page
│   ├── portfolio/          # Portfolio pages
│   ├── products/          # Product pages
│   ├── services/           # Services pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/             # React components
│   ├── forms/             # Form components
│   ├── layout/            # Layout components
│   └── ui/                # UI components
├── lib/                   # Utilities and helpers
│   ├── constants.ts       # App constants and data
│   └── utils.ts           # Utility functions
├── types/                 # TypeScript type definitions
└── public/                # Static assets
```

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email service (optional - for contact form)
RESEND_API_KEY=your_resend_api_key

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Customization

1. **Company Information**: Update `lib/constants.ts` with your company details
2. **Colors**: Modify `tailwind.config.ts` to change the color scheme
3. **Content**: Update the data arrays in `lib/constants.ts` with your content

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Features to Implement

- [ ] Email integration for contact form (Resend, SendGrid, etc.)
- [ ] Newsletter subscription
- [ ] Blog search functionality
- [ ] Portfolio filtering
- [ ] Analytics integration (Google Analytics)
- [ ] Cookie consent banner
- [ ] Chatbot widget
- [ ] Multilingual support (i18n)

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Schema validation
- [Lucide React](https://lucide.dev/) - Icons
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode

## License

This project is licensed under the MIT License.

## Support

For support, email `info@cradleman.com`.

