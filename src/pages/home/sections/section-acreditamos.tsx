import logoHorizontal from "../../../assets/images/logo-horizontal.svg";
import nara from "../../../assets/images/naraAcreditamos.webp";

export default function SectionAcreditamos() {
  return (
    <section className="bg-[#f0cca8] ">
      <div className="container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14 flex flex-col gap-10 lg:flex-row items-center">
        <div className="space-y-5">
          <h2 className="font-rewant text-[42px] lg:text-5xl xl:text-6xl leading-10 text-center lg:text-start text-[#663210] ">
            Sobre mim?
          </h2>

          <p>
            Nascida e criada em Patos de Minas, sempre tive um grande interesse
            em cuidar das pessoas, o que me levou a buscar minha formação na
            Faculdade de Medicina da UFMG. Foi lá que, no último ano de
            faculdade, me apaixonei pela dermatologia durante o internato no
            Hospital das Clínicas.
          </p>

          <p>
            Concluí a minha residência em Dermatologia também pelo Hospital das
            Clínicas da UFMG, me especializando em uma área que, além de tratar
            doenças da pele, promove saúde, bem-estar e autoestima. Depois da
            residência, permaneci dois anos como médica voluntária no
            ambulatório de dermatologia, onde me aprofundei em cirurgia
            dermatológica, uma área que continua sendo uma das minhas grandes
            paixões. Em 2002, retornei a Patos de Minas, onde atuo até hoje.
          </p>

          <p>
            Além da minha prática clínica, fui presidente da Associação Médica
            Regional de Patos de Minas em duas gestões (2018-2020 e 2021-2023),
            sempre buscando promover o avanço da medicina em nossa região.
          </p>

          <p>
            Hoje, sou especialista com título pela AMB e Sociedade Brasileira de
            Dermatologia (SBD), sócia efetiva da SBD e da Sociedade Brasileira
            de Cirurgia Dermatológica e membro do Grupo Brasileiro de Melanoma.
            Minha atuação envolve desde tratamentos clínicos para doenças de
            pele, que muitas vezes geram grande sofrimento físico e emocional,
            até procedimentos estéticos que ajudam meus pacientes a se sentirem
            melhor consigo mesmos.
          </p>

          <img src={logoHorizontal} alt="Logo Nara Vieira" className="" />
        </div>

        <img
          src={nara}
          width={10}
          height={10}
          alt="Foto da Doutora Nara em pé"
          className="lg:w-1/2 shadow-xl "
        />
      </div>
    </section>
  );
}
