import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';

type BoxProps = {
  position: [x: number, y: number, z: number];
  color: string;
  scale: number;
};

type BoxModelProps = {
  color: string;
  scale: number;
};

const Box: React.FC<BoxProps> = (props) => {
  // メッシュへのアクセス
  const mesh = useRef<Mesh>(null!);
  const [active, setActive] = useState(false);

  useFrame(() => {
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh
      position={props.position}
      ref={mesh}
      scale={active ? 1 : props.scale}
      onClick={() => setActive(!active)}
    >
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color={active ? '#cd853f' : props.color}
        roughness={0.5}
      />
    </mesh>
  );
};

const BoxModel: React.FC<BoxModelProps> = (props) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[0, 1, 0]} color={props.color} scale={props.scale} />
      <OrbitControls
        autoRotate
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Stars radius={500} depth={50} count={1000} factor={10} />
    </Canvas>
  );
};

export default BoxModel;
