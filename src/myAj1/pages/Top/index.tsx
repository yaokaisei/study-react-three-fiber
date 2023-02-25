import React, { useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Loader } from '@react-three/drei';

import { useMaterialState } from 'src/myAj1/globStates/materialColorState';
import { Model } from 'src/myAj1/components/Aj1Model';
import ColorPicker from 'src/myAj1/components/ColorPicker';
import { Stage } from 'src/myAj1/components/Stage';
import {
  CustomArea,
  ToggleButton,
  ToggleButtons,
  Wrapper,
  WrapperCanvas,
  WrapperColorPicker,
} from './style';

export const TopMyAj1: React.FC = () => {
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
        <Canvas flat dpr={window.devicePixelRatio}>
          {/* カメラ（PerspectiveCameraは初期状態のカメラ位置、OrbitControlsでホイール操作を有効化） */}
          <PerspectiveCamera makeDefault position={[-10, Math.PI / 5, 20]} />
          <OrbitControls
            makeDefault
            enablePan={false}
            enableZoom
            maxPolarAngle={Math.PI / 1}
            minPolarAngle={Math.PI / 6}
            maxDistance={12}
            minDistance={5}
          />
          <Stage position={[0, 0.9, 0]} intensity={0}>
            <Model rotation={[0, 0, 0.2]} />
          </Stage>
        </Canvas>
        <Loader />
      </WrapperCanvas>

      <WrapperColorPicker>
        <ToggleButtons>
          <a href="/my-aj1/gotem">シェア GOTE’M</a>

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
