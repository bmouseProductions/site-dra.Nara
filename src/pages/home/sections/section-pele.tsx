import nara from '@/assets/images/sentiPele.webp'

export default function SectionSentirPele() {
    return (
        <section className='background-sentir-pele'>
            <div className="container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14 text-[#f0cca8] flex flex-col md:flex-row items-center lg:gap-10">
                <div className='flex flex-col gap-5'>
                    <h1 className='font-rewant text-7xl text-center lg:text-start'>
                        Saúde <br className='hidden lg:block'/> para sentir <br className='hidden lg:block'/> na pele.
                    </h1>

                    <p className='text-center lg:text-start'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi eos delectus modi optio dicta labore mollitia, doloribus fugiat dolore aperiam? Nostrum velit fuga sunt sit est ducimus aliquam dolorum aut?
                    </p>

                    <p className='text-center lg:text-start'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit sequi laboriosam libero harum dolor necessitatibus error! Incidunt, alias soluta at adipisci amet saepe maiores odio fugit labore vero perferendis distinctio.
                    </p>

                    <a 
                        href="http://" 
                        target="_blank"
                        className='w-fit mx-auto mt-5 px-5 py-2 text-lg font-semibold text-[#663210] bg-[#f0cca8] border-2 border-[#663210] rounded-2xl'
                    >
                        Saiba mais
                    </a>
                </div>

                <img 
                    src={nara}
                    alt="Foto da Doutora Nara em pé"
                    className="hidden lg:block w-1/2 rounded-2xl my-10"
                />
            </div>

            <img 
                src={nara}
                alt="Foto da Doutora Nara em pé"
                className="mx-auto pt-10 pb-20 lg:hidden md:rounded-2xl shadow-lg"
            />
        </section>
    )
}