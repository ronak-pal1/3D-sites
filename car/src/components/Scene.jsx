import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  TransformControls,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { useRef } from "react";
import { DirectionalLightHelper } from "three";

const MoveableLights = () => {
  const lightRef = useRef();

  return (
    <TransformControls
      object={lightRef}
      onObjectChange={() => {
        console.log("New position:", lightRef.current.position.toArray());
      }}
    ></TransformControls>
  );
};

const Scene = () => {
  const { scene } = useGLTF("/models/car.glb");

  return (
    <div className="w-full h-full absolute top-0 left-0 z-40">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        style={{ height: "100vh", width: "100vw" }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={1} />

        <directionalLight
          position={[
            0.8194705728740226, 0.7999019019161718, 0.4541680284650951,
          ]}
          color={"#fff"}
          intensity={10}
        />
        <directionalLight
          position={[3.491706702510397, 0.1206969541350309, 0.9999999999995772]}
          color={"#f5f5f5"}
          intensity={20}
        />

        <primitive
          object={scene}
          position={[3, -0.5, 0]}
          rotation={[0, -Math.PI / 3, -Math.PI * 0.04]}
          scale={2.5}
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          minPolarAngle={0} // prevent camera from going below model
          maxPolarAngle={Math.PI / 2} // limit tilt (0 to 90°)
          minAzimuthAngle={-Math.PI / 4} // limit left rsotation (-45°)
          maxAzimuthAngle={Math.PI / 4} // limit right rotation (+45°)
        />
      </Canvas>
    </div>
  );
};

export default Scene;
