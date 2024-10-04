import logo from '~/logo-branca.svg'
import SlideServices from '../../../components/slider-sevices'
import { procedimetnos } from '../../../data/procedimentos-data'

export default function SectionProcedimentos() {
    return (
        <section className="bg-[#9d795f] pb-10">
            <div className="container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14">
                <div className="flex justify-between items-center">
                    <h2 className="font-rewant text-[42px] lg:text-5xl xl:text-6xl leading-10 text-center lg:text-start text-white">
                        Procedimentos <br className='hidden lg:block'/> oferecidos
                    </h2>

                    <img 
                        src={logo}
                        alt="" 
                        className="hidden lg:block max-w-40"
                    />
                </div>
            </div>

            <SlideServices services={procedimetnos}/>
        </section>
    )
}