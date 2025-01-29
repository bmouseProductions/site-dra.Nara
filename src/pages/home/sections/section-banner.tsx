import logo from "../../../assets/images/logo-branca.svg";
import bannerDesktop from "../../../assets/images/banner-desktop.svg";

export default function SectionBanner() {
  return (
    <section>
      <div className="bg-[#f0cca8] height-banner">
        <div className="container mx-auto relative pt-10 h-full flex flex-col justify-between items-center">
          <img
            src={logo}
            width={10}
            height={10}
            alt="Logo Nara Cristina"
            className="w-[80%] max-w-[1000px] mb-[10%]"
          />

          <img
            src={bannerDesktop}
            width={10}
            height={10}
            alt="Imagem com uma mulher negra passando creme na pele"
            className="w-auto lg:max-w-full lg:h-4/5 lg:absolute lg:bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
