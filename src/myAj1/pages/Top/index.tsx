import React, { useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Loader } from '@react-three/drei';

import { MaterialName, useMaterial } from 'src/myAj1/globStates/materialState';
import {
  CHICAGO_PRESET,
  DEFAULT_PRESET,
} from 'src/myAj1/constant/materialPreset';
import { Model, ColorPicker, Stage, ColorButton } from 'src/myAj1/components';
import {
  CustomArea,
  ToggleButtons,
  Wrapper,
  WrapperCanvas,
  WrapperColorPicker,
} from './style';

export const TopMyAj1: React.FC = () => {
  const { materials, setMaterials, setMaterialColor, getMaterialColor } =
    useMaterial();
  const [isCurrentMaterialKey, toggleCurrentMaterialKey] =
    useState<MaterialName>('Foxing');

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
              setMaterials(DEFAULT_PRESET);
              setTimeout(() => {
                localStorage.removeItem('material-state');
              }, 0);
            }}
          >
            デフォルトに戻す
          </button>
        </ToggleButtons>

        <ToggleButtons>
          <button onClick={() => setMaterials(CHICAGO_PRESET)}>
            Chicago Preset
          </button>
        </ToggleButtons>

        <CustomArea>
          <ColorPicker
            color={getMaterialColor(isCurrentMaterialKey)}
            presetColors={[]}
            onChange={(newColor: string) =>
              setMaterialColor({ name: isCurrentMaterialKey, color: newColor })
            }
          />

          <ToggleButtons>
            {materials.map(({ name, color }, index) => (
              <ColorButton
                key={index}
                label={name}
                onClick={() => toggleCurrentMaterialKey(name)}
                iconColor={color}
                active={isCurrentMaterialKey === name}
              />
            ))}
          </ToggleButtons>
        </CustomArea>
      </WrapperColorPicker>
    </Wrapper>
  );
};
