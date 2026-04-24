import styled from "styled-components";

export const ContainerMain = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  min-height: 88px;
  padding: 18px clamp(24px, 5vw, 56px);
  background: rgba(248, 249, 251, 0.88);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(69, 18, 93, 0.08);
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

export const LogoImg = styled.img`
  width: 50px;
  height: 60px;
  object-fit: contain;
`;

export const HeaderImg = styled.img`
  width: auto;
  height: 38px;
  object-fit: contain;

  @media (max-width: 640px) {
    height: 28px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  margin-left: auto;
  gap: 20px;

  @media (max-width: 720px) {
    gap: 8px;
  }
`;

export const NavButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.3rem;
  font-weight: 700;
  padding: 10px 14px;
  border-radius: 999px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(69, 18, 93, 0.08);
  }
`;