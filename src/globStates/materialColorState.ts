import { atom, useRecoilState, useRecoilValue } from 'recoil';

/** AJ1マテリアルパーツ */
export type MaterialNameType =
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
export type MaterialState = {
  [key in MaterialNameType | string]: {
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

export const useMaterialColorValue = () => {
  return useRecoilValue(materialRecoilState);
};

export const useMaterialState = () => {
  const [material, setMaterial] = useRecoilState(materialRecoilState);

  return {
    material: material,
    setMaterial: setMaterial,
  };
};
