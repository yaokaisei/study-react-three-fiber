import React, { useState } from 'react';

import { Stage, MeshBox } from 'src/boxCustomizer/components';
import { Contents, InputLabel, ModelWrapper, Wrapper } from './style';

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

      <ModelWrapper>
        <Stage>
          <MeshBox position={[0, 2, 0]} color={colorCode} scale={scale} />
        </Stage>
      </ModelWrapper>
    </Wrapper>
  );
};

export default BoxCustomizer;
