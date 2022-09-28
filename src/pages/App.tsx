import React from 'react';
import styled from '@emotion/styled';

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

const App: React.FC = () => {
  return (
    <Wrapper>
      <H1>HELLO WORLD</H1>

      <ul>
        <li>
          <a href="/box-customizer">3D BOX Customizer</a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default App;
