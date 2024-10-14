import { useState, useEffect } from 'react';

export default function ScrollDown(){
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
        <div className={`absolute bottom-5 w-full justify-center ${isSticky ? 'hidden' : 'flex'} transition-all `} >
            <a
                href='#sobre'
            >

                {
                    widthScreen >= 768 ? 
                        <div className='p-2 text-white bg-[#663210] rounded-full shadow animate-bounce'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                            </svg>
                        </div>
                    :
                    
                        <iframe src="https://lottie.host/embed/fff75c16-5738-4e03-9cd1-80bffca53f1f/A9FcPlw0nO.json"/>
                        
                }
                
            </a>
        </div>
    )
}