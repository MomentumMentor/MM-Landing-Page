# Momentum Mentor

A structured goal-setting framework with AI-powered validation. Expert mentorship for professional growth.

## Features

- **AI-Powered Document Creation**: Leverages OpenAI's GPT-4o-mini for intelligent document generation
- **Structured Workflow**: Guides users through Context, Purpose, and Results sections
- **Modern UI**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Database Integration**: Uses Supabase for data persistence
- **Responsive Design**: Mobile-friendly interface with shadcn/ui components

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI SDK (gpt-4o-mini)
- **Database**: Supabase
- **UI Components**: shadcn/ui
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ installed
- OpenAI API key
- Supabase account and project

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Then fill in your API keys:

```
OPENAI_API_KEY=your_openai_api_key_here
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

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

## Project Structure

```
/app
  /page.tsx                 # Landing page (Momentum Mentor design)
  /dashboard
    /page.tsx              # Dashboard with CPR list
  /cpr
    /new
      /page.tsx            # CPR creation wizard
  /api
    /test
      /route.ts            # API test endpoint

/lib
  /openai.ts               # OpenAI client configuration
  /supabase
    /client.ts             # Browser Supabase client
    /server.ts             # Server Supabase client

/components
  /ui                      # shadcn/ui components
```

## Deployment

### Vercel (Recommended)

1. Push your code to a Git repository
2. Import the project in [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy

## License

MIT

## Support

For issues and questions, please open an issue in the repository.
