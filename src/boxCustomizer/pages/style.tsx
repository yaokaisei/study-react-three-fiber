import styled from '@emotion/styled';

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #272730 100%, #535375 50%);
`;

export const ModelWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Contents = styled.div`
  position: absolute;
  z-index: 1;
  gap: 8px;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  bottom: 0;
  width: 100%;
  padding: clamp(40px, 6.77vw, 64px);

  & h1 {
    font-weight: 900;
    font-size: clamp(4rem, 6.77vw, 5rem);
    margin: 0;
    color: #cd853f;
    line-height: 1;
  }
`;

export const InputLabel = styled.label`
  display: grid;
  gap: 8px;
  width: 100%;
  max-width: min(100% - 2rem, 400px);
  color: #fff;

  input {
    width: 100%;
  }
`;
