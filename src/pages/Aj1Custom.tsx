import React, { useEffect, useState } from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Canvas } from '@react-three/fiber';
import {
  OrbitControls,
  ContactShadows,
  PerspectiveCamera,
} from '@react-three/drei';

import { useMaterialState } from 'src/globStates/materialColorState';
import { Model } from 'src/components/Aj1Model';
import ColorPicker from 'src/components/ColorPicker';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #232323, #121212);
`;

const WrapperCanvas = styled.div`
  height: 100vh;
`;

const CustomArea = styled.div`
  display: grid;
  gap: 16px;
  align-items: end;
  grid-template-columns: 30% 70%;
`;

const WrapperColorPicker = styled.div`
  position: fixed;
  display: grid;
  gap: 20px;
  bottom: 0;
  width: 100%;
  padding: 16px;
`;

const ToggleButtons = styled.div`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  overflow-y: auto;
  padding: 10px 0;
`;

const ToggleButton = styled.button<{ iconColor: string; active: boolean }>`
  position: relative;
  min-width: 140px;
  height: 140px;
  font-size: 16px;
  padding: 88px 0 14px;
  border-radius: 20px;
  border: none;
  display: grid;
  background-color: #ededed;
  place-items: center;
  transition: transform 0.3s ease-in-out;
  ${({ active }) => css`
    transform: translateY(${active ? '-8px' : '0'});
  `}
  &::before {
    content: '';
    position: absolute;
    background-color: ${({ iconColor }) => iconColor};
    width: 60px;
    height: 60px;
    top: 16px;
    border-radius: 50%;
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

  const [isCurrentMaterialKey, toggleCurrentMaterialKey] = useState('foxing');

  return (
    <Wrapper>
      <WrapperCanvas>
        <Canvas flat>
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
              maxDistance={8}
              minDistance={3}
            />
          </>
          <ContactShadows
            position={[0, -0.75, 0]}
            scale={20}
            far={1}
            blur={0.8}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <Model position={[0, 0.9, 0]} rotation={[0, 0, 0.2]} />
        </Canvas>
      </WrapperCanvas>

      <WrapperColorPicker>
        <ToggleButtons>
          <a href="/my-aj1/gotem">ゴッテム</a>

          <button
            onClick={() => {
              localStorage.removeItem('material-state');
            }}
          >
            破棄
          </button>
        </ToggleButtons>

        <ToggleButtons>
          <button onClick={presetChangeHandler}>Chicago Preset</button>
        </ToggleButtons>

        <CustomArea>
          <ColorPicker
            color={material[isCurrentMaterialKey].color}
            presetColors={[]}
            onChange={(newColor: string) =>
              materialColorChangeHandler(isCurrentMaterialKey, newColor)
            }
          />

          <ToggleButtons>
            {materialArray.map((item, index) => (
              <ToggleButton
                key={index}
                onClick={() => toggleCurrentMaterialKey(item[0])}
                iconColor={item[1].color}
                active={isCurrentMaterialKey === item[0]}
              >
                {item[1].title}
              </ToggleButton>
            ))}
          </ToggleButtons>
        </CustomArea>
      </WrapperColorPicker>
    </Wrapper>
  );
};

export default Aj1Custom;
