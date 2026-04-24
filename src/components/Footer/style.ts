import styled from "styled-components";


export const Container = styled.footer`
  width: 100%;
  padding: 56px clamp(24px, 6vw, 88px) 32px;
  background-color: #45125D;
`;

export const Overlay = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  //background: rgba(0, 0, 0, 0.35);
  border-radius: 24px;
  padding: 40px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
`;

export const WhatsButton = styled.a`
  background: #25d366;
  color: #fff;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #1ebe5d;
  }
`;

export const Email = styled.a`
  color: #ccc;
  font-size: 14px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

export const Copy = styled.span`
  font-size: 14px;
  color: #aaa;
  margin-top: 10px;
`;

export const SocialContainer = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 12px;
    justify-content: center;
`;

export const SocialIcon = styled.a`
  color: #ccc;
  font-size: 25px;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }
`;