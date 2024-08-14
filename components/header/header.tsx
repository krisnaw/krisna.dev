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
                <nav className={'flex justify-between py-4'}>
                    <div>
                        <TopAvatar/>
                    </div>
                    <ul className={'flex rounded-full px-3 text-sm font-medium space-x-4 ring-1 ring-white bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm'}>
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