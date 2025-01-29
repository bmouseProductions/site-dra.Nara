import { useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ModalServices from "../components/modal-services";

interface ServiceInterface {
  nome: string;
  imagem?: string;
  resumo: string;
  descricao: string;
}

interface SlideServicesProps {
  services: ServiceInterface[];
  light?: boolean;
}

export default function SlideServices({ services, light }: SlideServicesProps) {
  const [selectedService, setSelectedService] =
    useState<ServiceInterface | null>(null);

  const openModal = useCallback((service: ServiceInterface) => {
    setSelectedService(service);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedService(null);
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        slidesPerGroupSkip={1}
        pagination={{ clickable: true }}
        loop
        breakpoints={{
          768: { slidesPerView: 2.1 },
          1024: { slidesPerView: 2.2 },
          1280: { slidesPerView: 3.2 },
        }}
        modules={[Autoplay, Pagination]}
        className="!pb-10 !pl-5 md:!pl-10 lg:!pl-14 xl:!pl-16 !mt-10 !container mx-auto"
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="p-5 flex flex-col gap-2 bg-white rounded-xl shadow-lg">
              {service.imagem && (
                <img
                  src={service.imagem}
                  alt={`Imagem de ${service.nome}`}
                  className="rounded w-full"
                />
              )}

              <h3 className="text-xl md:text-2xl font-semibold text-[#7c4f32]">
                {service.nome}
              </h3>

              <p>{service.resumo}</p>

              <button
                className="mx-auto mt-2 px-5 py-2 rounded-xl text-lg uppercase transition-all bg-[#663210] text-white border-2 border-[#663210] hover:bg-white hover:text-[#663210]"
                onClick={() => openModal(service)}
              >
                Saiba mais
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full flex justify-center">
        <a
          href="https://wa.me/5534998798280?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Nara%20por%20favor."
          target="_blank"
          rel="noopener noreferrer"
          className={`w-fit mx-auto mt-10 px-5 py-2 text-lg font-semibold border-2 rounded-2xl 
            ${
              light
                ? "text-[#663210] hover:text-[#f0cca8] bg-[#f0cca8] hover:bg-[#663210] border-[#f0cca8]"
                : "text-white hover:text-[#663210] bg-[#663210] hover:bg-[#f0cca8] border-[#663210]"
            }`}
        >
          Agendar consulta
        </a>
      </div>

      {selectedService && (
        <ModalServices
          isOpen={!!selectedService}
          onClose={closeModal}
          service={selectedService}
        />
      )}
    </>
  );
}
