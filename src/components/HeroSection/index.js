import hero from './homepage-header-static.svg'

const HeroSection = () => {
    return (
        <section className="p-1 mt-3">
            <div className="bg-amber-300 rounded-xl border-2 border-slate-800 m-1 py-3">
                <p className="text-center text-xs">Tip: You can find bookmarked sessions in your Developer Profile</p>
            </div>
            <div className="md:flex">
                <div className="basis-4/12 bg-amber-300 h-36 md:h-80 rounded-xl border-2 border-slate-800 m-1 bg-no-repeat bg-center" style={{backgroundImage: `url(${hero})`}}></div>
                <div className="basis-8/12 bg-blue-600 p-5 h-40 md:h-80 rounded-xl border-2 border-slate-800 m-1 flex flex-col justify-between">
                    <h2 className="text-2xl md:text-4xl">And that's a wrap!<br/>Thanks for joining Google I/O 2022.</h2>
                    <a href="#" className="underline md:text-2xl">Watch the I/O 2022 recap</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection