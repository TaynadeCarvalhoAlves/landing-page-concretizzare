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

export const ContainerCards = styled.div`
  display: grid;
grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: #ffffff;
  padding: 28px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 180px;
  transition: 0.3s;

  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 
    0 8px 20px rgba(0, 0, 0, 0.06),
    0 24px 60px rgba(0, 0, 0, 0.10);

  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-8px);
    border: 1px solid rgba(123, 44, 191, 0.25);

    box-shadow: 
      0 12px 25px rgba(0, 0, 0, 0.08),
      0 30px 70px rgba(0, 0, 0, 0.14);
  }
`;

export const Description = styled.h3`
  font-size: 15px;
  color: #555;
  line-height: 1.6;
`;

export const Author = styled.div`
  margin-top: 20px;
  font-weight: 600;
  color: #333;
`;

export const Role = styled.span`
  display: block;
  font-size: 12px;
  color: #888;
  margin-top: 2px;
`;