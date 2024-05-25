import React from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useSpring, a } from '@react-spring/three';

const AnimatedModel = () => {
  const gltf = useLoader(GLTFLoader, '/models/loula.glb');

  const { rotation } = useSpring({
    loop: true,
    from: { rotation: [0, 0, 0] },
    to: { rotation: [0, Math.PI * 2, 0] },
    config: { duration: 5000 },
  });

  return <a.primitive object={gltf.scene} rotation={rotation} />;
};

export default AnimatedModel;
