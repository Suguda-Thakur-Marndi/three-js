import React from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";
import mat2TexturePath from "../matcap/mat-2.png";

const DogModel = () => {
  const model = useGLTF("/models/dog.drc.glb");
  const matcapTexture = useTexture(mat2TexturePath);

  useThree(({ camera, gl }) => {
    camera.position.set(0, 0, 0.55);
    gl.toneMapping = THREE.ReinhardToneMapping;
    gl.outputColorSpace = THREE.SRGBColorSpace;
  });

  React.useEffect(() => {
    if (!matcapTexture) return;

    matcapTexture.flipY = false;
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    const material = new THREE.MeshMatcapMaterial({
      color: 0xffffff,
      matcap: matcapTexture,
    });

    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.material = material;
      }
    });

    return () => material.dispose();
  }, [model.scene, matcapTexture]);

  return (
    <>
      <primitive object={model.scene} position={[0.21, -0.50, -0.5]} rotation={[0, Math.PI / 4.5, 0]} />
      <directionalLight position={[0, 5, 5]} color="white" intensity={10} />
      <OrbitControls />
    </>
  );
};

const Dog = () => {
  return (
    <Canvas style={{ width: "100vw", height: "100vh" }} camera={{ position: [0, 0, 0.55], fov: 45 }}>
      <DogModel />
    </Canvas>
  );
};

export default Dog;

useGLTF.preload("/models/dog.drc.glb");
