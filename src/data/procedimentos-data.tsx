import biometriaImage from '../assets/images/procedimentos/catarata.webp'
import capimetriaImage from '../assets/images/procedimentos/cornea.webp'
import curvaImage from '../assets/images/procedimentos/glaucoma.webp'
import goniocopiaImage from '../assets/images/procedimentos/lentes-contato.webp'
import retinaImage from '../assets/images/procedimentos/retina.webp'
import microscopiaImage from '../assets/images/procedimentos/cornea.webp'
import paquimetriaImage from '../assets/images/procedimentos/glaucoma.webp'
import retinografiaImage from '../assets/images/procedimentos/cornea.webp'
import esterospsiaImage from '../assets/images/procedimentos/trauma-ocular.webp'
import tomografiaImage from '../assets/images/procedimentos/glaucoma.webp'
import tonometriaImage from '../assets/images/procedimentos/lentes-contato.webp'
import topografiaImage from '../assets/images/procedimentos/plastica-ocular.webp'

interface Procedimentos {
    nome: string;
    imagem: string;
    resumo: string;
    descricao: string;
}

type arrayProcedimentos = Array<Procedimentos>

export const procedimetnos:arrayProcedimentos = [
    {
        nome: "Biometria Ocular",
        imagem: biometriaImage,
        resumo: `É o exame de visão capaz de medir o comprimento axial do globo ocular e de suas estruturas (câmara anterior, 
            cristalino, cavidade vítrea).`,
        descricao: `É o exame de visão capaz de medir o comprimento axial do globo ocular e de suas estruturas (câmara anterior, 
            cristalino, cavidade vítrea). É o principal exame oftalmológico para calcular o grau da lente intra-ocular implantada na 
            cirurgia de catarata. Pode ser realizada biometria ultrassônica ou óptica (hoje mais utilizada).
            <br/> <br/>
            O OLHAR possui a Biometria Óptico Tomey OA-2000, aparelho de última geração e de alta precisão na realização das 
            medidas necessárias para o cálculo da lente intra-ocular, inclusive em cataratas mais densas. Se necessário, contamos 
            também com o biometro ultrassônico Occuscan- Alcon. Não é necessário a dilatação das pupilas.
        `,
    },
    {
        nome: "Capimetria Computadorizada",
        imagem: capimetriaImage,
        resumo: `É um exame que avalia o campo visual, ou seja, a medida da visão periférica, através de um aparelho altamente 
            tecnológico chamado campímetro.`,
        descricao: `É um exame que avalia o campo visual, ou seja, a medida da visão periférica, através de um aparelho altamente 
            tecnológico chamado campímetro .Durante o exame expomos aos pacientes pontos luminosos de tamanho e intensidade variados 
            que se movem de uma região a outra do aparelho até que seja visto e assinalado pelo paciente.
            <br/> <br/>
            Possuímos no OLHAR Centro Oftalmológico o Campímetro Computadorizado Humphrey, da Zeiss. O Humphrey é um equipamento 
            "standard", ou padrão, utilizado em inúmeros artigos científicos, atestando a confiabilidade do mesmo e garantindo um 
            exame correto do campo visual. Não há necessidade de dilatação das pupilas.
        `,
    },
    {
        nome: "Curva Tensional Diária",
        imagem: curvaImage,
        resumo: `A curva tensional diária é o exame de visão onde o paciente disponibiliza um dia para realizar medidas 
            repetidas da pressão intra-ocular nas diferentes horas do dia.`,
        descricao: `A curva tensional diária é o exame de visão onde o paciente disponibiliza um dia para realizar medidas 
            repetidas da pressão intra-ocular nas diferentes horas do dia.
            <br/> <br/>
            O exame curva tensional diária é indicado para diagnóstico e acompanhamento do glaucoma.
        `,
    },
    {
        nome: "Gonioscopia",
        imagem: goniocopiaImage,
        resumo: `A Gonioscopia é um exame de visão que utiliza uma lente especial para o estudo do ângulo da câmara anterior do 
            olho, onde é realizada a drenagem do humor aquoso (líquido que preenche a câmara anterior).`,
        descricao: `A Gonioscopia é um exame de visão que utiliza uma lente especial para o estudo do ângulo da câmara anterior do 
            olho, onde é realizada a drenagem do humor aquoso (líquido que preenche a câmara anterior).
            <br/> <br/>
            A indicação do exame Gonioscopia é fundamental para o diagnóstico e tratamento do glaucoma.
        `,
    },
    {
        nome: "Mapeamento de Retina",
        imagem: retinaImage,
        resumo: `É um exame oftalmológico realizado com oftalmoscópio indireto, que permite a análise de todas as 
            estruturas encontradas no fundo do olho como a retina, o nervo óptico e o vítreo.`,
        descricao: `É um exame oftalmológico realizado com oftalmoscópio indireto, que permite a análise de todas as 
            estruturas encontradas no fundo do olho como a retina, o nervo óptico e o vítreo.
            <br/> <br/>
            O exame é realizado com a dilatação das pupilas.
        `
    },
    {
        nome: "Microscopia Especular da Córnea",
        imagem: microscopiaImage,
        resumo: `É um exame de visão que permite realizar a contagem do número de células endoteliais da córnea e analisar 
            o aspecto das mesmas, identificando qualquer degeneração ou atrofia do tecido.`,
        descricao: `É um exame de visão que permite realizar a contagem do número de células endoteliais da córnea e analisar 
            o aspecto das mesmas, identificando qualquer degeneração ou atrofia do tecido. Indicado para pacientes que 
            realizarão cirurgia oculares (como de catarata), adaptação de lentes de contato, entre outros.
            <br/> <br/>
            No OLHAR Centro Oftalmológico utilizamos o Microscópio Especular Tomey EM-4000,equipamento moderno que 
            permite um exame rápido e extremamente preciso. Não há necessidade de dilatação das pupilas.
        `,
    },
    {
        nome: "Paquimetria",
        imagem: paquimetriaImage,
        resumo: `É o exame de visão que mede a espessura da córnea. É muito importante na avaliação para a cirurgia 
            refrativa e diagnóstico de ceratocone.`,
        descricao: `É o exame de visão que mede a espessura da córnea. É muito importante na avaliação para a cirurgia 
            refrativa e diagnóstico de ceratocone.
            <br/> <br/>
            No OLHAR podemos realizar o exame de paquimetria óptica através do Biômetro Óptico Tomey OA-2000, ou 
            paquimetria ultrassônica realizada pelo Occuscan - Alcon. Não é necessário dilatar as pupilas realização do exame.
        `,
    },
    {
        nome: "Retinografia",
        imagem: retinografiaImage,
        resumo: `É um exame de imagem que fotografa as áreas do fundo do olho, como a retina, a coróide, o nervo óptico 
            e os vasos sanguíneos.`,
        descricao: `É um exame de imagem que fotografa as áreas do fundo do olho, como a retina, a coróide, o nervo óptico 
            e os vasos sanguíneos. Necessário para diagnóstico e acompanhamento de doenças da retina e glaucoma.
            <br/> <br/>
            No OLHAR Centro oftalmológico realizamos a retinografia não-midriática, ou seja, não há necessidade de dilatação 
            das pupilas ( na maioria das vezes). O exame é realizado pelo aparelho de OCT Topcon Maestro, equipamento de última 
            geração que garante imagens retinianas de excelente qualidade.
        `,
    },
    {
        nome: "Teste de Estereospsia",
        imagem: esterospsiaImage,
        resumo: `É um exame oftalmológico utilizado para avaliar a visão estereoscópica, ou percepção de profundidade 
            (a "visão 3D") que é dada pela visão dos dois olhos em conjunto.`,
        descricao:`É um exame oftalmológico utilizado para avaliar a visão estereoscópica, ou percepção de profundidade 
            (a "visão 3D") que é dada pela visão dos dois olhos em conjunto.
        `,
    },
    {
        nome: "Tomografia de Coerência Óptica",
        imagem: tomografiaImage,
        resumo: `É um exame baseado na interferometria óptica, capaz de mostrar em alta resolução as camadas da retina, 
            nervo e coróide, além do segmento anterior.`,
        descricao: `É um exame baseado na interferometria óptica, capaz de mostrar em alta resolução as camadas da retina, 
            nervo e coróide, além do segmento anterior.Não invasivo e sem necessidade de contato, trata-se do maior avanço na propedêutica oftalmológica da última década. 
            É de grande auxílio no diagnóstico e acompanhamento de doenças retinianas e do nervo óptico.
            <br/> <br/>
            No OLHAR o exame é realizado pelo OCT Topcon Maestro. Equipamento de última geração que garante um exame extremamente 
            rápido e sem a necessidade de dilatação das pupilas.
        `,
    },
    {
        nome: "Tonometria",
        imagem: tonometriaImage,
        resumo: `Tonometria é o exame de visão que mede a pressão intra-ocular, utilizando aparelhos com métodos de sopro ou 
            de contato.`,
        descricao: `Tonometria é o exame de visão que mede a pressão intra-ocular, utilizando aparelhos com métodos de sopro ou 
            de contato.
        `,
    },
    {
        nome: "Topografia Computadorizada da Córnea",
        imagem: topografiaImage,
        resumo: `Analisa a curvatura da córnea em toda a sua extensão desde o seu centro até a sua periferia e avalia as
            alterações de sua superfície como a regularidade e a simetria, permitindo identificar astigmatismos e outras 
            irregularidades na córnea, como o ceratocone.
        `,
        descricao: `Analisa a curvatura da córnea em toda a sua extensão desde o seu centro até a sua periferia e avalia as
            alterações de sua superfície como a regularidade e a simetria, permitindo identificar astigmatismos e outras 
            irregularidades na córnea, como o ceratocone.
            <br/> <br/>
            No OLHAR possuimos o equipamento Topcon CA 200, aparelho de alta precisão na análise da superfície anterior 
            da córnea. Não há necessidade de dilatação das pupilas.
        `,
    },
]