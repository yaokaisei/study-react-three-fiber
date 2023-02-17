import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type MeshBoxProps = {
  position: [x: number, y: number, z: number];
  color: string;
  scale: number;
};

export const MeshBox: React.FC<MeshBoxProps> = ({ position, scale, color }) => {
  // NOTE: メッシュへのアクセス
  const mesh = useRef<Mesh>(null!);

  // NOTE: クリックアクティブのステート
  const [active, setActive] = useState(false);

  // NOTE: モデルアニメーション
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 10;
    mesh.current.rotation.x = Math.cos(t / 4) / 8;
    mesh.current.rotation.y = Math.sin(t / 4) / 8;
    mesh.current.position.y = (4 + Math.sin(t / 1.5)) / 4;
  });

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active ? 1 : scale}
      onClick={() => setActive(!active)}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={active ? '#cd853f' : color}
        roughness={0.5}
      />
    </mesh>
  );
};
