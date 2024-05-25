import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function Model(props) {
  const group = useRef();
  const { scene } = useGLTF('/models/loula.glb'); // Chemin vers votre nouveau fichier .glb

  useFrame((state, delta) => {
    group.current.rotation.y += 0.01;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} scale={[2, 2, 2]} position={[0, -1, 0]} />
    </group>
  );
}

useGLTF.preload('/models/loula.glb');
