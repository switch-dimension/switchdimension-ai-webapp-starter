# 🚀 Switch Dimension Web App Starter Kit

A modern starter kit for building web apps with Next.js, Shadcn UI, and Clerk authentication. From SwitchDimension.com Build With AI

- **Framework:** Next.js v15.3.3
- **UI Library:** Shadcn UI (Style: Zinc)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Authentication:** Clerk

## Features

- ✅ **Public Landing Page** - Accessible to everyone
- ✅ **Protected Dashboard** - Requires authentication
- ✅ **Clerk Authentication** - Sign in/up with email, social providers
- ✅ **Modern UI** - Clean, responsive design with Tailwind CSS
- ✅ **TypeScript** - Full type safety

## Getting Started

### 1. Installation

```bash
npm install
```

### 2. Clerk Setup

1. Create a Clerk account at [https://clerk.com](https://clerk.com)
2. Create a new application in your Clerk dashboard
3. Copy your API keys from the Clerk dashboard
4. Create a `.env.local` file in the root directory:

```bash
# Clerk Configuration
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_secret_key_here

# Optional: Customize redirect URLs
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

### 3. Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

### 4. Testing Authentication

- Visit the landing page (public, no auth required)
- Click "Sign In" or "Sign Up" to authenticate
- After signing in, you'll be redirected to the protected dashboard at `/dashboard`

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Public landing page
│   ├── dashboard/
│   │   └── page.tsx      # Protected dashboard
│   ├── layout.tsx        # Root layout with Clerk provider
│   └── globals.css       # Global styles
├── middleware.ts         # Clerk middleware for route protection
└── lib/                  # Utility functions
```

## Building for Production

```bash
npm run build
npm start
```

---

- Uses Tailwind CSS, TypeScript, and modern best practices.
- For more info, see the [Next.js documentation](https://nextjs.org/docs), [Shadcn UI](https://ui.shadcn.com/), and [Clerk documentation](https://clerk.com/docs).
