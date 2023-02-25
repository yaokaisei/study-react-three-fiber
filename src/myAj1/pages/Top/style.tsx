import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(180deg, #232323, #121212);
`;

export const WrapperCanvas = styled.div`
  height: 100vh;
`;

export const CustomArea = styled.div`
  display: grid;
  gap: 16px;
  align-items: end;
  grid-template-columns: 30% 70%;
`;

export const WrapperColorPicker = styled.div`
  position: fixed;
  display: grid;
  gap: 20px;
  bottom: 0;
  width: 100%;
  padding: 16px;
`;

export const ToggleButtons = styled.div`
  display: flex;
  gap: 12px;
  white-space: nowrap;
  overflow-y: auto;
  padding: 10px 0;
`;
