import React, { useEffect, useState } from 'react';

import { Center, useBounds, Bounds } from '@react-three/drei';
import type {
  ContactShadowsProps,
  CenterProps,
  AccumulativeShadowsProps,
  RandomizedLightProps,
} from '@react-three/drei';

type StageShadows = Partial<AccumulativeShadowsProps> &
  Partial<RandomizedLightProps> &
  Partial<ContactShadowsProps> & {
    type: 'contact' | 'accumulative';
    /** Shadow plane offset, default: 0 */
    offset?: number;
    /** Shadow bias, default: -0.0001 */
    bias?: number;
    /** Shadow normal bias, default: 0 */
    normalBias?: number;
    /** Shadow map size, default: 1024 */
    size?: number;
  };

type StageProps = {
  /** Controls the ground shadows, default: "contact" */
  shadows?: boolean | 'contact' | 'accumulative' | StageShadows;
  /** Optionally wraps and thereby centers the models using <Bounds>, can also be a margin, default: true */
  adjustCamera?: boolean | number;
  /** The lighting intensity, default: 0.5 */
  intensity?: number;
  /** To adjust centering, default: undefined */
  center?: Partial<CenterProps>;
};

const Refit = ({
  radius,
  adjustCamera,
}: {
  radius: number;
  adjustCamera: number | boolean;
}) => {
  const api = useBounds();
  useEffect(() => {
    if (adjustCamera) api.refresh().clip().fit();
  }, [radius, adjustCamera]);
  return null;
};

export const Stage = ({
  children,
  center,
  adjustCamera = true,
  intensity = 0.5,
  shadows = 'contact',
  ...props
}: JSX.IntrinsicElements['group'] & StageProps) => {
  const [{ radius, height }, set] = useState({
    radius: 0,
    width: 0,
    height: 100,
    depth: 0,
  });

  return (
    <>
      <directionalLight intensity={0.5} />
      <ambientLight intensity={0.2} />

      <Bounds fit={!!adjustCamera} margin={1} observe {...props}>
        <Refit radius={radius} adjustCamera={adjustCamera} />
        <Center
          {...center}
          onCentered={(props) => {
            const { width, height, depth, boundingSphere } = props;
            set({ radius: boundingSphere.radius, width, height, depth });
            if (center?.onCentered) center.onCentered(props);
          }}
        >
          {children}
        </Center>
      </Bounds>
    </>
  );
};
