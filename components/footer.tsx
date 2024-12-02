import Link from 'next/link'
import { Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
    return (
        <footer className="py-8">
            <div className="container max-w-[700px] mx-auto flex flex-col sm:flex-row justify-between items-center">
                <p className="text-sm dark:text-gray-400 text-gray-600 mb-4 sm:mb-0">
                    © 2023 Your Name. All rights reserved.
                </p>
                <div className="flex space-x-4">
                    <Link href="https://github.com" className="text-gray-400 hover:text-gray-300 transition-colors">
                        𝕏
                        <span className="sr-only">GitHub</span>
                    </Link>
                    <Link href="https://twitter.com" className="text-gray-400 hover:text-gray-300 transition-colors">
                        <Twitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                    </Link>
                    <Link href="https://linkedin.com" className="text-gray-400 hover:text-gray-300 transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </Link>
                </div>
            </div>
        </footer>
    )
}

