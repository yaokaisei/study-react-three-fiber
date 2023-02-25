import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useMaterial } from 'src/myAj1/globStates/materialState';
import { CHICAGO_PRESET } from 'src/myAj1/constant/materialPreset';
import { ColorButton } from 'src/myAj1/components/ColorButton';

const Wrapper = styled.div`
  padding-top: clamp(40px, 6.77vw, 64px);
  padding-bottom: clamp(40px, 6.77vw, 64px);
  width: min(100% - 2rem, 1200px);
  margin: 0 auto;
  color: #333;
`;

const H1 = styled.h1`
  font-size: 4rem;
`;

const MaterialButtons: React.FC = () => {
  const { materials, setMaterials, setMaterialColor, getMaterialColor } =
    useMaterial();

  return (
    <>
      {materials.map(({ name, color }, index) => (
        <ColorButton
          label={name}
          iconColor={color}
          onClick={() => setMaterialColor({ name: name, color: '#cccccc' })}
          key={index}
        />
      ))}
      <button onClick={() => setMaterials(CHICAGO_PRESET)}>
        Chicagoプリセット一括変更
      </button>
      <p>Foxingの色は {getMaterialColor('Foxing')}</p>
    </>
  );
};

const Top: React.FC = () => {
  return (
    <Wrapper>
      <H1>HELLO WORLD</H1>

      <ul>
        <li>
          <a href="/box-customizer">3D BOX Customizer</a>
        </li>
        <li>
          <a href="/my-aj1">My AJ1</a>
        </li>
      </ul>
      <h2>テスト</h2>
      <MaterialButtons />
    </Wrapper>
  );
};

export default Top;
