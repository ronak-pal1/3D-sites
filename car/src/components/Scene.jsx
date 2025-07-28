import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  TransformControls,
  useGLTF,
  useHelper,
} from "@react-three/drei";
import { useEffect, useRef } from "react";
import { DirectionalLightHelper } from "three";
import gsap from "gsap";

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
  const modelRef = useRef();

  useEffect(() => {
    console.log(innerHeight + 300);
    const handleScroll = () => {
      const scrollY = window.scrollY;
      console.log(scrollY);
      if (scrollY > innerHeight / 2) {
        gsap.to(modelRef.current.position, {
          x: 0,
          y: -0.5,
          z: 0,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(modelRef.current.rotation, {
          x: 0.3,
          y: Math.PI / 2,
          z: Math.PI * 0,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(modelRef.current.scale, {
          x: 2.5,
          y: 2.5,
          z: 2.5,
          duration: 1,
          ease: "power2.out",
        });
      }

      if(scrollY < innerHeight/3)
      {
         gsap.to(modelRef.current.position, {
          x: 3,
          y: -0.5,
          z: 0,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(modelRef.current.rotation, {
          x: 0,
          y: -Math.PI / 3,
          z: -Math.PI * 0.04,
          duration: 1,
          ease: "power2.out",
        });

        gsap.to(modelRef.current.scale, {
          x: 2.5,
          y: 2.5,
          z: 2.5,
          duration: 1,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-40">
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
          color={"#95f462"}
          intensity={40}
        />

        <pointLight position={[0.8194705728740226, 0.7999019019161718, 0.4541680284650951,]} color={"#2479e9"} intensity={40}/>

        <primitive
          ref={modelRef}
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
