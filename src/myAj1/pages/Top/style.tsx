import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #232323, #121212);
`;

export const WrapperCanvas = styled.div`
  height: 100vh;
`;

export const CustomArea = styled.div`
  display: grid;
  gap: 16px;
  align-items: end;
  grid-template-columns: 30% 70%;
`;

export const WrapperColorPicker = styled.div`
  position: fixed;
  display: grid;
  gap: 20px;
  bottom: 0;
  width: 100%;
  padding: 16px;
`;

export const ToggleButtons = styled.div`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  overflow-y: auto;
  padding: 10px 0;
`;

export const ToggleButton = styled.button<{
  iconColor: string;
  active: boolean;
}>`
  position: relative;
  min-width: 140px;
  height: 140px;
  font-size: 16px;
  padding: 88px 0 14px;
  border-radius: 20px;
  border: none;
  display: grid;
  background-color: #ededed;
  place-items: center;
  transition: transform 0.3s ease-in-out;
  ${({ active }) => css`
    transform: translateY(${active ? '-8px' : '0'});
  `}
  &::before {
    content: '';
    position: absolute;
    background-color: ${({ iconColor }) => iconColor};
    width: 60px;
    height: 60px;
    top: 16px;
    border-radius: 50%;
  }
`;
