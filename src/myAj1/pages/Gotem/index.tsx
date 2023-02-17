import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Loader, PerspectiveCamera, Stage } from '@react-three/drei';

import { Model } from 'src/myAj1/components/Aj1Model';
import { Wrapper, WrapperCanvas } from './style';

export const Gotem: React.FC = () => {
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
