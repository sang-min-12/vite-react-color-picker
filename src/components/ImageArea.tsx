import { useAtomValue } from 'jotai';
import { useRef } from 'react';
import { wheelColor } from '../jotai/atoms/colorState';
import Heading from './Heading';
import {Canvas, useFrame} from '@react-three/fiber';
import {Image} from '@react-three/drei';
import CarImage from '../assets/car_image.jpg';
import SmokeImage from '../assets/smoke_image.png';


const ImageArea = () => {
  const color = useAtomValue(wheelColor);
  return (
    <div className="flex flex-col">
      <p 
        className="p-12 mt-4 text-xl font-bold"
        style={{ backgroundColor: `${color.toString("rgb")}`, color: `black` }}
      >
        {color.toString('hex')}
      </p> 
      <div className="mt-6">
        <Heading level="h3" className="mb-4 text-center">
          Canvas Imgae
        </Heading>
        <Canvas>
          <color attach={"background"} args={["#000"]} />
          <CanvasImage color={color.toString("hex")} />
        </Canvas>
      </div>
    </div>
  );
};

const CanvasImage = ({ color }: { color: string }) => {
  const carRef = useRef<any>(null);
  const smokeRef = useRef<any>(null);

  useFrame(() => {
    smokeRef.current.material.color.set(color);
  })

  return (
    <>
      <mesh scale={8}>
        <Image ref={carRef} position={[0, 0, 0]} url={CarImage} />
        <Image ref={smokeRef} transparent={true} position={[0, 0, 0]} url={SmokeImage} />
      </mesh>
    </>
  )
}

export default ImageArea;