import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100svh;
`;

export const CanvasWrapper = styled.div`
  width: 1200px;
  height: 1200px;
  visibility: hidden;
  position: fixed;
`;

export const ContentsWrapper = styled.div`
  display: grid;
  justify-content: center;
  gap: 16px;
`;

export const Link = styled.a`
  border: 0;
  background-color: #232323;
  border-radius: 50vw;
  color: #fff;
  padding: 16px;
  font-weight: 700;
  text-align: center;
`;
