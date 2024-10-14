import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import  ModalServices  from '../components/modal-services';

interface ServiceInterface {
    nome: string;
    imagem?: string;
    resumo: string;
    descricao: string;
}

interface SlideServicesProps {
    services: ServiceInterface[];
}

export default function SlideServices({ services }: SlideServicesProps) {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [selectedService, setSelectedService] = useState<ServiceInterface | null>(null);
  
    const openModal = (service: ServiceInterface) => {
        setSelectedService(service);
        setIsModalOpen(true);
    };
  
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
    }

    return(
        <>
            <Swiper
                spaceBetween={20}
                slidesPerView={1.2}
                slidesPerGroupSkip={1}
                pagination={{ clickable: true }} // Habilita a paginação clicável
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2.1 },
                    1024: { slidesPerView: 2.2 },
                    1280: { slidesPerView: 3.2 },
                }}
                modules={[Autoplay, Pagination]}
                className='!pb-10 !pl-5 !mt-10 !container mx-auto'
            >
                {services.map((service: ServiceInterface, index: number) => (
                    <SwiperSlide key={index}>
                        <div 
                            className=' p-5 space-y-2 bg-white rounded-xl shadow-lg'
                        >
                            {service.imagem ? 
                                <img 
                                    src= {service.imagem}
                                    alt={`Imagem de exemplo ${service.nome}`}
                                    className="rounded w-full  "
                                /> 
                                : 
                                <span className='hidden'></span>    
                            }

                            <h3 className='text-xl md:text-2xl font-semibold text-[#7c4f32] '>
                                {service.nome}
                            </h3>


                            <p>
                                {service.resumo}
                            </p>

                            <button 
                                className= 'px-5 py-2 rounded-xl text-lg  uppercase transition-all bg-[#7c4f32] text-white border-2 border-[#7c4f32] hover:bg-white hover:text-[#7c4f32] '
                                onClick={() => openModal(service)}
                            >
                                Saiba mais
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            
                <div className='w-full flex justify-center'>
                    <a 
                        href="https://wa.me/5534998798280?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Nara%20por%20favor." 
                        target="_blank"
                        className='w-fit mx-auto mt-10 px-5 py-2 text-lg font-semibold text-[#663210] bg-[#f0cca8] border-2 border-[#663210] rounded-2xl'
                    >
                        Agendar consulta
                    </a>
                </div>
            </Swiper>

            {selectedService && (
                <ModalServices 
                    isOpen={isModalOpen}
                    onClose={closeModal} 
                    service={selectedService}
                />
            )}
        </>
    )
}