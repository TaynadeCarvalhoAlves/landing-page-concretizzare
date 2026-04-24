import styled from "styled-components";

export const ContainerMain = styled.section`
  min-height: 100dvh;
  width: 100%;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  padding: clamp(112px, 14vh, 144px) clamp(24px, 6vw, 88px) clamp(56px, 8vh, 72px);
  box-sizing: border-box;
  background: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 760px;
`;

export const SectionEyebrow = styled.p`
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

export const StyledLabel = styled.h1`
  font-size: clamp(2.2rem, 4vw, 3.5rem);
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SectionText = styled.p`
  max-width: 58ch;
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

// export const Card = styled.div`
//   min-height: 240px;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-end;
//   gap: 14px;
//   padding: 28px;
//   border-radius: 24px;
//   background: linear-gradient(180deg, #ffffff, #f5f7fb);
//   border: 1px solid rgba(69, 18, 93, 0.08);
//   box-shadow: 0 18px 40px rgba(43, 45, 66, 0.08);
//   transition: transform 0.2s ease, box-shadow 0.2s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 24px 48px rgba(43, 45, 66, 0.12);
//   }
// `;

export const Card = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center; /* melhor distribuição */
  gap: 12px;
  padding: 28px;
  border-radius: 20px;

  background: #ffffff;

  /* borda mais sutil */
  border: 1px solid rgba(0, 0, 0, 0.04);

  /* sombra mais “profunda” */
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.06),
    0 24px 60px rgba(0, 0, 0, 0.10);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-8px);

    /* cor só aparece no hover */
    border: 1px solid rgba(123, 44, 191, 0.25);

    box-shadow: 
      0 12px 25px rgba(0, 0, 0, 0.08),
      0 30px 70px rgba(0, 0, 0, 0.14);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.35rem;
  color: ${({ theme }) => theme.colors.primary};
`;

export const CardDescription = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.textLight};
`;