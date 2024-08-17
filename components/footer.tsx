import Link from "next/link";

function Footer() {
    return (
        <footer className="mt-32 flex-none pb-4">
            <div>
                <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
                    <div
                        className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                        <Link href="/about">About</Link>
                        <Link href="/projects">Projects</Link>
                        <Link href="/speaking">Speaking</Link>
                        <Link href="/uses">Uses</Link>
                    </div>
                    <p className="text-sm text-zinc-400 dark:text-zinc-500">
                        &copy; {new Date().getFullYear()} Krisna Wijaya. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;