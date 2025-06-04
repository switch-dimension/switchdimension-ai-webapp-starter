import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/Sidebar";

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
            {/* Layout with Sidebar */}
            <div className="flex h-screen">
              {/* Sidebar */}
              <Sidebar />
              
              {/* Main Content Area */}
              <div className="flex-1 flex flex-col overflow-hidden">
                {/* Simplified Header - only visible on mobile when sidebar is closed */}
                <header className="lg:hidden bg-card shadow-sm border-b border-border">
                  <div className="flex justify-center items-center h-16 pr-4">
                    <h1 className="text-xl font-semibold text-foreground">Switch Dimension</h1>
                  </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-auto p-6">
                  <div className="max-w-6xl mx-auto">
                    {children}
                  </div>
                </main>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
