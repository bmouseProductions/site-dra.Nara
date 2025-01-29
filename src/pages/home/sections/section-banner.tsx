import logo from "../../../assets/images/logo-branca.svg";
import bannerDesktop from "../../../assets/images/banner-desktop.svg";

export default function SectionBanner() {
  return (
    <section>
      <div className="bg-[#f0cca8] height-banner">
        <div className="container mx-auto relative pt-10 h-full flex flex-col justify-between items-center">
          <img
            src={logo}
            alt="Logo Nara Cristina"
            className="w-[80%] max-w-[1000px] mb-[10%]"
          />

          <img
            src={bannerDesktop}
            alt="Imagem com uma mulher negra passando creme na pele"
            className="w-auto max-w-full h-4/5 absolute bottom-0"
          />
        </div>
      </div>
    </section>
  );
}
