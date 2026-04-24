import {
    Card,
    CardDescription,
    CardTitle,
    ContainerCards,
    ContainerMain,
    SectionEyebrow,
    SectionHeader,
    SectionText,
    StyledLabel,
} from './style';

const services = [
    {
        title: 'Projetos arquitetonicos',
        description: 'Estudo preliminar, anteprojeto e detalhamento com foco em fluxo, iluminação e viabilidade de execução.',
    },
    {
        title: 'Interiores e ambientação',
        description: 'Definição de materiais, marcenaria, paleta cromática e soluções para um resultado coerente e sofisticado.',
    },
    {
        title: 'Acompanhamento de obra',
        description: 'Suporte técnico para transformar projeto em entrega, reduzindo improviso e preservando a qualidade final.',
    },
];

export default function OurServices () {

    return (
        <ContainerMain id='servicos'>
            <SectionHeader>
                <SectionEyebrow>Como atuamos</SectionEyebrow>
                <StyledLabel>
                    Nossos serviços
                </StyledLabel>
                <SectionText>
                    Organizamos cada projeto em etapas claras para que o cliente entenda o processo,
                    aprove decisões com segurança e chegue ao resultado esperado sem ruído.
                </SectionText>
            </SectionHeader>

            <ContainerCards>
                {services.map((service) => (
                    <Card key={service.title}>
                        <CardTitle>{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                    </Card>
                ))}
            </ContainerCards>
        </ContainerMain>
    )
}