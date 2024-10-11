import { useState, useEffect } from 'react';

import logo from '~/logo-branca.svg';
import bannerDesktop from '@/assets/images/banner-desktop.svg';
import bannerMobile from '@/assets/images/banner-mobile.webp';

export default function SectionBanner() {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        setIsSticky(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);

        // Limpeza do event listener quando o componente for desmontado
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    

    const widthScreen = window.innerWidth;

    return (
        <section>
            {widthScreen >= 768 ? 
                // BANNER DESKTOP
                <div className='bg-[#f0cca8] height-banner'>
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

                        <div className={`absolute bottom-14 w-full justify-center ${isSticky ? 'hidden' : 'flex'} transition-all `} >
                            <a
                                href='#sobre'
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
                <div className='relative pt-10 flex flex-col justify-end bg-[#f0cca8] '>
                    <img 
                        src={bannerMobile} 
                        alt="Imagem com uma mulher negra passando creme na pele"
                        className='mt-24 w-full '
                    />

                    <div className={`absolute bottom-5 w-full justify-center ${isSticky ? 'hidden' : 'flex'} transition-all `} >
                        <a
                            href='#sobre'
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
