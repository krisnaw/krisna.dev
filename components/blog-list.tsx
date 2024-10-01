import { Button, Input } from "@headlessui/react";

export default function BlogList() {
    return (
        <div className="bg-white px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
            <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Articles</h2>
                    <div className="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
                        <p className="text-xl text-gray-500">Learn how to grow your business with our expert advice.</p>
                        <form className="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
                            <div>
                                <label htmlFor="email-address" className="sr-only">Email address</label>
                                <Input id="email-address" name="email-address" type="email" autoComplete="email" required className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 text-base text-gray-900 placeholder-gray-500 focus:border-teal-500 focus:outline-none focus:ring-teal-500 lg:max-w-xs" placeholder="Enter your email" aria-label="Email address" />
                            </div>
                            <div className="mt-2 flex w-full flex-shrink-0 rounded-md shadow-sm sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto">

                                <Button type="button" className="flex w-full items-center justify-center rounded-md border border-transparent bg-teal-600 px-4 py-2 text-base font-medium text-white hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 sm:inline-flex sm:w-auto">Notify me</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
                    <div>
                        <p className="text-sm text-gray-500">
                            <time >Mar 16, 2020</time>
                        </p>
                        <a href="#" className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">Boost your conversion rate</p>
                            <p className="mt-3 text-base text-gray-500">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
                        </a>
                        <div className="mt-3">
                            <a href="#" className="text-base font-semibold text-teal-600 hover:text-teal-500">Read full story</a>
                        </div>
                    </div>
   
                </div>
            </div>
        </div>

    )
}