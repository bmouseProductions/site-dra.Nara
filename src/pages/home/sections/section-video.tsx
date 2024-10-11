

export default function SectionVideo() {
    return (
        <section className="background-video">
            <div className="container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14">
                <iframe
                    className="mx-auto w-full h-[200px] md:max-w-[600px] md:h-[350px] lg:max-w-[700px] lg:h-[415px] xl:max-w-[1000px] xl:h-[515px]"
                    src="https://www.youtube.com/embed/WqG9GpIW7I4?si=pRNIK2eNBWpZNPl7"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                />
            </div>
        </section>
    )
}