import { Container, Content, Copy, Email, Overlay, SocialContainer, SocialIcon, Title, WhatsButton } from "./style";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <Container id="contato">
      <Overlay>
        <Content>
          <Title>Vamos tirar seu projeto do papel?</Title>

          <WhatsButton
            href="https://wa.me/5518997186094?text=Olá,%20vim%20pelo%20site!"
            target="_blank"
          >
            Falar no WhatsApp
          </WhatsButton>

          <Email>ou</Email>
          <Email href="mailto:daiadalbem1@gmail.com">
           daiadalbem1@gmail.com
          </Email>

            <SocialContainer>
                <SocialIcon href="https://instagram.com/arquitetadaianedalbem" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </SocialIcon>

                <SocialIcon href="https://facebook.com/daiane.dalbem.fernanda.pacheco" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                </SocialIcon>

                <SocialIcon href="https://linkedin.com/in/dalbemdaiane" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </SocialIcon>
            </SocialContainer>

          <Copy>© {new Date().getFullYear()} Tayná Alves. Todos os direitos reservados.</Copy>
          
        </Content>
      </Overlay>
    </Container>
  );
}