import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ColorButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  iconColor?: string;
  active?: boolean;
}

export const StyledButton = styled.button<ColorButtonProps>`
  position: relative;
  min-width: 140px;
  height: 140px;
  font-size: 16px;
  padding: 88px 0 14px;
  border-radius: 20px;
  border: none;
  display: inline-grid;
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

export const ColorButton: React.FC<ColorButtonProps> = ({
  label,
  iconColor,
  active = false,
  ...props
}) => {
  return (
    <StyledButton {...props} iconColor={iconColor} active={active}>
      {label}
    </StyledButton>
  );
};
