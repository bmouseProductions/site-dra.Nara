import nara from '@/assets/images/naraProntos.webp'

import insta from '@/assets/images/icons/instagram.svg'
import facebook from '@/assets/images/icons/facebook.svg'
import linkedin from '@/assets/images/icons/linkedin.svg'
import youtube from '@/assets/images/icons/youtube.svg'

export default function SectionProntos(){
    return (
        <section className="bg-[#f0cca8] ">
            <div className='container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14 flex flex-col gap-10 lg:flex-row items-center'>
                <div className='flex flex-col gap-5 items-center lg:items-start'>
                    <h2 className="font-rewant text-[42px] lg:text-5xl xl:text-6xl leading-10 text-center lg:text-start text-[#663210] ">
                        Conheça minhas <br className='hidden lg:block'/> 
                        redes sociais
                    </h2>

                    <div>
                        <a 
                            href="https://www.instagram.com/dranaravieira/" 
                            target="_blank"
                            className='text-lg flex gap-3'
                        >
                            <img 
                                src={insta} 
                                alt="icone instagram" 
                                className='w-5'
                            />

                            @dranaravieira
                        </a>

                        <a 
                            href="https://www.facebook.com/dra.naravieira/?locale=pt_BR" 
                            target="_blank"
                            className='text-lg flex gap-3'
                        >
                            <img 
                                src={facebook} 
                                alt="icone instagram" 
                                className='w-5'
                            />

                            @dra.naravieira
                        </a>

                        <a 
                            href="https://www.youtube.com/@Dra.NaraVieira" 
                            target="_blank"
                            className='text-lg flex gap-3'
                        >
                            <img 
                                src={youtube} 
                                alt="icone instagram" 
                                className='w-5'
                            />

                            @Dra.NaraVieira
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/dranaravieira" 
                            target="_blank"
                            className='text-lg flex gap-3'
                        >
                            <img 
                                src={linkedin} 
                                alt="icone instagram" 
                                className='w-5'
                            />

                            @dranaravieira
                        </a>
                    </div>
                </div>

                <img 
                    src={nara}
                    alt="Foto da Doutora Nara em pé"
                    className="mx-auto lg:w-1/2 shadow-xl "
                />
            </div>
        </section>
    )
}