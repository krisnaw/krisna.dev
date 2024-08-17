"use client";

import Link from "next/link";
import clsx from "clsx";
import {usePathname} from "next/navigation";
import ThemeToggle from "@/components/header/theme-toggle";
import TopAvatar from "@/components/header/top-avatar";

function NavigationLink({href, children} : { href: string, children: React.ReactNode }) {

    let isActive = usePathname() === href;

    return (
        <li className={clsx(
            'relative block px-3 py-2',
            isActive
            ? 'text-teal-500 dark:text-teal-400'
            : 'hover:text-teal-500 dark:hover:text-teal-400',
        )}>
            <Link href={href}>
                {children}
            </Link>
        </li>

    )
}

function Header() {
    return (
        <header>
            <div className={'pt-6'}>
                <nav
                    className={'flex items-center justify-between py-2'}>
                    <div>
                        <TopAvatar/>
                    </div>
                    <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                        <NavigationLink href={'/'}>About</NavigationLink>
                        <NavigationLink href={'/articles'}>Articles</NavigationLink>
                        <NavigationLink href={'/projects'}>Projects</NavigationLink>
                        <NavigationLink href={'/tools'}>Tools</NavigationLink>
                    </ul>
                    <div>
                        <ThemeToggle/>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;