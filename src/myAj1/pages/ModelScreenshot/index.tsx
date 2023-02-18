import React, { useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Loader, PerspectiveCamera, Text } from '@react-three/drei';

import { Model } from 'src/myAj1/components/Aj1Model';
import { Wrapper, CanvasWrapper, ContentsWrapper, Link } from './style';
import { Stage } from 'src/myAj1/components/Stage';
import { useUrl } from 'src/myAj1/globStates/screenshotDataUrl';

const Scene: React.FC = () => {
  const gl = useThree((state) => state.gl);
  const { state, set } = useUrl();

  // TODO: URLの再レンダリングを抑える
  useEffect(() => {
    const date = gl.domElement.toDataURL('image/png');
    set(date);
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[-0.3, Math.PI / 5, 80]} />
      <Stage>
        <Model position={[0, 0.36, 70]} rotation={[0, 0.7, -0.01]} />
      </Stage>
      <Text color={'#bebebe'} fontSize={0.1} position={[0, -3.2, 0]}>
        NOT FOR SALE | AIR JORDAN DESIGN
      </Text>
    </>
  );
};

export const ModelScreenshot: React.FC = () => {
  const { state } = useUrl();

  return (
    <Wrapper>
      <CanvasWrapper>
        <Canvas gl={{ preserveDrawingBuffer: true }}>
          <Scene />
          <color attach="background" args={['#232323']} />
        </Canvas>
      </CanvasWrapper>

      <ContentsWrapper>
        <img src={state} alt="" />
        <Link href={state} download="canvas.png">
          スクリーンショット
        </Link>
      </ContentsWrapper>
      <Loader />
    </Wrapper>
  );
};
