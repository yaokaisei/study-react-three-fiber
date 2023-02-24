import { useEffect } from 'react';
import { atom, useRecoilState } from 'recoil';
import { DEFAULT_PRESET } from '../constant/materialPreset';

export type MaterialName =
  | 'Foxing'
  | 'Heal Overlay'
  | 'Heal'
  | 'Quarter'
  | 'Sole'
  | 'Quarter Overlay'
  | 'Tip'
  | 'Vamp'
  | 'Label'
  | 'Logo'
  | 'Eyestay'
  | 'Swoosh'
  | 'Midsole'
  | 'Laces'
  | 'Tongue';

export interface Material {
  name: MaterialName;
  color: string;
}

const materialState = atom<Material[]>({
  key: 'materialState',
  default: DEFAULT_PRESET,
});

export const useMaterial = (array?: Material[]) => {
  const [materials, setMaterials] = useRecoilState(materialState);

  // NOTE: 引数でセットされたマテリアル配列で初期化
  useEffect(() => {
    if (array) {
      setMaterials(array);
    }
  }, [array, setMaterials]);

  const setMaterialColor = ({ name, color }: Material) => {
    // NOTE: setMaterialsを使用して引数で指定したnameとcolorでmaterialsを上書きする
    setMaterials((prevMaterials) => {
      // NOTE: 引数で指定されたnameと一致する要素を更新する
      const updatedMaterials = prevMaterials.map((material) => {
        if (material.name === name) {
          return { name, color };
        }
        return material;
      });
      return updatedMaterials;
    });
  };

  const getMaterialColor = (name: MaterialName) => {
    console.log(name, 'TODO: 引数からステートをフィルタリングする');
  };

  return {
    materials,
    setMaterials,
    /** 指定したMaterialNameと同じオブジェクトに属しているカラーを変更する */
    setMaterialColor,
    /** 指定したMaterialNameと同じオブジェクトに属しているカラーを取得する */
    getMaterialColor,
  };
};
