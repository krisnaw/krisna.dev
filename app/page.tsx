import { ModeToggle } from "@/components/mode-toggle"

export default function Page() {
  return (
    <div className="min-h-screen w-full dark:bg-black bg-white">
      <main className="container max-w-[700px]  mx-auto p-8 font-mono">
        <header className="flex justify-between items-start mb-12">
          <div className="space-y-1">
            <h1 className="text-xl dark:text-white text-black">Krisna Wijaya</h1>
            <p className="text-sm dark:text-gray-400 text-gray-600">Bali, Indonesia</p>
          </div>
          <ModeToggle />
        </header>

        <div className="space-y-8">

          <section className="space-y-2">
            <h2 className="text-sm dark:text-gray-400 text-gray-600">
              <span className="opacity-60 ml-2">Software Engineering</span>
            </h2>
            <p className="dark:text-gray-400 text-gray-600 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
          </section>

          <section className="space-y-4">

            <h2 className="font-semibold mb-2">interests</h2>
            <ul className="space-y-1" data-id="19"><li className="flex items-center" data-id="20"><span className="mr-2 text-gray-500" data-id="21">-</span><span className="text-gray-700" data-id="22">User Interface Design</span></li><li className="flex items-center" data-id="20"><span className="mr-2 text-gray-500" data-id="21">-</span><span className="text-gray-700" data-id="22">User Experience</span></li><li className="flex items-center" data-id="20"><span className="mr-2 text-gray-500" data-id="21">-</span><span className="text-gray-700" data-id="22">Design Systems</span></li><li className="flex items-center" data-id="20"><span className="mr-2 text-gray-500" data-id="21">-</span><span className="text-gray-700" data-id="22">Front-end Development</span></li><li className="flex items-center" data-id="20"><span className="mr-2 text-gray-500" data-id="21">-</span><span className="text-gray-700" data-id="22">Open Source</span></li></ul>
          </section>

          <section className="space-y-4">

            <h3 className="font-semibold mb-2">Project</h3>
            <div className="grid gap-4">
              <a href="#" className="block group">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg dark:text-white text-black group-hover:underline">Project One</h4>
                    <span className="text-sm dark:text-gray-400 text-gray-600">→</span>
                  </div>
                  <p className="dark:text-gray-400 text-gray-600">
                    A brief description of the first project and its impact.
                  </p>
                </div>
              </a>
              <a href="#" className="block group">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg dark:text-white text-black group-hover:underline">Project Two</h4>
                    <span className="text-sm dark:text-gray-400 text-gray-600">→</span>
                  </div>
                  <p className="dark:text-gray-400 text-gray-600">
                    A brief description of the second project and its impact.
                  </p>
                </div>
              </a>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

