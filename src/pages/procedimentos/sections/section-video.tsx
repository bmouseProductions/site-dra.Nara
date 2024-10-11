

export default function SectionVideo() {
    return (
        <section className=" bg-[#f0cca8] ">
            <div className="container mx-auto py-10 xl:py-14 px-5 md:px-10 lg:px-14 xl:px-16">
                <h1 className="font-rewant text-7xl text-center text-[#663210] ">
                    Nossos serviços
                </h1>

                <iframe
                    className="mt-5 mx-auto w-full lg:w-[80%] 2xl:max-w-[950px] h-[200px] md:h-[350px] lg:h-[400px] xl:h-[550px] rounded-3xl"
                    src="https://www.youtube.com/embed/XB0J3mVluWA?si=JCwsAXOa7HcIC3Zx"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </div>
        </section>
    )
}