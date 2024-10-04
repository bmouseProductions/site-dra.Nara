
import SectionBanner from "./sections/section-banner";
import SectionSentirPele from "./sections/section-pele";
import SectionAcreditamos from "./sections/section-acreditamos";
import SectionVideo from "./sections/section-video";
import SectionProcedimentos from "./sections/section-procedimentos";
import Faixa from "../../components/faixa-nara";
import SectionProntos from "./sections/section-prontos";




export default function Home() {

    return (
        <>
            <SectionBanner />
            <SectionSentirPele />
            <SectionAcreditamos />
            <SectionVideo />
            <SectionProcedimentos />
            <Faixa />
            <SectionProntos />
        </>
    )
}