import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
         <header className="bg-white shadow-sm border-b">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="flex justify-between items-center h-16">
               <div className="flex items-center">
                 <h1 className="text-xl font-semibold text-gray-900">SwitchDimension</h1>
               </div>
               <div className="flex items-center space-x-4">
                 <SignedOut>
                   <SignInButton mode="modal">
                     <button className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">
                       Sign In
                     </button>
                   </SignInButton>
                   <SignUpButton mode="modal">
                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                       Sign Up
                     </button>
                   </SignUpButton>
                 </SignedOut>
                 <SignedIn>
                   <UserButton 
                     appearance={{
                       elements: {
                         avatarBox: "w-8 h-8"
                       }
                     }}
                   />
                 </SignedIn>
               </div>
             </div>
           </div>
         </header>
        <main>
          {children}
        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
