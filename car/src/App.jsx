import { Canvas } from "@react-three/fiber";
import Scene from "./components/Scene";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="w-full h-screen">
        <Scene />

        <div className="w-full h-full absolute inset-0 z-30 flex items-center px-7">
          <h2 className="text-9xl text-neutral-800 w-1/2">
            Cars that catch your eyes
          </h2>
        </div>
      </div>

      <div className="w-full h-screen"></div>
    </>
  );
};

export default App;
