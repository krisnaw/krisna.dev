function SimpleLayout({title, intro, children}: {title: string, intro: string, children: React.ReactNode}) {
    return (
        <div className="flex flex-col items-center justify-center h-screen">

            <h1>
                {title}
            </h1>
            <p>
                {intro}
            </p>

            {children}
        </div>
    )
}

export default SimpleLayout;