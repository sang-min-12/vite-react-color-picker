import { useAtomValue } from 'jotai';
import { useRef } from 'react';
import { wheelColor } from '../jotai/atoms/colorState';
import Heading from './Heading';
import {Canvas, useFrame, useThree} from '@react-three/fiber';
import {useAspect, useTexture} from '@react-three/drei';
import CarImage from '../assets/car_image.jpg';
import SmokeImage from '../assets/smoke_image.png';


const ImageArea = () => {
  const color = useAtomValue(wheelColor);
  return (
    <div className="flex flex-col">
      <p 
        className="p-12 mt-4 text-xl font-bold text-center"
        style={{ backgroundColor: `${color.toString("rgb")}`, color: `black` }}
      >
        {color.toString('hex')}
      </p> 
      <div className="mt-6">
        <Heading level="h3" className="mb-4 text-center">
          Canvas Imgae
        </Heading>
        <div className="w-[300px] h-[500px]">
          <Canvas frameloop="demand">
            <color attach={"background"} args={["#000"]} />
            <CanvasImage color={color.toString("hex")} />
          </Canvas>
        </div>
      </div>
    </div>
  );
};

const CanvasImage = ({ color }: { color: string }) => {
  const state = useThree();
  const carRef = useRef<any>(null);
  const smokeRef = useRef<any>(null);
  const carTexture = useTexture(CarImage);
  const smokeTexture = useTexture(SmokeImage);

  const carImage = carTexture.image as HTMLImageElement;
  const carScale = useAspect(
    carImage.naturalWidth,
    carImage.naturalHeight,
    1
  );

  const smokeImage = smokeTexture.image as HTMLImageElement;
  const smokeScale = useAspect(
    state.size.width / smokeImage.naturalWidth,
    state.size.height / smokeImage.naturalHeight,
    1
  );
  const smokeScaleMap = {
    x: smokeScale[0],
    y: smokeScale[0] * (smokeImage.naturalHeight / smokeImage.naturalWidth),
  }

  useFrame(() => {
    smokeRef.current.color.set(color);
  })

  return (
    <>
      <mesh scale={carScale}>
        <planeGeometry />
        <meshBasicMaterial ref={carRef} map={carTexture} />
      </mesh>
      <mesh scale={[smokeScaleMap.x, smokeScaleMap.y, 1]}>
        <mesh scale={1} position={[0, -1, 0]}>
          <planeGeometry />
          <meshBasicMaterial ref={smokeRef}  transparent={true} map={smokeTexture} />
        </mesh>
      </mesh>
    </>
  )
}

export default ImageArea;