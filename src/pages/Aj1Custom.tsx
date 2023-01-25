import React from 'react';
import styled from '@emotion/styled';

import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  ContactShadows,
  PerspectiveCamera,
} from '@react-three/drei';
import { HexColorPicker, HexColorInput } from 'react-colorful';

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
  overflow-y: auto;

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
  padding: 10px;
  text-align: center;

  input {
    width: 100%;
    padding: 0;
    border: 0px;
    border-radius: 8px;
    padding: 5px 10px;
    color: #1c1c1c;
  }

  .react-colorful {
    width: 100%;
    height: 160px;
  }
`;

const Aj1Custom: React.FC = () => {
  const { material, setMaterial } = useMaterialState();

  const materialArray = Object.entries(material);

  // TODO:keyの型をMaterialNameTypeにしたいが、エラーが起きるので解消する
  const materialColorChangeHandler = (key: string, color: string) =>
    setMaterial((prev) => {
      return {
        ...prev,
        [key]: {
          ...prev[key],
          ...{
            color: color,
          },
        },
      };
    });

  /**
   * Preset event handler
   *
   * NOTE: Chicagoカラーでカラーパレットを一括変更
   */
  // TODO: stateを保持したまま関数として切り出す
  const presetChangeHandler = () => {
    setMaterial((prev) => {
      return {
        ...prev,
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
      };
    });
  };

  return (
    <Wrapper>
      <WrapperCanvas>
        <Canvas flat>
          <>
            {/* 開発ヘルパーガイド */}
            <axesHelper args={[30]} />
            <gridHelper args={[30, 30, 30]} position={[0, -0.65, 0]} />
          </>

          <>
            {/* 照明 */}
            <directionalLight intensity={0.5} />
            <ambientLight intensity={0.2} />
          </>
          <>
            {/* カメラ（PerspectiveCameraは初期状態のカメラ位置、OrbitControlsでホイール操作を有効化） */}
            <PerspectiveCamera makeDefault position={[-10, 10, 20]} />
            <OrbitControls
              enablePan={false}
              enableZoom
              maxPolarAngle={Math.PI / 1}
              minPolarAngle={Math.PI / 6}
              maxDistance={10}
              minDistance={3}
            />
          </>
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
        <>
          <h2>COLOR PICKER</h2>

          <button onClick={presetChangeHandler}>Chicago Preset</button>

          {materialArray.map((item, index) => (
            <InputLabel key={index}>
              {item[1].title}
              <HexColorPicker
                color={item[1].color}
                onChange={(newColor: string) =>
                  materialColorChangeHandler(item[0], newColor)
                }
              />
              <HexColorInput
                color={item[1].color}
                onChange={(newColor: string) =>
                  materialColorChangeHandler(item[0], newColor)
                }
              />
            </InputLabel>
          ))}
        </>
      </WrapperColorPicker>
    </Wrapper>
  );
};

export default Aj1Custom;
