import bioestimuladores from '../assets/images/procedimentos/bioestimuladores.webp'
import mmpCapilar from '../assets/images/procedimentos/mmpCapilar.webp'
import peeling from '../assets/images/procedimentos/peeling.webp'
import toxina from '../assets/images/procedimentos/toxina.webp'
import ultraformer from '../assets/images/procedimentos/ultraformer.webp'

interface Procedimentos {
    nome: string;
    imagem?: string;
    resumo: string;
    descricao: string;
}

type arrayProcedimentos = Array<Procedimentos>

interface ProcedimentosOftalmologicos {
    destaque: arrayProcedimentos;
    clinica: arrayProcedimentos;
    cirurgica: arrayProcedimentos;
    estetica: arrayProcedimentos;
    laser: arrayProcedimentos;
    capilar: arrayProcedimentos;
    homem: arrayProcedimentos;
    outros: arrayProcedimentos;
}

export const procedimentos:ProcedimentosOftalmologicos = {
    "destaque": [
        {
            nome: "Bioestimuladores",
            imagem: bioestimuladores,
            resumo: `Bioestimuladores são compostos usados em tratamentos estéticos e dermatológicos para estimular a produção natural de colágeno na pele. Eles atuam melhorando a firmeza, elasticidade e qualidade da pele.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>A Acne é uma condição da pele que ocorre quando os folículos pilosos ficam obstruídos por sebo e células mortas, 
            sendo colonizados por bactérias e gerando uma inflamação local. As principais áreas atingidas pela doença são o rosto, 
            peito, ombros, costas e braços. A Acne tem como principais causadores a hereditariedade e os fatores hormonais, podendo 
            se apresentar de várias formas e em graus diferentes. A alimentação também é um fator importante na doença e pode 
            influenciar a gravidade da acne.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>Geralmente, a doença surge durante a adolescência, devido à ação hormonal, que passa por mudanças consideráveis 
            nesta faixa etária. Entretanto, a Acne pode se desenvolver também na fase adulta, principalmente nas mulheres com 
            predisposição genética e alterações hormonais.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>Para indicar o melhor tratamento, o diagnóstico correto do tipo de acne é fundamental. Entre as opções terapêuticas 
            disponíveis estão o uso de produtos tópicos para a diminuição da oleosidade da pele. O uso de antibióticos orais, 
            probióticos e a isotretinoína podem ser usados, quando há indicação.É muito importante que o tratamento seja feito 
            precocemente para evitar cicatrizes.</p>
            `,
        },

        {
            nome: "MMP Capilar",
            imagem: mmpCapilar,
            resumo: `É um tratamento capilar que consiste na injeção de medicamentos ativos diretamente no couro cabeludo, com o objetivo de estimular o crescimento de novos fios e engrossar os existentes.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>O Câncer de Pele ocorre quando há a transformação e o aumento descontrolado das células cutâneas, principalmente devido à exposição excessiva aos raios ultravioletas do sol. Entre os diferentes tipos de câncer de pele, temos os carcinomas e os melanomas, sendo este último mais raro, mas que tende a se espalhar rapidamente pelo corpo.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>O câncer de pele pode surgir em qualquer pessoa, porém, indivíduos com pele, cabelos e olhos claros, ou com histórico familiar da doença, são mais suscetíveis. Pacientes que ficaram expostos ao sol por muito tempo durante a vida também apresentam maior risco.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O tratamento geralmente envolve a retirada da lesão e do tecido ao redor por meio de cirurgia dermatológica. Em casos específicos, tratamentos complementares com radioterapia ou quimioterapia podem ser indicados. O diagnóstico precoce é fundamental para escolher a melhor abordagem terapêutica.</p>
            `,
        },

        {
            nome: "Pelling Facial",
            imagem: peeling,
            resumo: `Consiste na aplicação de substâncias químicas ou técnicas físicas para remover camadas superficiais da pele. Estimula a renovação celular, melhorando a textura, reduzindo manchas, cicatrizes de acne e linhas finas.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>A Dermatite Atópica é uma doença inflamatória crônica, cuja característica principal é a pele seca, formando lesões avermelhadas que coçam, descamam e podem causar ferimentos. As causas são genéticas, associadas a alterações no sistema imunológico e fatores ambientais.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>A doença é mais comum em crianças e adultos com histórico de problemas alérgicos, como bronquite e rinite.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O controle da doença é feito com medicamentos anti-inflamatórios e anti-histamínicos, podendo ser tópico ou via oral. Em casos graves, imunossupressores podem ser indicados. Evitar fatores irritantes é essencial, além de cuidados especiais com a higiene pessoal.</p>
            `,
        },
        
        {
            nome: "Toxina",
            imagem: toxina,
            resumo: "É injetada em pequenas quantidades em músculos específicos para paralisá-los temporariamente, o que pode ajudar a reduzir ou eliminar rugas e linhas de expressão. Também pode ser usada para reposicionar as sobrancelhas.",
            descricao: 
            `<h3 className="font-semibold">O que é:</h3>
            <p>A dermatite de contato é uma reação inflamatória na pele decorrente da exposição a um agente que causa irritação ou alergia. Existem dois tipos: dermatite de contato irritativa, causada por substâncias com pH diferente da pele, e dermatite de contato alérgica, que surge após repetidas exposições a um produto ou substância.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>A dermatite de contato pode ocorrer em qualquer pessoa.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O tratamento envolve evitar o contato com o agente causador. O uso de cremes à base de corticosteróides e, em casos específicos, medicamentos orais podem ser indicados pelo dermatologista para reduzir os sintomas alérgicos.</p>` 
        },

        {
            nome: "Ultraformer",
            imagem: ultraformer,
            resumo: `Ultraformer é um tratamento estético não invasivo que utiliza tecnologia de ultrassom micro e macrofocado para promover o rejuvenescimento e a firmeza da pele. O procedimento é conhecido como "lifting sem cortes".`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>A Dermatite Seborreica é uma condição crônica e não contagiosa, caracterizada por descamação e vermelhidão em áreas como o couro cabeludo, rosto e tronco. A causa exata é desconhecida, mas fatores como hereditariedade, estresse e excesso de oleosidade podem desencadear o problema.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>A condição pode acometer tanto bebês quanto adultos, sendo mais comum no couro cabeludo, rosto e parte superior do tronco em adultos, e no couro cabeludo em bebês.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O tratamento inclui a lavagem frequente do couro cabeludo, uso de xampus especiais e cremes/pomadas indicados pelo dermatologista. Evitar produtos capilares como sprays e géis também ajuda a controlar os sintomas.</p>
            `,
        },
    ],
    
    "clinica": [
        {
            nome: "Acne",
            resumo: `A acne é uma condição da pele que ocorre quando os folículos pilosos ficam obstruídos por sebo e células mortas, sendo colonizados por bactérias e gerando uma inflamação local. As principais áreas atingidas pela doença são o rosto, o peito, os ombros, as costas e os braços.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>A Acne é uma condição da pele que ocorre quando os folículos pilosos ficam obstruídos por sebo e células mortas, 
            sendo colonizados por bactérias e gerando uma inflamação local. As principais áreas atingidas pela doença são o rosto, 
            peito, ombros, costas e braços. A Acne tem como principais causadores a hereditariedade e os fatores hormonais, podendo 
            se apresentar de várias formas e em graus diferentes. A alimentação também é um fator importante na doença e pode 
            influenciar a gravidade da acne.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>Geralmente, a doença surge durante a adolescência, devido à ação hormonal, que passa por mudanças consideráveis 
            nesta faixa etária. Entretanto, a Acne pode se desenvolver também na fase adulta, principalmente nas mulheres com 
            predisposição genética e alterações hormonais.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>Para indicar o melhor tratamento, o diagnóstico correto do tipo de acne é fundamental. Entre as opções terapêuticas 
            disponíveis estão o uso de produtos tópicos para a diminuição da oleosidade da pele. O uso de antibióticos orais, 
            probióticos e a isotretinoína podem ser usados, quando há indicação.É muito importante que o tratamento seja feito 
            precocemente para evitar cicatrizes.</p>
            `,
        },

        {
            nome: "Câncer de Pele",
            resumo: `O câncer de pele ocorre quando há a transformação e o aumento descontrolado das células cutâneas, principalmente devido à exposição excessiva aos raios ultravioletas do sol. Entre os diferentes tipos de câncer de pele, temos os carcinomas e os melanomas.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>O Câncer de Pele ocorre quando há a transformação e o aumento descontrolado das células cutâneas, principalmente devido à exposição excessiva aos raios ultravioletas do sol. Entre os diferentes tipos de câncer de pele, temos os carcinomas e os melanomas, sendo este último mais raro, mas que tende a se espalhar rapidamente pelo corpo.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>O câncer de pele pode surgir em qualquer pessoa, porém, indivíduos com pele, cabelos e olhos claros, ou com histórico familiar da doença, são mais suscetíveis. Pacientes que ficaram expostos ao sol por muito tempo durante a vida também apresentam maior risco.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O tratamento geralmente envolve a retirada da lesão e do tecido ao redor por meio de cirurgia dermatológica. Em casos específicos, tratamentos complementares com radioterapia ou quimioterapia podem ser indicados. O diagnóstico precoce é fundamental para escolher a melhor abordagem terapêutica.</p>
            `,
        },

        {
            nome: "Dermatite Atópica",
            resumo: `A dermatite atópica é uma doença inflamatória crônica, cuja característica principal é a pele seca, formando lesões avermelhadas que coçam, descamam e podem causar ferimentos. As causas são genéticas, associadas a alterações no sistema imunológico e fatores ambientais.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>A Dermatite Atópica é uma doença inflamatória crônica, cuja característica principal é a pele seca, formando lesões avermelhadas que coçam, descamam e podem causar ferimentos. As causas são genéticas, associadas a alterações no sistema imunológico e fatores ambientais.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>A doença é mais comum em crianças e adultos com histórico de problemas alérgicos, como bronquite e rinite.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O controle da doença é feito com medicamentos anti-inflamatórios e anti-histamínicos, podendo ser tópico ou via oral. Em casos graves, imunossupressores podem ser indicados. Evitar fatores irritantes é essencial, além de cuidados especiais com a higiene pessoal.</p>
            `,
        },
        
        {
            nome: "Dermatite de Contato",
            resumo: "A dermatite de contato é uma reação inflamatória na pele decorrente da exposição a um agente que causa irritação ou alergia. Existem dois tipos: irritativa e alérgica. A dermatite de contato pode acometer qualquer pessoa e o tratamento envolve evitar o toque no agente causador.",
            descricao: 
            `<h3 className="font-semibold">O que é:</h3>
            <p>A dermatite de contato é uma reação inflamatória na pele decorrente da exposição a um agente que causa irritação ou alergia. Existem dois tipos: dermatite de contato irritativa, causada por substâncias com pH diferente da pele, e dermatite de contato alérgica, que surge após repetidas exposições a um produto ou substância.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>A dermatite de contato pode ocorrer em qualquer pessoa.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O tratamento envolve evitar o contato com o agente causador. O uso de cremes à base de corticosteróides e, em casos específicos, medicamentos orais podem ser indicados pelo dermatologista para reduzir os sintomas alérgicos.</p>` 
        },

        {
            nome: "Dermatite Seborreica",
            resumo: `A dermatite seborreica é uma condição crônica e não contagiosa, caracterizada por descamação e vermelhidão em áreas como o couro cabeludo, rosto e tronco. A causa exata é desconhecida, mas fatores como hereditariedade, estresse e excesso de oleosidade podem desencadeá-la.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>A Dermatite Seborreica é uma condição crônica e não contagiosa, caracterizada por descamação e vermelhidão em áreas como o couro cabeludo, rosto e tronco. A causa exata é desconhecida, mas fatores como hereditariedade, estresse e excesso de oleosidade podem desencadear o problema.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>A condição pode acometer tanto bebês quanto adultos, sendo mais comum no couro cabeludo, rosto e parte superior do tronco em adultos, e no couro cabeludo em bebês.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O tratamento inclui a lavagem frequente do couro cabeludo, uso de xampus especiais e cremes/pomadas indicados pelo dermatologista. Evitar produtos capilares como sprays e géis também ajuda a controlar os sintomas.</p>
            `,
        },

        {
            nome: "Disidrose",
            resumo: `A disidrose é um tipo de dermatite caracterizada por pequenas bolhas pruriginosas nas palmas das mãos e plantas dos pés. Suas causas são desconhecidas, mas a condição pode estar associada a alérgenos, estresse físico ou psicológico e lavagem muito frequente das mãos.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>A Disidrose é um tipo de dermatite caracterizada por pequenas bolhas pruriginosas nas palmas das mãos e plantas dos pés. Suas causas são desconhecidas, mas a condição pode estar associada a alérgenos, estresse físico ou psicológico e lavagem frequente das mãos.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>A condição pode afetar qualquer pessoa, mas é mais comum em indivíduos que suam excessivamente ou são mais ansiosos.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O tratamento geralmente é feito com medicações tópicas, e em casos mais graves, podem ser prescritos medicamentos sistêmicos. Evitar fatores que desencadeiam as crises é fundamental para o controle da doença.</p>
            `,
        },

        {
            nome: "DSTs (Doenças Sexualmente Transmissíveis)",
            resumo: `As Doenças Sexualmente Transmissíveis (DSTs) são doenças transmitidas pelo contato sexual desprotegido, afetando a pele e mucosas. Exemplos de DSTs com manifestação cutânea incluem herpes genital, HPV, sífilis e clamídia. Os tratamentos são específicos para cada doença.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>As Doenças Sexualmente Transmissíveis (DSTs) são doenças transmitidas pelo contato sexual desprotegido, afetando a pele e mucosas. Exemplos de DSTs com manifestação cutânea incluem herpes genital, HPV, sífilis e clamídia.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>As DSTs ocorrem em indivíduos que têm contato sexual desprotegido com portadores dessas doenças.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>Os tratamentos são específicos para cada doença, envolvendo desde medicamentos antivirais até antibióticos, dependendo da DST em questão.</p>
            `,
        },

        {
            nome: "Hiperidrose",
            resumo: `A Hiperidrose é caracterizada pelo suor excessivo em áreas como as axilas, palmas das mãos e solas dos pés. Suas causas estão relacionadas a fatores emocionais, genéticos ou a outras doenças subjacentes. Em casos mais graves, a simpatectomia pode ser indicada como tratamento.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>A Hiperidrose é uma condição caracterizada pelo suor excessivo em áreas como as axilas, palmas das mãos e solas dos pés. Suas causas estão relacionadas a fatores emocionais, genéticos ou a outras doenças subjacentes.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>A Hiperidrose pode afetar tanto homens quanto mulheres em diferentes idades.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>As opções de tratamento incluem o uso de antitranspirantes fortes, medicamentos para inibir as glândulas sudoríparas e aplicações de toxina botulínica. Em casos mais graves, a simpatectomia pode ser indicada.</p>
            `,
        },
        
        {
            nome: "Melanoma",
            resumo: "O melanoma é o tipo mais agressivo de câncer da pele. Ele é mais raro e letal que os carcinomas, pois pode se espalhar para outros órgãos. Toda pinta preta ou castanha que muda de cor e textura, aumenta de tamanho ou torna-se irregular nas bordas é suspeita de melanoma.",
            descricao: 
            `<h3 className="font-semibold">O que é:</h3>
            <p>O melanoma é o tipo mais agressivo de câncer da pele. Ele é mais raro e letal que os carcinomas, pois pode se espalhar para outros órgãos. Toda pinta preta ou castanha que muda de cor e textura, aumenta de tamanho ou torna-se irregular nas bordas é suspeita de melanoma.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>A doença é mais comum em pessoas com pele, cabelos e olhos claros, nas ruivas, nas que têm sardas ou que tiveram muitas queimaduras solares durante os primeiros 20 anos de vida, e naquelas com histórico familiar da doença.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>A retirada cirúrgica da lesão é necessária, sem margens de segurança. Depois do exame anatomopatológico, será definido o tratamento complementar, inclusive a ampliação das margens cirúrgicas. Conhecer bem a pele e saber em quais regiões existem pintas e sinais faz toda a diferença na hora de detectar qualquer irregularidade.</p>` 
        },

        {
            nome: "Melasma",
            resumo: "O melasma são manchas escuras na pele do rosto e, em casos mais raros, pode acometer também braços, pescoço e colo. Não há uma causa definida, mas muitas vezes está relacionado ao uso de anticoncepcionais femininos, à gravidez e, principalmente, à exposição solar.",
            descricao: 
            `<h3 className="font-semibold">O que é:</h3>
            <p>O melasma são manchas escuras na pele do rosto e, em casos mais raros, pode acometer também braços, pescoço e colo. Não há uma causa definida, mas muitas vezes está relacionado ao uso de anticoncepcionais femininos, à gravidez e, principalmente, à exposição solar. A predisposição genética também influencia no surgimento desta condição. É comum uma melhora após a menopausa.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>Afeta mais frequentemente as mulheres, podendo ser visto também em homens.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>As terapias disponíveis incluem o uso de medicamentos tópicos e procedimentos para o clareamento, como peelings químicos, microagulhamento e microinjeção de medicamentos. É importante que o tratamento do melasma seja um conjunto de medidas para clarear, estabilizar e impedir que o pigmento volte. Não se iluda com tratamentos milagrosos; o melasma é sempre de difícil tratamento, sendo fundamental o uso de clareadores específicos para a manutenção dos resultados.</p>` 
        },
        
        {
            nome: "Micose",
            resumo: "A micose é uma infecção fúngica que atinge a pele, as unhas e os cabelos. A doença é mais comum em épocas de muito calor e umidade, em ambientes que propiciam a proliferação dos fungos. Podem ser indicados medicamentos tópicos ou orais específicos para o tratamento.",
            descricao: 
            `<h3 className="font-semibold">O que é:</h3>
            <p>A micose é uma infecção fúngica que atinge a pele, as unhas e os cabelos. A doença é mais comum em épocas de muito calor e umidade, especialmente em ambientes que propiciam a proliferação dos fungos.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>Acomete tanto adultos quanto crianças.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O tratamento depende do tipo e do local afetado. Podem ser indicados medicamentos tópicos ou orais específicos. Para prevenir a condição, hábitos como enxugar bem o corpo após o banho, evitar roupas molhadas por muito tempo e não andar descalço em pisos úmidos são importantes.</p>` 
        },
        
        {
            nome: "Psoríase",
            resumo: "A psoríase é uma doença crônica e não contagiosa da pele, caracterizada pela presença de placas avermelhadas e descamações, principalmente nos cotovelos, joelhos, palmas, plantas e couro cabeludo. O tratamento é personalizado de acordo com o grau da doença: leve ou grave.",
            descricao: 
            `<h3 className="font-semibold">O que é:</h3>
            <p>A psoríase é uma doença crônica e não contagiosa da pele, caracterizada pela presença de placas avermelhadas e descamações, principalmente nos cotovelos, joelhos, palmas, plantas e couro cabeludo. Tem evolução recorrente e acredita-se que a doença esteja relacionada com fatores genéticos, imunológicos e emocionais, além da variação climática e do uso de certos medicamentos.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>Acredita-se que 1% da população mundial tenha psoríase, acometendo ambos os sexos.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>Nos casos leves, o recomendado é hidratar bem a pele e aplicar medicamentos tópicos nas áreas atingidas. Já em casos graves, pode ser necessário realizar tratamentos com medicação via oral ou injetáveis. A fototerapia, com exposição à luz ultravioleta A, é uma importante opção terapêutica para aliviar os sintomas da psoríase.</p>` 
        },
        
        {
            nome: "Rosácea",
            resumo: "A rosácea é uma doença comum que se inicia com episódios de vermelhidão no rosto devido a vários estímulos, podendo progredir para uma vermelhidão persistente no centro da face e envolvendo gradualmente as bochechas, testa, queixo e nariz. Pode ocorrer rinofima.",
            descricao: 
            `<h3 className="font-semibold">O que é:</h3>
            <p>A rosácea é uma doença comum que se inicia com episódios de vermelhidão no rosto devido a vários estímulos (frio, calor, banho quente, bebida alcoólica), podendo progredir para uma vermelhidão persistente no centro da face e envolvendo gradualmente as bochechas, testa, queixo e nariz. Olhos, orelhas, tronco e couro cabeludo podem ser afetados. Em alguns casos, pode ocorrer o rinofima, quando as glândulas sebáceas aumentam causando espessamento do nariz.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>Principalmente em mulheres de meia idade. O rinofima é mais comum em homens.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>O tratamento depende do estágio da doença e pode incluir medicações tópicas, orais e luz intensa pulsada, que têm mostrado excelentes resultados.</p>` 
        },
        
        {
            nome: "Vitiligo",
            resumo: "No vitiligo há perda da pigmentação natural da pele, causando o aparecimento de manchas brancas em diversas áreas do corpo. A doença pode estar relacionada a fatores genéticos e psicológicos, como estresse e ansiedade. Existem dois tipos de vitiligo: o segmentar e o generalizado.",
            descricao: 
            `<h3 className="font-semibold">O que é:</h3>
            <p>O vitiligo é uma doença não contagiosa, em que há perda da pigmentação natural da pele, causando o aparecimento de manchas brancas em diversas áreas do corpo. Existem dois tipos: Vitiligo Segmentar, em que as manchas aparecem somente de um lado do corpo, e Vitiligo Generalizado, onde surgem no corpo inteiro. A doença pode estar relacionada a fatores genéticos e psicológicos, como estresse e ansiedade.</p>
            <br />
            <h3 className="font-semibold">Em quem ocorre:</h3>
            <p>Os primeiros sinais geralmente aparecem até os 20 anos de idade, mas a doença pode surgir em qualquer idade e em ambos os sexos.</p>
            <br />
            <h3 className="font-semibold">Tratamento:</h3>
            <p>Os tratamentos incluem o uso de medicações tópicas ou orais e tecnologias como o laser. Além disso, a psicoterapia e o apoio familiar são fundamentais para o controle da doença.</p>` 
        }
    ],

    "cirurgica": [
        {
            nome: "Criocirurgia",
            resumo: "Técnica que utiliza o nitrogênio líquido para destruição de tecidos e lesões da pele. ",
            descricao: `
              <h3 className="font-semibold">O que é:</h3>
              <p>Técnica que utiliza o nitrogênio líquido (-196ºC) para destruição de tecidos e lesões da pele. A substância é liberada em jatos, por meio de ponteiras especiais.</p>
              <br />
              <h3 className="font-semibold">Indicações:</h3>
              <p>Para retirar lesões benignas como verrugas, hemangiomas, manchas do sol, queratose seborréica, lesões infecciosas localizadas, queloides e leucodermias, assim como lesões pré-malignas e alguns cânceres de pele.</p>
            `,
        },

        {
        nome: "Cauterização Química",
        resumo: "Aplicação de substâncias ácidas que destroem camadas de pele para o tratamento de lesões.",
        descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>É a aplicação de substâncias ácidas que promovem destruição de algumas camadas de pele para o tratamento de lesões.</p>
            <br />
            <h3 className="font-semibold">Indicações:</h3>
            <p>Queratose seborreica, queratose actínica e melanoses solares.</p>
        `,
        },

        {
        nome: "Biópsia de Pele, Unha e Cabelo",
        resumo: "Retira um pequeno fragmento de pele que é enviado para exame anatomopatológico no laboratório.",
        descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>É um exame que consiste na retirada de pequeno fragmento de pele (cerca de 4 a 5 mm de diâmetro) que é enviado para exame anatomopatológico no laboratório.</p>
            <br />
            <h3 className="font-semibold">Indicações:</h3>
            <p>Auxiliar no diagnóstico de algumas doenças de pele, cabelos e unhas.</p>
        `,
        },

        {
        nome: "Curetagem",
        resumo: "É a realização de procedimento semelhante à raspagem da área de pele com a lesão.",
        descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>É a realização de procedimento semelhante à raspagem da área de pele com a lesão.</p>
            <br />
            <h3 className="font-semibold">Indicações:</h3>
            <p>Molusco contagioso e alguns cânceres de pele.</p>
        `,
        },

        {
        nome: "Eletrocoagulação",
        resumo: "Utiliza a combinação de eletricidade e calor com o objetivo de destruir lesões, como tumorações.",
        descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>Procedimento que utiliza eletricidade e calor para destruir a lesão.</p>
            <br />
            <h3 className="font-semibold">Indicações:</h3>
            <p>Siringomas, hiperplasias sebáceas, queratoses seborreicas, acrocórdons, nevos intradérmicos.</p>
        `,
        },

        {
        nome: "Infiltração Intralesional",
        resumo: "Aplicação de medicamentos por agulha no local da lesão da pele.",
        descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>Aplicação de medicamentos por agulha no local da lesão da pele.</p>
            <br />
            <h3 className="font-semibold">Indicações:</h3>
            <p>Cicatrizes hipertróficas, quelóides e alguns tipos de quedas de cabelo.</p>
        `,
        },

        {
        nome: "Exérese Cirúrgica",
        resumo: "Retirada de uma lesão através de corte e depois sutura. É utilizada anestesia local.",
        descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>Retirada de uma lesão através de corte e depois sutura. É utilizada anestesia local.</p>
            <br />
            <h3 className="font-semibold">Indicações:</h3>
            <p>Remoção de lesões benignas (lipomas, cistos, verrugas) ou malignas e correção de cicatrizes.</p>
        `,
        },

        {
        nome: "Cirurgia de Unha",
        resumo: "Cirurgia do aparelho ungueal. Existem diferentes tipos: a cantoplastia, a matricectomia e a onicoplastia.",
        descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>Tratamento cirúrgico do aparelho ungueal.</p>
            <br />
            <h3 className="font-semibold">Indicações:</h3>
            <p>Unha encravada, em telha, algumas onicomicoses.</p>
        `,
        },
    ],

    "estetica": [
        {
            nome: "Hidratação Injetável (Skinbooster)",
            resumo: "Tem como objetivo promover a hidratação profunda da pele, repondo quantidades de ácido hialurônico e colágeno perdidos com o processo de envelhecimento.",
            descricao: `
              <h3 className="font-semibold">O que é:</h3>
              <p>O Skinbooster é um tratamento que tem como objetivo promover a hidratação profunda da pele, repondo quantidades de ácido hialurônico e colágeno perdidos com o processo de envelhecimento. O procedimento é feito por meio de injeções de ácido hialurônico abaixo da pele, após o uso de um anestésico tópico. O resultado é a melhora geral do aspecto da área tratada, que pode ser observado desde a primeira sessão, de forma gradual.</p>
              <br />
              <h3 className="font-semibold">Indicações:</h3>
              <p>O procedimento é indicado para melhorar a textura da pele e prevenir os sinais do envelhecimento na face, lábios, pescoço, decote e mãos.</p>
              <h3 className="font-semibold">Como é feito:</h3>
              <p>Em geral, são indicadas pelo menos 3 sessões (intervalos mensais) para alcançar os melhores resultados.</p>
            `,
        },

        {
            nome: "Indução Percutânea de Colágeno Por Agulhas (IPCA)",
            resumo: "São realizadas centenas de microperfurações na pele, a fim de promover a vasodilatação local, estimular os fibroblastos e a produção de colágeno.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>É um tratamento em que são realizados centenas de microperfurações na pele, a fim de promover a vasodilatação local, estimular os fibroblastos e a produção de colágeno. Além disso, esse procedimento ajuda na melhor absorção de medicamentos específicos na área tratada, promovendo resultados mais satisfatórios e em menos tempo.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>O procedimento é indicado para tratar o fotoenvelhecimento, melhorando a textura da pele e atenuando o melasma, cicatrizes da acne, queimaduras, estrias e manchas.</p>
                <h3 className="font-semibold">Como é feito:</h3>
                <p>Pode ser realizado por meio de um aparelho manual, composto por diversas agulhas fininhas (dermaroller) ou com o auxílio de sistemas motorizados (dermapen). Este tratamento pode ser feito isoladamente ou em conjunto com demais técnicas, como a radiofrequência, potencializando os resultados.</p>
            `,
        },

        {
            nome: "MMP",
            resumo: "É a infusão de medicamentos na pele. O medicamento injetado varia de acordo com o diagnóstico. São necessárias em média, 1 a 4 sessões.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>É a infusão de medicamentos na pele. O medicamento injetado varia de acordo com o diagnóstico.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>É utilizada para tratamento de diversas lesões da pele, como verrugas, queloides, leucodermias (“sardas brancas”), calvície masculina e feminina e para rejuvenescimento.</p>
                <h3 className="font-semibold">Como é feito:</h3>
                <p>Procedimento executado por médicos dermatologistas e baseado no uso de microagulhas por onde são injetadas substâncias químicas. O principal diferencial dessa técnica é a incrível delicadeza da microperfuração, associada à possibilidade de um tratamento uniforme e preciso, em pequenas lesões de pele. São necessárias em média, 1 a 4 sessões com intervalos de 3 a 4 semanas entre elas.</p>
            `,
        },

        {
            nome: "Peelings Químicos",
            resumo: "Nos peelings químicos, a remoção das camadas da pele é feita por meio de diferentes ácidos, que podem ser superficiais, médios ou profundos.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>São procedimentos que têm como objetivo melhorar a textura e a aparência, por meio da remoção das camadas mais superficiais da pele. Nos peelings químicos, a remoção das camadas da pele é feita por meio de diferentes ácidos, que podem ser superficiais, médios ou profundos.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>Os peelings promovem a melhora geral da textura da pele, atenuando rugas finas, estrias, cicatrizes, acne, melasma e outros tipos de manchas.</p>
                <h3 className="font-semibold">Como é feito:</h3>
                <p>Em consultório dermatológico, aplicando o ácido mais indicado para o paciente.</p>
            `,
        },

        {
            nome: "Preenchimento Cutâneo",
            resumo: "A substância mais utilizada no preenchimento facial é o Ácido Hialurônico, que melhora o contorno facial e suaviza vincos profundos.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>A substância mais utilizada no preenchimento facial é o Ácido Hialurônico. Ele oferece sustentação, hidratação e volume para a pele, melhorando o contorno facial e suavizando vincos profundos. Trata-se de um produto ideal muito seguro, principalmente quando aplicado usando técnicas e quantidades corretas.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>Melhorar o contorno facial, suavizar linhas e rugas, além de devolver volume às depressões e sulcos faciais. Ótimo para tratamento de lóbulos de orelhas e lábios.</p>
                <h3 className="font-semibold">Como é feito:</h3>
                <p>O preenchimento cutâneo é aplicado abaixo da pele, por meio de uma agulha ou cânulas. O tempo médio de duração do preenchimento depende do local tratado e da substância utilizada.</p>
            `,
        },

        {
            nome: "Toxina Botulínica",
            resumo: "É uma substância que, quando injetada no músculo, bloqueia os sinais nervosos musculares, diminuindo a contração muscular.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>É uma substância que, quando injetada no músculo, bloqueia os sinais nervosos musculares, diminuindo a contração muscular. Quando injetada nos locais de suor intenso, bloqueia a sudorese temporariamente.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>As principais indicações do tratamento são relacionadas ao seu uso estético, para a prevenção e a melhora do aspecto das rugas dinâmicas da face e pescoço. Além disso, a toxina também é uma boa opção terapêutica para tratar a hiperidrose (sudorese excessiva em axilas, pés e mãos) e a enxaqueca crônica.</p>
                <h3 className="font-semibold">Como é feito:</h3>
                <p>O procedimento é simples e não requer nenhum tipo de anestesia. No entanto, nos casos em que o paciente é muito sensível, pode-se utilizar um anestésico tópico local, aproximadamente 1 hora antes do procedimento. Os resultados das aplicações são observados após duas semanas e duram de 4 a 6 meses, período em que a toxina para de agir no músculo.</p>
            `,
        },
    ],

    "laser": [
        {
            nome: "Depilação",
            resumo: `A depilação a laser age pelo princípio da fototermólise seletiva, aquecendo o pelo em formação e o destruindo.`,
            descricao: `
            <h3 className="font-semibold">O que é:</h3>
            <p>A depilação a laser age pelo princípio da fototermólise seletiva, aquecendo o pelo em formação e o destruindo. Em suma, a melanina do pelo capta a energia do laser, destruindo o folículo piloso e dificultando a geração de novos pelos.</p>
            <br />
            <h3 className="font-semibold">Indicações:</h3>
            <p>Indicada para pacientes que sofrem com outros métodos depilatórios, que têm foliculite recorrente ou que possuem excesso de pelos em regiões atípicas.</p>
            <br />
            <h3 className="font-semibold">Como é feito:</h3>
            <p>Pela fisioterapeuta da clínica, através do laser de diodo. São necessárias no mínimo 5 sessões mensais.</p>
            <br />
            <h3 className="font-semibold">Cuidados:</h3>
            <p>É muito importante evitar a exposição solar por 30 dias antes e após a aplicação do laser. Os pelos devem ser raspados e nunca depilados ou pinçados antes das sessões. Não é necessário evitar exercícios físicos.</p>
            `,
        },

        {
            nome: "Laser Fracionado de CO2",
            resumo: "O CO2 fracionado (Dual deep) é um laser que faz um importante estímulo de colágeno na pele.",
            descricao: `
              <h3 className="font-semibold">O que é:</h3>
              <p>O CO2 fracionado (Dual deep) é um laser que faz um importante estímulo de colágeno na pele.</p>
              <br />
              <h3 className="font-semibold">Indicações:</h3>
              <p>Indicado no rejuvenescimento com melhora da aparência de rugas superficiais e profundas, diminuição da flacidez, manchas, textura, vasos e poros abertos. Indicado também no tratamento de cicatrizes. Pode ser aplicado na face, no pescoço, no colo, nos braços e nas mãos.</p>
              <br />
              <h3 className="font-semibold">Como é feito:</h3>
              <p>Em sessão única forte ou 3 sessões mais leves associadas a medicamentos (drug delivery). A descamação total dura de cinco a sete dias, período após o qual é possível notar o rejuvenescimento global da pele. A formação do colágeno continua acontecendo até seis meses após o procedimento.</p>
              <br />
              <h3 className="font-semibold">Cuidados:</h3>
              <p>O paciente deve aplicar vaselina no dia seguinte à aplicação do laser, cremes hidratantes até a descamação total e filtro solar durante 30 dias. É muito importante evitar a exposição solar intensa por 30 dias antes e após a aplicação do laser. Não é necessário evitar exercícios físicos. A maquiagem pode ser utilizada a partir do quarto dia após a aplicação.</p>
            `,
        },

        {
            nome: "Luz Intensa Pulsada",
            resumo: "O procedimento consiste na emissão de uma luz de alta energia que gera calor, atingindo diferentes alvos.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>O procedimento consiste na emissão de uma luz de alta energia que gera calor, atingindo diferentes alvos, como os pigmentos, vasos sanguíneos e pelos, além de estimular a produção de colágeno. Pode ser utilizada isoladamente ou em conjunto com outras técnicas.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>A Luz Intensa pulsada é indicada para melhorar a textura da pele, clarear manchas faciais e corporais e atenuar o aspecto das telangiectasias (vasos sanguíneos aparentes). Indicada também para tratamento de rosácea.</p>
                <br />
                <h3 className="font-semibold">Como é feito:</h3>
                <p>Por médico dermatologista em consultório. A luz é aplicada na pele após colocação de gel para proteção local. São necessárias 3 a 5 sessões mensais.</p>
                <br />
                <h3 className="font-semibold">Cuidados:</h3>
                <p>É muito importante evitar a exposição solar intensa por 30 dias antes e após a aplicação do laser. Não é necessário evitar exercícios físicos. A maquiagem pode ser utilizada no mesmo dia após a aplicação.</p>
            `,
        },

        {
            nome: "Ultrassom Micro e Macro Focado",
            resumo: "Causa um processo inflamatório no qual há a produção de novo colágeno e a reestruturação das antigas fibras de sustentação.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>Trata-se de um aparelho que produz micropontos de coagulação na pele, gordura e musculatura da área tratada, causando um processo inflamatório no qual há a produção de novo colágeno e a reestruturação das antigas fibras de sustentação.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>Indicado para pacientes que possuem algum grau de flacidez facial e corporal e que não querem se submeter a tratamentos invasivos. Indicado para tratamento de pequenas áreas de gordura localizada.</p>
                <br />
                <h3 className="font-semibold">Como é feito:</h3>
                <p>O tratamento facial é feito por dermatologista e o corporal por fisioterapeuta da clínica. O ultrassom é passado na pele após aplicação de gel no local.</p>
                <br />
                <h3 className="font-semibold">Cuidados:</h3>
                <p>Não é necessário ter cuidados especiais após a aplicação e nem evitar exercícios físicos. A maquiagem e rotina de cuidados faciais pode ser utilizada no mesmo dia após a aplicação.</p>
            `,
        },

        {
            nome: "Radiofrequência Facial e Corporal",
            resumo: "Aplicação de ondas de radiofrequência na pele com ativação do colágeno através do aumento da temperatura local.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>Aplicação de ondas de radiofrequência na pele com ativação do colágeno através do aumento da temperatura local, podendo melhorar o contorno facial, corporal e a celulite, pois dá mais firmeza à pele.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>Flacidez facial e corporal.</p>
                <br />
                <h3 className="font-semibold">Como é feito:</h3>
                <p>Por aplicação direta na pele feita pela fisioterapeuta da clínica. São necessárias 6 a 10 sessões.</p>
                <br />
                <h3 className="font-semibold">Cuidados:</h3>
                <p>Evitar banhos frios logo após as aplicações.</p>
            `,
        },
    ],

    "capilar": [
        {
            nome: "Eflúvio Telógeno",
            resumo: "É o nome dado para a queda capilar difusa sem alterações na estrutura do fio. Pode acontecer por vários motivos.",
            descricao: `
              <h3 className="font-semibold">O que é:</h3>
              <p>É o nome dado para a queda capilar difusa sem alterações na estrutura do fio. Pode acontecer por vários motivos e, geralmente, começa 3 meses após o problema desencadeante.</p>
              <br />
              <h3 className="font-semibold">Em quem ocorre:</h3>
              <p>Mais comum em mulheres, mas pode afetar qualquer pessoa que tenha alteração da tireóide, anemia, doenças infecciosas graves (dengue), no pós-parto, cirurgias em geral, regimes extremos, estresse emocional, uso de alguns medicamentos, etc.</p>
              <br />
              <h3 className="font-semibold">Tratamento:</h3>
              <p>Consiste na correção das causas quando forem detectadas, uso de suplementos e medicações tópicas.</p>
            `,
        },

        {
            nome: "Alopecia Androgenética (Calvície)",
            resumo: "É uma doença genética em que há um afinamento dos cabelos.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>É uma doença genética em que há uma diminuição da espessura dos fios, ou seja, um afinamento dos cabelos, principalmente no topo da cabeça. Tem a influência dos hormônios androgênicos que são os hormônios masculinos.</p>
                <br />
                <h3 className="font-semibold">Em quem ocorre:</h3>
                <p>80% dos homens e 50% das mulheres ao longo da vida, podendo começar na puberdade.</p>
                <br />
                <h3 className="font-semibold">Tratamento:</h3>
                <p>Específico para alopécia androgenética, pode ser feito com medicações tópicas, orais, aplicações no couro cabeludo (MMP e LED) e transplante capilar.</p>
            `,
        },

        {
            nome: "Alopecia Areata (Pelada)",
            resumo: "É uma doença inflamatória que provoca a queda de cabelo, formando áreas de pelada no couro cabeludo e barba.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>É uma doença inflamatória, de causa indefinida, que provoca a queda de cabelo, formando áreas de pelada no couro cabeludo e barba, principalmente. O número de lesões varia e pode chegar a atingir todo o couro cabeludo (total) ou todos os pelos do corpo (universal).</p>
                <br />
                <h3 className="font-semibold">Em quem ocorre:</h3>
                <p>Em qualquer pessoa. Fatores genéticos, emocionais, traumas físicos e quadros infecciosos podem desencadear ou agravar o quadro.</p>
                <br />
                <h3 className="font-semibold">Tratamento:</h3>
                <p>Medicamentos tópicos, infiltrações intralesionais e medicação oral, dependendo da gravidade do caso.</p>
            `,
        },

        {
            nome: "Alopecias Cicatriciais",
            resumo: "É um tipo de queda de cabelo permanente que deve ser diagnosticada e tratada em seu estágio inicial.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>É um tipo de queda de cabelo permanente que deve ser diagnosticada e tratada em seu estágio inicial para evitar perda definitiva do cabelo da região afetada.</p>
                <br />
                <h3 className="font-semibold">Em quem ocorre:</h3>
                <p>Ocorre em homens e mulheres.</p>
                <br />
                <h3 className="font-semibold">Tratamento:</h3>
                <p>Após confirmação do diagnóstico (pode ser necessária a biópsia do couro cabeludo), o tratamento é instituído com medicações tópicas e orais específicas para cada caso.</p>
            `,
        },

        {
            nome: "Terapia Capilar",
            resumo: "A Terapia Capilar é iniciada após um diagnóstico capilar, promovendo a remoção de células mortas.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>A Terapia Capilar é iniciada após um diagnóstico capilar, realizado por meio da avaliação detalhada dos fios e do couro cabeludo com o auxílio de exames como a tricoscopia, o tricograma e a biópsia. O tratamento consiste em realizar peelings no couro cabeludo, promovendo a descamação e a remoção das células mortas.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>Indicado para pacientes que sofrem com dermatite seborreica e se incomodam com a oleosidade excessiva do couro cabeludo. Além disso, é uma ótima opção para quem deseja fortalecer os fios e evitar a queda e a quebra capilar.</p>
            `,
        },

        {
            nome: "Microinfusão de Medicamentos na Pele (MMP)",
            resumo: "O MMP visa inserir medicamentos específicos diretamente no couro cabeludo.",
            descricao: `
                <h3 className="font-semibold">O que é:</h3>
                <p>O MMP (Microinfusão de Medicamentos na Pele) é um tratamento que visa inserir, por meio de um aparelho com microagulhas, medicamentos específicos diretamente no couro cabeludo, melhorando a absorção destes ativos e otimizando os resultados.</p>
                <br />
                <h3 className="font-semibold">Indicações:</h3>
                <p>Vários tipos de alopecia (queda de cabelo), como alopecia androgenética, alopecia areata e eflúvio telógeno.</p>
            `,
        },
    ],

    "homem": [
        {
            nome: "Toxina Botulínica",
            resumo: "O uso da toxina botulínica tem como objetivo suavizar as linhas de expressão.",
            descricao: `
              <p>Para tratar as rugas de expressão, deve-se ter cuidado com o posicionamento das sobrancelhas, que devem permanecer retificadas e a permanência de rugas fixas superficiais na testa e entre as sobrancelhas são, de certo ponto, desejáveis, já que representam a masculinidade. Por isso, o uso de toxina botulínica nestas regiões tem como objetivo apenas suavizar as linhas de expressão e não as abolir completamente.</p>
            `,
        },

        {
            nome: "Preenchimentos",
            resumo: "O uso da toxina botulínica tem como objetivo suavizar as linhas de expressão.",
            descricao: `
                <p>Reforçar o terço inferior da face com preenchimentos que deixam o queixo mais quadrado e os ângulos da mandíbula mais proeminentes são extremamente indicados para realçar a beleza masculina. O rosto quadrado representa a força, masculinidade e poder dos homens.</p>
            `,
        },

        {
            nome: "Laser",
            resumo: "Tratar a superfície da pele é fundamental para realçar a beleza masculina.",
            descricao: `
                <p>Tratar a superfície da pele é fundamental para realçar a beleza masculina. Os lasers clareiam a pele, diminuem os poros e estimulam o colágeno. Encontrar o equilíbrio com os tratamentos possíveis é o maior desafio para o profissional no tratamento da pele masculina.</p>
            `,
        },

        {
            nome: "Cabelos",
            resumo: "Uma alteração muito frequente nos homens é a calvície, que se inicia no final da adolescência.",
            descricao: `
                <p>Uma alteração muito frequente nos homens é a calvície. Ela se inicia no final da adolescência e tem caráter hereditário. Iniciar o tratamento precocemente propicia melhores resultados. Também é comum a caspa e o excesso de oleosidade dos fios.</p>
            `,
        },

        {
            nome: "Barba",
            resumo: "Ao barbear-se, o homem retira a proteção natural da pele, por isso é preciso cuidado.",
            descricao: `
                <p>Ao barbear-se, o homem retira a proteção natural da pele, ou seja, os pelos. É preciso bastante higiene e cuidado. Barbear-se todos os dias pode deixar a pele ressecada e suscetível a pelos encravados e irritações. O segredo é a preparação da pele, com esfoliação e emoliência, prevenindo problemas como vermelhidão e sensibilidade.</p>
                <p>O melhor momento para remoção da barba é durante ou após o banho, pois o vapor dilata os poros e torna os pelos mais flexíveis. Movimentar a lâmina no sentido em que os pelos crescem evita que eles encravem. Sempre utilize lâminas novas e pessoais para evitar contaminação e ferimentos. Após o barbear, seque o rosto levemente e hidrate a pele.</p>
            `,
        },

        {
            nome: "Unhas",
            resumo: "Até 35% dos homens desenvolvem unha encravada durante a vida, causando dor e desconforto.",
            descricao: `
                <p>É importante cortá-las bem e deixá-las limpas. Até 35% dos homens desenvolvem unha encravada durante a vida, causando dor e desconforto. Não cortar os cantos das unhas ajuda a evitar esse problema. Micoses de unha ocorrem frequentemente, especialmente nos pés, e podem levar a graves infecções.</p>
            `,
        },
    ],

    "outros": [
        {
            nome: "Dermatologia Pediátrica",
            resumo: "A Dermatologia pediátrica é a área da dermatologia que diagnostica e trata as doenças da pele de bebês, crianças e adolescentes.",
            descricao: `
              <p>A Dermatologia pediátrica é a área da dermatologia que diagnostica e trata as doenças da pele de bebês, crianças e adolescentes. Além de atender os acometimentos da pele característicos desta faixa etária, a Dermatologia Pediátrica também é responsável pela prevenção precoce do câncer de pele, por meio dos exames das pintas, manchas e marcas, desde o nascimento.</p>
              <p>A pele dos bebês e das crianças possui características únicas: são mais finas, sensíveis, imaturas e estão em constante modificação. Por isso, este tipo de pele merece atenção especializada. Da mesma maneira, a pele dos adolescentes sofre com as diversas transformações hormonais, necessitando de um acompanhamento clínico especial.</p>
            `,
        },
        {
            nome: "Dermatologia na Gestação",
            resumo: "A prática da Dermatologia durante a gravidez requer uma abordagem cuidadosa, levando em conta os riscos e benefícios para cada paciente.",
            descricao: `
                <p>A prática da Dermatologia durante a gravidez requer uma abordagem cuidadosa, sempre levando em conta os riscos e benefícios para cada paciente, de maneira individualizada. Na Dermatologia da Gestação, o cuidado com a grávida e com a saúde do bebê é a principal prioridade, esclarecendo todas as dúvidas da futura mamãe em relação às mudanças que uma gestação provoca na pele e nos cabelos.</p>
                <p>O maior objetivo é prevenir as alterações estéticas e funcionais típicas da gravidez, além de aumentar a autoestima e a confiança das grávidas e informar sobre os tratamentos e medicamentos permitidos, bem como as técnicas e opções terapêuticas que estão proibidas durante esta etapa.</p>
            `,
        },
        {
            nome: "Dermatologia da Menopausa",
            resumo: "A Dermatologia da menopausa visa o cuidado especializado da pele das mulheres que passam pelo climatério.",
            descricao: `
                <p>A Dermatologia da menopausa visa o cuidado especializado da pele das mulheres que passam pelo climatério, oferecendo tratamentos com protocolo especial e individualizado. O período da menopausa, ou climatério, é caracterizado pelas intensas mudanças hormonais que afetam todo o corpo da mulher.</p>
                <p>Assim como os demais órgãos, a pele sofre diversos distúrbios causados pelas alterações hormonais: há a redução de melanina, favorecendo o aparecimento de manchas e cabelos brancos; a produção de fibras colágenas e elásticas diminui, causando rugas e flacidez; além da pele ficar mais ressecada, devido à menor produção de ácido hialurônico.</p>
            `,
        },
    ]
}