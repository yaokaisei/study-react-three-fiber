import React, { useState } from 'react';
import styled from '@emotion/styled';

import BoxModel from 'src/components/BoxModel';

const Wrapper = styled.div`
  background: linear-gradient(180deg, #272730 100%, #535375 50%);

  & > .bg {
    width: 100%;
    height: 100vh;
  }
`;

const Contents = styled.div`
  position: absolute;
  z-index: 1;
  gap: 8px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  padding: clamp(40px, 6.77vw, 64px);

  & h1 {
    font-weight: 900;
    font-size: clamp(4rem, 6.77vw, 5rem);
    margin: 0;
    color: #cd853f;
    line-height: 1;
  }
`;

const InputLabel = styled.label`
  display: grid;
  gap: 8px;
  width: 100%;
  max-width: min(100% - 2rem, 400px);
  color: #fff;

  input {
    width: 100%;
  }
`;

const BoxCustomizer: React.FC = () => {
  const [colorCode, setColorCode] = useState('#5a40ce');
  const [scale, setScale] = useState(1);

  return (
    <Wrapper>
      <Contents>
        <h1>
          3D BOX
          <br />
          Customizer
        </h1>

        <InputLabel>
          Box color
          <input
            type="color"
            value={colorCode}
            onChange={(event) => setColorCode(event.target.value)}
          />
        </InputLabel>

        <InputLabel>
          Box Scale
          <input
            type="number"
            min="1"
            max="3"
            step="0.1"
            value={scale}
            onChange={(event) => setScale(Number(event.target.value))}
          ></input>
        </InputLabel>
      </Contents>

      <div className="bg">
        <BoxModel color={colorCode} scale={scale} />
      </div>
    </Wrapper>
  );
};

export default BoxCustomizer;
