import { atom, useRecoilState } from 'recoil';

const screenshotDataUrlState = atom({
  key: 'screenshotDataUrl',
  default: '',
});

export const useUrl = () => {
  const [url, setUrl] = useRecoilState(screenshotDataUrlState);

  return {
    state: url,
    set: setUrl,
  };
};
