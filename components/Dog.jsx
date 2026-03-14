import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const DogModel = () => {
  const model = useGLTF("/models/dog.drc.glb");

  const textures = useTexture({
    normalMap: "/dog_normals.jpg",
  });

  React.useEffect(() => {
    if (!textures.normalMap) return;

    textures.normalMap.flipY = false;
    textures.normalMap.needsUpdate = true;

    const material = new THREE.MeshStandardMaterial({
      normalMap: textures.normalMap,
      color: 0xff0000,
    });

    model.scene.traverse((child) => {
      if (child.isMesh && typeof child.name === "string" && child.name.includes("DOG")) {
        child.material = material;
      }
    });
  }, [model.scene, textures.normalMap]);

  return (
    <>
      <primitive object={model.scene} position={[0.18, -0.65, 0]} rotation={[0, Math.PI / 6, 0]} />
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