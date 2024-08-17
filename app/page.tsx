import Image from "next/image";
import Link from "next/link";
import {GitHubIcon, InstagramIcon, LinkedInIcon, XIcon} from "@/components/social-icon";

function SocialLink({
                        icon: Icon,
                        ...props
                    }: React.ComponentPropsWithoutRef<typeof Link> & {
    icon: React.ComponentType<{ className?: string }>
}) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}

export default function Home() {
    return (
        <>
            <div className="flex space-x-4">



            </div>

        </>
    );
}
