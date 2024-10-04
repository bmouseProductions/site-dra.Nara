import logoHorizontal from '@/assets/images/logo-horizontal.svg'
import nara from '@/assets/images/naraAcreditamos.webp'

export default function SectionAcreditamos(){
    return (
        <section className="bg-[#f0cca8] ">
            <div className='container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14 flex flex-col gap-10 lg:flex-row items-center'>
                <div className='space-y-5'>
                    <h2 className="font-rewant text-[42px] lg:text-5xl xl:text-6xl leading-10 text-center lg:text-start text-[#663210] ">
                        O que <br className='hidden lg:block'/> acreditamos?
                    </h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At accusantium consectetur, inventore suscipit, aperiam corporis adipisci molestiae laudantium temporibus ipsam natus repudiandae. Quos omnis corporis cumque sit illo est reprehenderit?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias eos placeat fugiat et explicabo molestiae vero, amet quis similique sequi repellat. Labore aut voluptates molestiae sed adipisci vitae, modi ad?
                    </p>

                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia sequi voluptates eaque maiores a officiis praesentium dolorem. Fugiat consectetur numquam voluptatum, non doloremque reiciendis quaerat quod, ipsum amet perferendis inventore.
                    </p>

                    <img 
                        src={logoHorizontal}
                        alt="Logo Nara Vieira"
                        className=""
                    />
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