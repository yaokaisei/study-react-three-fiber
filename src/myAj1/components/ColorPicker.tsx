import React, { useState } from 'react';
import styled from '@emotion/styled';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import { ColorPickerBaseProps } from 'react-colorful/dist/types';

const Wrapper = styled.div`
  background-color: #ededed;
  padding: 16px;
  border-radius: 16px;
  display: grid;
  gap: 16px;

  input {
    width: 100%;
    padding: 0;
    border: 0px;
    border-radius: 8px;
    padding: 5px 10px;
    color: #1c1c1c;
  }

  .react-colorful {
    width: 100%;
    height: 160px;
  }
`;

const StylePresetColors = styled.ul`
  display: flex;
  gap: 8px;
  overflow-x: auto;
`;

const StylePresetColorButton = styled.button<{ color: string }>`
  overflow: hidden;
  text-indent: 100%;
  white-space: nowrap;
  width: 24px;
  height: 24px;
  padding: 0;
  background-color: ${({ color }) => color};
  border: 0;
  border-radius: 50%;
`;

interface ColorPickerProps extends ColorPickerBaseProps<string> {
  presetColors?: Array<string>;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  presetColors = [],
  ...props
}) => {
  const [presetColorsState, setPresetColorsState] =
    useState<string[]>(presetColors);

  const addPresetColor = () => {
    // NOTE: 重複した場合はプリセットカラーを追加しないように早期リターン
    if (presetColorsState.some((color) => color === props.color)) return;

    setPresetColorsState(presetColorsState.concat(props.color));
  };

  return (
    <Wrapper>
      <HexColorPicker color={props.color} onChange={props.onChange} />
      <HexColorInput color={props.color} onChange={props.onChange} />

      <>
        {presetColorsState.length !== 0 && (
          <StylePresetColors>
            {presetColorsState.map((color, index) => (
              <li key={index}>
                <StylePresetColorButton
                  color={color}
                  onClick={() => props.onChange(color)}
                >
                  {color}
                </StylePresetColorButton>
              </li>
            ))}
          </StylePresetColors>
        )}

        <button onClick={addPresetColor}>色追加</button>
      </>
    </Wrapper>
  );
};
