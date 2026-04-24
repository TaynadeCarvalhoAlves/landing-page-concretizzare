import { Brand, ContainerMain, HeaderImg, LogoImg, Nav, NavButton } from './style';

import logo from '../../assets/logoOriginal.png';
import header from '../../assets/headerNew.png';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

export default function Header () {

    return (
        <ContainerMain>
            <Brand>
                <LogoImg src={logo} alt="Logo Concretizzare"/>
                <HeaderImg src={header} alt="Concretizzare"/>
            </Brand>

        <Nav>
            <NavButton type="button" onClick={() => scrollToSection('inicio')}>
                Inicio
            </NavButton>
            <NavButton type="button" onClick={() => scrollToSection('servicos')}>
                Serviços
            </NavButton>
            <NavButton type="button" onClick={() => scrollToSection('projetos')}>
                Projetos
            </NavButton>
             <NavButton type="button" onClick={() => scrollToSection('feedback')}>
                Feedbacks
            </NavButton>
        </Nav>

        </ContainerMain>
    )
}