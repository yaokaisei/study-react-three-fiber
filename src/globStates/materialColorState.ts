import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';

/** AJ1マテリアルパーツ */
type MaterialNameType =
  | 'foxing'
  | 'healOverlay'
  | 'heal'
  | 'quarter'
  | 'sole'
  | 'quarterOverlay'
  | 'tip'
  | 'vamp'
  | 'label'
  | 'logo'
  | 'eyestay'
  | 'swoosh'
  | 'midsole'
  | 'laces'
  | 'tongue';

// TODO: 16真数で型ガードできるようにする
/** AJ1マテリアルカラーパレット */
type MaterialState = {
  [key in MaterialNameType]?: {
    title: string;
    color: string;
  };
};

const materialRecoilState = atom<MaterialState>({
  key: 'materialColorState',
  default: {
    foxing: {
      title: 'Foxing',
      color: '#ffffff',
    },
    healOverlay: {
      title: 'Heal Overlay',
      color: '#ffffff',
    },
    heal: {
      title: 'Heal',
      color: '#ffffff',
    },
    quarter: {
      title: 'Quarter',
      color: '#ffffff',
    },
    sole: {
      title: 'Sole',
      color: '#ffffff',
    },
    quarterOverlay: {
      title: 'Quarter Overlay',
      color: '#ffffff',
    },
    tip: {
      title: 'Tip',
      color: '#ffffff',
    },
    vamp: {
      title: 'Vamp',
      color: '#ffffff',
    },
    label: {
      title: 'Label',
      color: '#ffffff',
    },
    logo: {
      title: 'Logo',
      color: '#ffffff',
    },
    eyestay: {
      title: 'Eyestay',
      color: '#ffffff',
    },
    swoosh: {
      title: 'Swoosh',
      color: '#ffffff',
    },
    midsole: {
      title: 'Midsole',
      color: '#ffffff',
    },
    laces: {
      title: 'Laces',
      color: '#ffffff',
    },
    tongue: {
      title: 'Tongue',
      color: '#ffffff',
    },
  },
});

// TODO：抽出したstateでも更新できるようにする。現状は読み取りだけしか対応していない
export const materialKeySelector = (key: MaterialNameType) =>
  selector({
    key: 'materialKeySelector',
    get: ({ get }) => get(materialRecoilState)[key],

    // set: ({ set }, newValue) => {
    //   set(materialRecoilState, newValue);
    // },
  });

export const useMaterialColorValue = () => {
  return useRecoilValue(materialRecoilState);
};

export const useMaterialState = () => {
  const [material, setMaterial] = useRecoilState(materialRecoilState);

  // console.log(useRecoilValue(materialKeySelector('eyestay')));

  return {
    material: material,
    setMaterial: setMaterial,
  };
};
