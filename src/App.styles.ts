import styled from 'styled-components';

export const PageScroll = styled.main`
  height: 100dvh;
  overflow-y: auto;
  scroll-snap-type: y proximity;
  scroll-behavior: smooth;
  scroll-padding-top: 88px;
  background: ${({ theme }) => theme.colors.background};
`;