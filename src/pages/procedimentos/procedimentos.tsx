import SectionVideo from "./sections/section-video";
import SectionClinica from "./sections/section-clinica";
import SectionCirurgica from "./sections/section-cirurgica";
import SectionEstetica from "./sections/section-estetica";
import SectionCapilar from "./sections/section-capilar";
import SectionLaser from "./sections/section-laser";
import SectionOutros from "./sections/section-outros";
import SectionHomem from "./sections/section-homem";


export default function Procedimentos() {
    return (
        <>
            <SectionVideo />
            <SectionClinica />
            <SectionCirurgica />
            <SectionEstetica />
            <SectionLaser />
            <SectionCapilar />
            <SectionHomem />
            <SectionOutros />
        </>
    )
}