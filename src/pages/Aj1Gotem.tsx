import React from 'react';
import styled from '@emotion/styled';
import { Canvas } from '@react-three/fiber';
import { ContactShadows, PerspectiveCamera } from '@react-three/drei';

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
          <>
            {/* 照明 */}
            <directionalLight intensity={0.5} />
            <ambientLight intensity={0.2} />
          </>
          <PerspectiveCamera makeDefault position={[-0.3, Math.PI / 5, 8]} />
          <ContactShadows
            position={[0, -0.75, 0]}
            scale={20}
            far={1}
            blur={0.8}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <Model position={[0, 0.36, 0]} rotation={[0.04, 0.5, -0.01]} />
        </Canvas>
      </WrapperCanvas>
    </Wrapper>
  );
};

export default Aj1Gotem;
