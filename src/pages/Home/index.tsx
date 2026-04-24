import {
    ContainerBodyText,
    ContainerButtons,
    ContainerImgs,
    ContainerMain,
    ContentBody,
    ImageOne,
    SecondaryImage,
    StyledBtn1,
    StyledBtn2,
    StyledLabel,
    StyledLabelText,
    StyledLabelTwo,
} from './style';
import img1 from '../../assets/ImgSectionOne.jpg';
import img2 from '../../assets/ImgSectionTwo.jpg';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Home () {
    return (
        <ContainerMain id="inicio">
            <ContentBody>
                <ContainerBodyText>
                    <StyledLabelTwo>
                        Arquitetura, interiores e execução com direção clara
                    </StyledLabelTwo>

                    <StyledLabel>
                        Transformamos idéias em espacos funcionais, elegantes e viáveis.
                    </StyledLabel>
                    
                    <StyledLabelText>
                        Projetamos ambientes personalizados do conceito á entrega,
                        equilibrando identidade, conforto e precisão técnica em cada etapa.
                    </StyledLabelText>
                </ContainerBodyText>

                <ContainerButtons>
                    <StyledBtn1 type="button" onClick={() => scrollToSection('contato')}>
                        Solicitar proposta
                    </StyledBtn1>
                    <StyledBtn2 type="button" onClick={() => scrollToSection('servicos')}>
                        Conhecer serviços
                    </StyledBtn2>
                </ContainerButtons>
            </ContentBody>

            <ContainerImgs>
                <ImageOne src={img1} alt="Projeto arquitetonico em ambiente integrado" />
                <SecondaryImage src={img2} alt="Detalhe de interiores com acabamento contemporâneo" />
            </ContainerImgs>

        </ContainerMain>
    )
}