import { useEffect } from "react";
import logo from "../../../assets/images/logo-branca.svg";
import bannerDesktop from "../../../assets/images/banner-desktop.svg";
import bannerMobile from "../../../assets/images/banner-mobile.webp";

export default function SectionBanner() {
  const widthScreen = window.innerWidth;

  // Pré-carregar as imagens ao montar o componente
  useEffect(() => {
    const preloadImage = (src: string) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
    };

    // Pré-carregar imagens de acordo com o dispositivo
    if (widthScreen >= 768) {
      preloadImage(bannerDesktop);
    } else {
      preloadImage(bannerMobile);
    }
  }, [widthScreen]);

  return (
    <section>
      {widthScreen >= 768 ? (
        // BANNER DESKTOP
        <div className="bg-[#f0cca8] height-banner">
          <div className="container mx-auto relative pt-10 h-full flex flex-col justify-between items-center">
            <img
              src={logo}
              alt="Logo Nara Cristina"
              className="w-[80%] max-w-[1000px] mb-[10%]"
            />

            <img
              src={bannerDesktop}
              width={1920} // Defina as dimensões reais da imagem
              height={1080}
              alt="Imagem com uma mulher negra passando creme na pele"
              className="w-auto max-w-full h-4/5 absolute bottom-0 "
            />
          </div>
        </div>
      ) : (
        // BANNER MOBILE
        <div className="relative pt-10 flex flex-col justify-end bg-[#f0cca8] ">
          <img
            src={bannerMobile}
            width={1080} // Defina as dimensões reais da imagem
            height={720}
            alt="Imagem com uma mulher negra passando creme na pele"
            className="w-full mx-auto"
            loading="eager"
          />
        </div>
      )}
    </section>
  );
}
