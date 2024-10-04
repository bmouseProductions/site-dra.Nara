
//import ModalVideo from '../../../components/modal-video-home';

import logo from '~/logo-branca.svg';
import bannerDesktop from '@/assets/images/banner-desktop.svg';
import bannerMobile from '@/assets/images/banner-mobile.webp';

export default function SectionBanner() {

    const widthScreen = window.innerWidth;

    return (
        <section>
            {widthScreen >= 768 ? 
                // BANNER DESKTOP
                <div className='bg-[#f0cca8] lg:h-screen xl:h-auto'>
                    <div className='container mx-auto relative pt-10 h-full flex flex-col justify-between items-center'>
                        <img 
                            src={logo} 
                            alt="Logo Nara Cristina"
                            className='w-[80%] max-w-[1000px] mb-[10%]'
                        />

                        <img 
                            src={bannerDesktop} 
                            alt="Imagem com uma mulher negra passando creme na pele"
                            className='w-auto max-w-full h-4/5 absolute bottom-0 '
                        />

                        <div className='absolute bottom-14 w-full flex justify-center'>
                            <a
                                href='https://wa.me/5534999120030?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20marcar%20uma%20consulta%20por%20gentileza.'
                                target='_blank'
                                className='p-2 font-semibold lg:text-lg uppercase text-white bg-[#663210] rounded-full shadow animate-bounce'
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                :
                // BANNER MOBILE
                <div className='relative pt-10 min-h-[735px] h-screen flex flex-col justify-between bg-[#f0cca8] '>
                    <img 
                        src={logo} 
                        alt="Logo Nara Cristina"
                        className='w-[80%] mx-auto mb-[10%]'
                    />

                    <img 
                        src={bannerMobile} 
                        alt="Imagem com uma mulher negra passando creme na pele"
                        className='w-full '
                    />

                    <div className='absolute bottom-5 w-full flex justify-center'>
                        <a
                            href='https://wa.me/5534999120030?text=Ol%C3%A1%2C%20tudo%20bem%3F%20Gostaria%20de%20marcar%20uma%20consulta%20por%20gentileza.'
                            target='_blank'
                            className='p-2 font-semibold lg:text-lg uppercase text-white bg-[#663210] rounded-full shadow animate-bounce'
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                        </a>
                    </div>
                </div>
            }

            
        </section>
    );
}
