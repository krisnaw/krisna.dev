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

                <div className={'bg-white rounded-md flex-1/2'}>

                    <div className={'px-6 py-10'}>
                        <div className="flex items-center">
                            {/*<Image className="inline-block h-34 w-34 rounded-xl"*/}
                            {/*       width={500}*/}
                            {/*       height={500}*/}
                            {/*       src="/profile.png"*/}
                            {/*       alt=""/>*/}
                        </div>

                        <div className={'text-center'}>
                            <div className={'mt-8'}>
                                <h4 className="text-4xl font-bold tracking-tight text-gray-900">
                                    Krisna Wijaya
                                </h4>

                                <p className="mt-6 text-base text-gray-900">
                                    Full-stack web developer based in Bali, Indonesia.
                                </p>
                            </div>
                            <div>
                                <div className="mt-6 flex items-center gap-6">
                                    <SocialLink href="#" aria-label="Follow on X" icon={XIcon}/>
                                    <SocialLink
                                        href="#"
                                        aria-label="Follow on Instagram"
                                        icon={InstagramIcon}
                                    />
                                    <SocialLink
                                        href="#"
                                        aria-label="Follow on GitHub"
                                        icon={GitHubIcon}
                                    />
                                    <SocialLink
                                        href="#"
                                        aria-label="Follow on LinkedIn"
                                        icon={LinkedInIcon}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className={'border border-white flex-1/2'}>

                    <div>
                        <h2 className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Passionate creating great experiences for Digital Product
                        </h2>

                        <div className={'space-x-4'}>
                            <button
                                className={'rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'}>
                                Contact Me
                            </button>
                            <button
                                className={'rounded-full bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'}>
                                See my work
                            </button>
                        </div>
                    </div>

                    <div>
                        My Skills
                    </div>

                    <div>
                        My Works
                    </div>

                </div>
            </div>

        </>
    );
}
