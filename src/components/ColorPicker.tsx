import React from 'react';
import styled from '@emotion/styled';
import { HexColorInput, HexColorPicker } from 'react-colorful';
import { ColorPickerBaseProps } from 'react-colorful/dist/types';

const Wrapper = styled.div`
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

const ColorPicker = (props: Partial<ColorPickerBaseProps<string>>) => {
  return (
    <Wrapper>
      <HexColorPicker color={props.color} onChange={props.onChange} />
      <HexColorInput color={props.color} onChange={props.onChange} />
    </Wrapper>
  );
};

export default ColorPicker;
