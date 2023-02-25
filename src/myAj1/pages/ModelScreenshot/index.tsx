import React, { useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { Loader } from '@react-three/drei';

import { useUrl } from 'src/myAj1/globStates/screenshotDataUrl';
import { Model, ImageLayerFrame, Stage } from 'src/myAj1/components';

import { Wrapper, CanvasWrapper, ContentsWrapper, Link } from './style';

const Scene: React.FC = () => {
  const { gl, scene, camera } = useThree();
  const { set } = useUrl();

  useEffect(() => {
    gl.render(scene, camera);
    const date = gl.domElement.toDataURL('image/png');

    set(date);
  }, [camera, gl, scene, set]);

  return (
    <>
      <Stage>
        <Model rotation={[0, 0, -0.01]} />
      </Stage>
    </>
  );
};

export const ModelScreenshot: React.FC = () => {
  const { state, set } = useUrl();

  return (
    <Wrapper>
      <CanvasWrapper>
        <Canvas
          flat
          gl={{ preserveDrawingBuffer: true }}
          camera={{ position: [-3.5, 0, 5], fov: 60 }}
        >
          <Scene />
        </Canvas>
      </CanvasWrapper>

      <ContentsWrapper>
        <ImageLayerFrame imagePath={state} setDataUrl={set} />
        <Link href={state} download="canvas.png">
          スクリーンショット
        </Link>
      </ContentsWrapper>
      <Loader />
    </Wrapper>
  );
};
