# 🚀 Switch Dimension Web App Starter Kit

A modern starter kit for building web apps with the latest Next.js, Shadcn UI, and Clerk authentication. From SwitchDimension.com Build With AI

> 📋 See [CHANGELOG.md](./CHANGELOG.md) for a detailed list of changes and version history.

## Tech Stack

- **Framework:** Next.js v16.0.4 with React 19
- **UI Library:** Shadcn UI (Style: Zinc)
- **Styling:** Tailwind CSS v4 with PostCSS
- **Language:** TypeScript 5.9
- **Authentication:** Clerk v6.35.5
- **Database:** Prisma ORM v7.0.0 with PostgreSQL 
- **State Management:** React 19 with built-in hooks

## Prerequisites

Before you begin, make sure you have the following installed on your local machine:

- **Node.js** (version 20.0 or higher recommended for React 19) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn** package manager
- **Git** - [Download here](https://git-scm.com/)
- **Docker** (optional, for local Supabase) - [Download here](https://www.docker.com/)
- A **Clerk account** (free) - [Sign up here](https://clerk.com)

To check if you have Node.js and npm installed, run:
```bash
node --version  # Should be 20.0 or higher
npm --version
```

## Features

- ✅ **Next.js 16 with React 19** - Latest features including React Compiler and improved performance
- ✅ **Protected by Default** - All routes require authentication unless explicitly made public
- ✅ **Clerk Authentication v6** - Modern authentication with email, social providers, and webhooks
- ✅ **Tailwind CSS v4** - Latest PostCSS-based architecture with improved performance
- ✅ **TypeScript 5.9** - Full type safety with latest TypeScript features
- ✅ **Prisma ORM v7** - Type-safe database access with PostgreSQL adapter
- ✅ **Modern UI** - Clean, responsive design with Shadcn UI components
- ✅ **Dark Mode** - Built-in theme switching with next-themes
- ✅ **Production Ready** - Configured with ESLint 9 and modern best practices

## Getting Started

### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/switch-dimension/switchdimension-webapp-starter.git
cd switchdimension-webapp-starter
```

### 2. Clerk Setup

1. Create a Clerk account at [https://clerk.com](https://clerk.com)
2. Create a new application in your Clerk dashboard
3. Copy your API keys from the Clerk dashboard
4. Create a `.env` file in the root directory with the following pasted in. (Database URL you will get in the next steps)

```bash
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Database Configuration
DATABASE_URL="postgresql://username:password@localhost:5432/your_database_name"
```

### 3. Installation

Install the project dependencies:

```bash
npm install
```
Run the development server to see app:

```bash
npm run dev
```
- You should see the app appear at this address in your browser http://localhost:3000
- It will prevent you from seeing the app until you login with Clerk. If you get a key error check your Clerk key is correct.

### 4. Database Setup

This starter includes Prisma ORM for database management. You can use it with any PostgreSQL database, including:

- **Supabase** (You can run this locally for Free or via the Cloud)
- **Neon** (Serverless Postgres)
- **Local PostgreSQL**
- **Railway**, **PlanetScale**, or other cloud providers

#### Option A: Using Supabase Local (Recommended)

1. Make sure you have Docker installed and running on your machine
2. Initialize Supabase in your project:
```bash
npx supabase init
```
3. Start Supabase locally:
```bash
npx supabase start
```
4. This will start a local Supabase instance with PostgreSQL
5. Copy the database URL from the output (usually `postgresql://postgres:postgres@localhost:54322/postgres`)
   - You can also run `npx supabase status` to view connection details anytime
6. Add this to your `.env` file as `DATABASE_URL`

#### Option B: Using Supabase Cloud

1. Create a free account at [https://supabase.com](https://supabase.com)
2. Create a new project
3. Go to Settings → Database and copy the connection string
4. Create an .env based on the env.example and add to your `.env` file as `DATABASE_URL`

#### Option C: Using Neon

1. Create a free account at [https://neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string from your dashboard
4. Create an .env based on the env.example and add to your `.env` file as `DATABASE_URL`

#### Option D: Local PostgreSQL

1. Install PostgreSQL locally (PGadmin is helpful)
2. Create a database
3. Create an .env based on the env.example and add to your `.env` file as `DATABASE_URL`

#### Generate Prisma Client and Run Migrations

After setting up your database, run:

```bash
# Generate the Prisma client (uses Prisma v7 with PostgreSQL adapter)
npx prisma generate

# Push the schema to your database (for development)
npx prisma db push

# Or run migrations (for production)
npx prisma migrate dev --name init
```

**Note:** This starter uses Prisma v7 with the PostgreSQL adapter (`@prisma/adapter-pg`) for improved performance and compatibility.

### 5. Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the main application.

### 6. Testing Authentication

- Visit any route (protected by default)
- You'll be redirected to Clerk's authentication flow. You will need to sign in for the first time. 
- After signing in, you'll be redirected back to the main application
- You will see a claim application in the bottom right of the page. This takes you to the clerk dashboard to create an account or to setup your application. Add a name and copy the environment details. 
- Create a file called env.local and place the variables there. There is an example in the file env.exmaple in the route / folder.

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main application page (protected)
│   ├── layout.tsx        # Root layout with Clerk provider and navigation
│   ├── globals.css       # Global styles with Tailwind CSS v4
│   ├── api/
│   │   └── posts/        # API routes for posts CRUD operations
│   └── settings/         # Settings page example
├── components/
│   ├── PostManager.tsx   # Example component with database integration
│   ├── Sidebar.tsx       # Navigation sidebar component
│   ├── theme-provider.tsx # Theme provider for dark mode
│   └── theme-toggle.tsx  # Theme toggle component
├── lib/
│   ├── prisma.ts         # Prisma client configuration (v7 with PostgreSQL adapter)
│   └── utils.ts          # Utility functions (cn helper, etc.)
├── generated/
│   └── prisma/           # Generated Prisma client (auto-generated, git-ignored)
prisma/
├── schema.prisma         # Database schema and configuration
└── migrations/           # Database migration files
```



## Building for Production

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## What's New in This Version

### Next.js 16 & React 19
- **React Compiler**: Improved performance with automatic optimizations
- **Enhanced Server Components**: Better streaming and suspense support
- **Improved Error Handling**: Better error boundaries and recovery

### Tailwind CSS v4
- **PostCSS-Based**: Faster builds and better performance
- **Native CSS**: Uses modern CSS features under the hood
- **Improved DX**: Better IntelliSense and autocomplete

### Prisma v7
- **PostgreSQL Adapter**: Better connection pooling and performance
- **Improved Type Safety**: Enhanced TypeScript support
- **Better Edge Support**: Works seamlessly with serverless environments

### Clerk v6
- **Improved Performance**: Faster authentication flows
- **Better TypeScript Support**: Enhanced type definitions
- **New Features**: Improved session management and webhooks

## Troubleshooting

### Common Issues

**The publishableKey passed to Clerk is invalid**
- Check that you have the correct keys in the `.env` file in the root of the folder
- Ensure you're using the correct environment (test vs production keys)

**No posts are being saved**
- Verify your `DATABASE_URL` is correct in `.env`
- Run `npx prisma generate` and `npx prisma db push`
- Check database connection with `npx prisma studio`

**Denied Access / Authentication Issues**
- You need to setup Clerk first (see step 2)
- Make sure your Clerk application is configured properly
- Check that environment variables are loaded (restart dev server after changes)

**Prisma Client errors**
- Run `npx prisma generate` to regenerate the client
- Make sure you're using Node.js 20+ for best compatibility
- Check that the generated Prisma client path matches your configuration

**Build errors with Next.js 16**
- Clear `.next` folder: `rm -rf .next`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Ensure you're using Node.js 20 or higher

## Additional Resources

- [Next.js 16 Documentation](https://nextjs.org/docs)
- [React 19 Documentation](https://react.dev)
- [Clerk Documentation](https://clerk.com/docs)
- [Prisma v7 Documentation](https://www.prisma.io/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)
- [Shadcn UI Components](https://ui.shadcn.com) 

