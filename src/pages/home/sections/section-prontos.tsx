import nara from '../../../assets/images/naraProntos.webp'

export default function SectionProntos(){
    return (
        <section className="bg-[#f0cca8] ">
            <div className='container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14 flex flex-col gap-10 lg:flex-row items-center'>
                <div className='flex flex-col gap-5 items-center lg:items-start'>
                    <h2 className="font-rewant text-[42px] lg:text-5xl xl:text-6xl leading-10 text-center lg:text-start text-[#663210] ">
                        estamos  prontos <br className='hidden lg:block'/> 
                        para cuidar da 
                        <br className='hidden lg:block'/> sua beleza
                    </h2>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi voluptates eaque maiores a officiis praesentium dolorem. Fugiat consectetur numquam voluptatum, non doloremque reiciendis quaerat quod, ipsum amet perferendis inventore.
                    </p>

                    <a 
                        href="http://" 
                        target="_blank"
                        className='w-fit px-5 py-2 text-lg font-semibold text-[#663210] bg-[#f0cca8] border-2 border-[#663210] rounded-2xl'
                    >
                        Saiba mais
                    </a>
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