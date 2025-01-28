import { useState } from "react";

export default function SectionVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <section className="background-video">
      <div className="container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14">
        {isPlaying ? (
          <iframe
            className="mx-auto w-full h-[200px] md:max-w-[600px] md:h-[350px] lg:max-w-[700px] lg:h-[415px] xl:max-w-[1000px] xl:h-[515px]"
            src="https://www.youtube.com/embed/WqG9GpIW7I4?autoplay=1&si=pRNIK2eNBWpZNPl7"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        ) : (
          <div
            className="relative mx-auto w-full h-[200px] md:max-w-[600px] md:h-[350px] lg:max-w-[700px] lg:h-[415px] xl:max-w-[1000px] xl:h-[515px] bg-black cursor-pointer"
            onClick={handlePlay}
          >
            <img
              src="https://img.youtube.com/vi/WqG9GpIW7I4/maxresdefault.jpg"
              alt="YouTube Thumbnail"
              className="w-full h-full object-cover"
            />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
              aria-label="Play video"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
