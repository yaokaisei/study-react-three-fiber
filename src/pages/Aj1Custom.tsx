import React from 'react';
import styled from '@emotion/styled';

import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  ContactShadows,
  PerspectiveCamera,
} from '@react-three/drei';

import { useMaterialState } from 'src/globStates/materialColorState';
import { Model } from 'src/components/Aj1Model';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: #1c1c1c;
`;

const WrapperCanvas = styled.div`
  height: 100vh;
`;

const WrapperColorPicker = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px;
  white-space: nowrap;
  overflow: scroll;

  > h2 {
    position: sticky;
    left: 0;
    top: 0;
    color: #fff;
  }
`;

const InputLabel = styled.label`
  display: inline-grid;
  gap: 8px;
  width: 80%;
  max-width: min(100% - 2rem, 180px);
  color: #fff;
  font-weight: 700;
  text-align: center;

  input {
    width: 100%;
    height: 80px;
    padding: 0;
    background-color: transparent;
    border: 0px;
  }
`;

const Aj1Custom: React.FC = () => {
  const { material, setMaterial } = useMaterialState();

  // TODO：更新したオブジェクトだけ残る事象を解消する
  const materialColorChangeHandler = (key: string, newWeight: string) => {
    setMaterial({
      [key]: {
        color: newWeight,
      },
    });
  };

  /**
   * Preset event handler
   *
   * NOTE: Chicagoカラーでカラーパレットを一括変更
   */
  // TODO: stateを保持したまま関数として切り出す
  const presetChangeHandler = () => {
    setMaterial({
      foxing: {
        title: 'Foxing',
        color: '#a23a39',
      },
      healOverlay: {
        title: 'Heal Overlay',
        color: '#a23a39',
      },
      heal: {
        title: 'Heal',
        color: '#333333',
      },
      quarter: {
        title: 'Quarter',
        color: '#ffffff',
      },
      sole: {
        title: 'Sole',
        color: '#a23a39',
      },
      quarterOverlay: {
        title: 'Quarter Overlay',
        color: '#a23a39',
      },
      tip: {
        title: 'Tip',
        color: '#a23a39',
      },
      vamp: {
        title: 'Vamp',
        color: '#ffffff',
      },
      label: {
        title: 'Label',
        color: '#a23a39',
      },
      logo: {
        title: 'Logo',
        color: '#333333',
      },
      eyestay: {
        title: 'Eyestay',
        color: '#a23a39',
      },
      swoosh: {
        title: 'Swoosh',
        color: '#333333',
      },
      midsole: {
        title: 'Midsole',
        color: '#ffffff',
      },
      laces: {
        title: 'Laces',
        color: '#333333',
      },
      tongue: {
        title: 'Tongue',
        color: '#ffffff',
      },
    });
  };

  return (
    <Wrapper>
      <WrapperCanvas>
        <Canvas flat>
          <group>
            <axesHelper args={[30]} />
            <gridHelper args={[30, 30, 30]} position={[0, -0.65, 0]} />
          </group>

          <PerspectiveCamera makeDefault position={[-10, 10, 20]} />

          <directionalLight intensity={0.5} />
          <ambientLight intensity={0.2} />

          <OrbitControls
            enablePan={false}
            enableZoom
            maxPolarAngle={Math.PI / 1}
            minPolarAngle={Math.PI / 6}
            maxDistance={8}
            minDistance={3}
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
      </WrapperCanvas>

      <WrapperColorPicker>
        <h2>COLOR PICKER</h2>

        <button onClick={presetChangeHandler}>Chicago Preset</button>

        {Object.entries(material).map((item, index) => (
          <InputLabel key={index}>
            {item[1].title}
            <input
              type="color"
              value={item[1].color}
              onChange={(e) => {
                materialColorChangeHandler(item[0], e.target.value);
              }}
            />
          </InputLabel>
        ))}
      </WrapperColorPicker>
    </Wrapper>
  );
};

export default Aj1Custom;
