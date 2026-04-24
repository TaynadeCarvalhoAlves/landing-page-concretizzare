import styled from "styled-components";

export const ContainerMain = styled.section`
  min-height: 100dvh;
  width: 100%;
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(112px, 14vh, 144px) clamp(24px, 6vw, 88px) clamp(56px, 8vh, 72px);
  box-sizing: border-box;
  background-color: #eef6f5;
`;

export const ContainerSection = styled.section`
  width: min(100%, 1180px);
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const SectionEyebrow = styled.p`
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondaryDark};
`;

export const Title = styled.h2`
  max-width: 16ch;
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  line-height: 1;
  letter-spacing: -0.04em;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SectionText = styled.p`
  max-width: 60ch;
  font-size: 1.05rem;
  line-height: 1.75;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ContainerCarousel = styled.div`
  width: 100%;
  margin-top: 12px;

  .swiper {
    width: 100%;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 24px 54px rgba(43, 45, 66, 0.12);
  }

  .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: ${({ theme }) => theme.colors.white};
  }

  .swiper-pagination-bullet-active {
    background: ${({ theme }) => theme.colors.white};
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: min(62vh, 560px);
  object-fit: cover;
  object-position: center;
`;
