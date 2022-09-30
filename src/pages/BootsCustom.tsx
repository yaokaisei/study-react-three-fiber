import React, { useRef } from 'react';
import styled from '@emotion/styled';

import { PointLightHelper } from 'three';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  useHelper,
  ContactShadows,
  PerspectiveCamera,
} from '@react-three/drei';

import { Model } from 'src/components/MartensBootModel';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: #1c1c1c;

  & > .bg {
    width: 100%;
    height: 100vh;
  }
`;

const BootsCustom: React.FC = () => {
  const pointLightRef = useRef(null!);

  // useHelper(pointLightRef, PointLightHelper, 0.5, 'hotpink');

  return (
    <Wrapper>
      <div className="bg">
        <Canvas flat>
          <group>
            <axesHelper args={[30]} />
            <gridHelper args={[30, 30, 30]} position={[0, -0.65, 0]} />
          </group>

          <PerspectiveCamera makeDefault position={[20, 10, -20]} />

          <directionalLight intensity={0.5} />
          <ambientLight intensity={0.2} />

          <OrbitControls
            enablePan={false}
            enableZoom
            maxPolarAngle={Math.PI / 1}
            minPolarAngle={Math.PI / 6}
            maxDistance={4}
            minDistance={2}
          />
          <ContactShadows
            position={[0, -0.65, 0]}
            scale={10}
            far={2}
            blur={2}
            rotation={[Math.PI / 2, 0, 0]}
          />

          <Model />
        </Canvas>
      </div>
    </Wrapper>
  );
};

export default BootsCustom;
