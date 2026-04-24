import styled from "styled-components";

export const ContainerMain = styled.section`
  min-height: 100dvh;
  width: 100%;
  scroll-snap-align: start;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(320px, 0.95fr);
  align-items: center;
  gap: clamp(32px, 5vw, 72px);
  padding: clamp(112px, 14vh, 144px) clamp(24px, 6vw, 88px) clamp(56px, 8vh, 72px);
  box-sizing: border-box;
  background: linear-gradient(135deg, rgba(186, 206, 202, 0.92), rgba(248, 249, 251, 0.96));

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const ContainerBodyText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ContentBody = styled.div`
  max-width: 620px;
`;

export const StyledLabel = styled.h1`
  font-size: clamp(2.8rem, 6vw, 5.2rem);
  line-height: 0.96;
  letter-spacing: -0.05em;
  color: ${({ theme }) => theme.colors.primary};
  text-wrap: balance;
`;

export const StyledLabelTwo = styled.p`
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

export const StyledLabelText = styled.p`
  max-width: 54ch;
  font-size: clamp(1rem, 1.35vw, 1.15rem);
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 14px;
`;

const BaseButton = styled.button`
  border: none;
  padding: 14px 28px;
  border-radius: 28px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const StyledBtn1 = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 18px 35px rgba(69, 18, 93, 0.2);
`;

export const StyledBtn2 = styled(BaseButton)`
  background-color: rgba(255, 255, 255, 0.7);
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid rgba(69, 18, 93, 0.14);
`;

export const ContainerImgs = styled.div`
  position: relative;
  width: min(100%, 520px);
  aspect-ratio: 5 / 6;

  @media (max-width: 960px) {
    margin-top: 12px;
  }
`;

export const ImageOne = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 32px;
  object-fit: cover;
  box-shadow: 0 30px 60px rgba(43, 45, 66, 0.12);
`;

export const SecondaryImage = styled.img`
  position: absolute;
  bottom: clamp(-24px, -3vw, -12px);
  left: clamp(-24px, -3vw, -12px);
  width: min(48%, 240px);
  aspect-ratio: 4 / 5;
  border-radius: 28px;
  object-fit: cover;
  border: 6px solid rgba(248, 249, 251, 0.92);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.12);
`;