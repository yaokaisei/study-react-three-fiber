import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

type BoxModelProps = {
  // color: string;
  // scale: number;
  children: React.ReactNode;
};

export const Stage: React.FC<BoxModelProps> = ({ children }) => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} />
      <OrbitControls
        autoRotate
        enablePan={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 3}
        minPolarAngle={Math.PI / 3}
      />
      <Stars radius={500} depth={50} count={1000} factor={10} />
      {children}
    </Canvas>
  );
};
