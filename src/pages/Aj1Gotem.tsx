import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import { Loader, PerspectiveCamera, Stage } from '@react-three/drei';

import { Model } from 'src/components/Aj1Model';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #232323;
`;
const WrapperCanvas = styled.div`
  height: 100vh;
`;

const Aj1Gotem: React.FC = () => {
  return (
    <Wrapper>
      <WrapperCanvas>
        <Canvas flat>
          <PerspectiveCamera makeDefault position={[-0.3, Math.PI / 5, 80]} />

          <Stage intensity={0}>
            <Model position={[0, 0.36, 0]} rotation={[0.04, 0.5, -0.01]} />
          </Stage>
        </Canvas>
        <Loader />
      </WrapperCanvas>
    </Wrapper>
  );
};

export default Aj1Gotem;
