import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Wrapper = styled.div<{ isActive?: boolean }>`
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100%;
  background: #232323;
`;

export const CanvasWrapper = styled.div<{ isActive?: boolean }>`
  height: 100svh;
  opacity: 1;
  transition: opacity 1s ease;

  ${({ isActive }) =>
    isActive &&
    css`
      opacity: 0;
    `}
`;

export const HeadingImage = styled.h1<{ isActive?: boolean }>`
  position: absolute;
  width: 100%;
  margin: 0;
  top: 35svh;
  left: 50%;
  transform: translate(-50%, -70%);

  ${({ isActive }) =>
    isActive
      ? css`
          opacity: 0;
        `
      : css`
          animation-name: Bounce;
          animation-duration: 0.7s;
          animation-timing-function: cubic-bezier(0, 0, 0, 1.7);

          @keyframes Bounce {
            0% {
              opacity: 0;
              transform: translate(-50%, -150%);
            }
            100% {
              opacity: 1;
              transform: translate(-50%, -70%);
            }
          }
        `}

  img {
    width: min(60%, 580px);
    margin: auto;
  }
`;

export const ContentsWrapper = styled.div`
  position: absolute;
  width: 100%;
  max-height: 20%;
  bottom: 0;
  padding: 25px 0;
  text-align: center;
  min-height: 200px;
  display: grid;
  justify-content: center;
  gap: 16px;
`;

export const ContentsHeading = styled.h2`
  color: #fff;
  margin: 0;
`;

export const Button = styled.button`
  border: 0;
  background-color: #fff;
  border-radius: 50vw;
  color: #383838;
  padding: 16px;
  font-weight: 700;
  box-shadow: -5px -5px 10px #383838, 5px 5px 10px #545454;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    box-shadow: -1px -1px 1px #383838, 1px 1px 1px #545454;
  }
`;
