import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header/header";
import {ThemeProvider} from "@/app/theme-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Krisna Wijaya | Full Stack Developer & Tech Enthusiast",
    description: "Explore the portfolio of Krisna, a seasoned Full Stack Developer with expertise in Laravel, Next.js, and modern web technologies. Discover projects, skills, and experience that showcase a passion for building robust and innovative digital solutions.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
            <body className={inter.className + 'flex h-full bg-white dark:bg-black'}>
                <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col h-screen justify-between ">
                        <Header/>
                        {children}
                        <Footer/>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
