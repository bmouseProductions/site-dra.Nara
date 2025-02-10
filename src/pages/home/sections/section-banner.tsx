import { useEffect, useState } from "react";
import logo from "../../../assets/images/logo-branca.svg";
import bannerDesktop from "../../../assets/images/banner-desktop.svg";
import bannerMobile from "/banner-mobile.webp";

export default function SectionBanner() {
  const [widthScreen, setWidthScreen] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidthScreen(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  useEffect(() => {
    const img = new Image();
    img.src = bannerMobile;
  }, []);
  return (
    <section>
      {widthScreen >= 768 ? (
        <div className="bg-[#f0cca8] height-banner">
          <div className="container mx-auto relative pt-10 h-full flex flex-col justify-between items-center">
            <img
              src={logo}
              alt="Logo Nara Cristina"
              className="w-[80%] max-w-[1000px] mb-[10%]"
              loading="lazy"
              decoding="async"
            />

            <img
              src={bannerDesktop}
              width={1920}
              height={1080}
              alt="Imagem com uma mulher negra passando creme na pele"
              className="w-auto max-w-full h-4/5 absolute bottom-0"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ) : (
        <div className="relative pt-10 flex flex-col justify-end bg-[#f0cca8]">
      <img
  src={bannerMobile}
  width={1}
  height={7} 
  alt="Mulher passando creme"
  className="w-full"
/>

    </div>
      )}
    </section>
  );
}
