import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { UserButton } from '@clerk/nextjs';
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SwitchDimension App",
  description: "A Next.js app with Clerk authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen bg-background">
            {/* Dashboard Header */}
            <header className="bg-card shadow-sm border-b border-border">
              <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center h-16">
                  <div className="flex items-center space-x-4">
                    <h1 className="text-xl font-semibold text-foreground">Switch Dimension</h1>
                  </div>
                                  <div className="flex items-center space-x-4">
                  <ThemeToggle />
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8"
                      }
                    }}
                  />
                </div>
                </div>
              </div>
            </header>

            {/* Main Content Area */}
            <main className="p-6">
              <div className="max-w-6xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
