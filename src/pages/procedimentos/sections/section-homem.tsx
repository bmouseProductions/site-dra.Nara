
import SlideServices from '../../../components/slider-sevices';

import { procedimentos } from '../../../data/procedimentos-data';

export default function SectionHomem(){
    
    return (
        <section className="bg-[#f0cca8] py-10 xl:py-14">
            <div className='container mx-auto  px-5 md:px-0 md:pl-10 lg:pl-14 xl:pl-16 space-y-5 '>
                <h2 className="font-rewant text-[42px] lg:text-5xl xl:text-6xl leading-10 text-start text-[#663210] ">
                    Dermatologia para homens
                </h2>
                <p className=' md:pr-10 lg:pr-14 xl:pr-16'>
                    Na nossa clínica oftalmológica, priorizamos a saúde dos seus olhos com um atendimento completo e especializado.
                    Oferecemos uma ampla gama de exames para diagnosticar condições oculares e monitorar sua saúde visual. Nossa 
                    equipe utiliza tecnologia avançada para garantir precisão e conforto durante cada procedimento.
                </p>

                
            </div>
            <SlideServices services={procedimentos.homem}/>
        </section>
    )
}