import nara from "../../../assets/images/sentiPele.webp";

export default function SectionSentirPele() {
  return (
    <section className="background-sentir-pele" id="sobre">
      <div className="container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14 text-[#f0cca8] flex flex-col lg:flex-row items-center lg:gap-10">
        <div className="flex flex-col gap-5">
          <h1 className="font-rewant text-5xl text-center lg:text-start">
            Saúde <br className="hidden lg:block" /> para sentir{" "}
            <br className="hidden lg:block" /> na pele.
          </h1>

          <p className="text-start">
            A saúde da sua pele é o meu compromisso mais importante. Me dedico a
            oferecer cuidados personalizados e soluções eficazes para que você
            possa conquistar uma pele saudável e radiante, refletindo bem-estar
            e autoestima em cada momento do seu dia.
          </p>

          <a
            href="https://wa.me/5534998798280?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Nara%20por%20favor."
            target="_blank"
            className="w-fit mx-auto lg:mx-0 mt-5 px-5 py-2 text-lg font-semibold text-[#663210] bg-[#f0cca8] border-2 border-[#663210] rounded-2xl"
          >
            Agendar consulta
          </a>
        </div>

        <img
          src={nara}
          fetchPriority="high"
          width={10}
          height={10}
          alt="Foto da Doutora Nara em pé"
          className="w-full lg:w-1/2 my-10"
        />
      </div>
    </section>
  );
}
