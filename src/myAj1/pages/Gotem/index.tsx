import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, useProgress } from '@react-three/drei';

import { Model } from 'src/myAj1/components/Aj1Model';
import {
  HeadingImage,
  Wrapper,
  CanvasWrapper,
  ContentsWrapper,
  ContentsHeading,
  Button,
} from './style';
import { Stage } from 'src/myAj1/components/Stage';

export const Gotem: React.FC = () => {
  const { active } = useProgress();

  return (
    <Wrapper>
      {active && <span>ロード中</span>}

      <HeadingImage isActive={active}>
        <img src="/assets/decoration-text-gotem.svg" alt="GOT'EM" />
      </HeadingImage>

      <CanvasWrapper isActive={active}>
        <Canvas flat>
          <PerspectiveCamera makeDefault position={[-0.3, Math.PI / 5, 80]} />

          <Stage>
            <Model position={[0, 0.36, 0]} rotation={[0, 0.7, -0.01]} />
          </Stage>
        </Canvas>

        <ContentsWrapper>
          <ContentsHeading>エアージョーダン 1 HIGH OG</ContentsHeading>
          <Button>共有する</Button>
        </ContentsWrapper>
      </CanvasWrapper>
    </Wrapper>
  );
};
