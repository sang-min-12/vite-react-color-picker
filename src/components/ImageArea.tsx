import { useAtomValue } from 'jotai';
import { wheelColor } from '../jotai/atoms/colorState';

const ImageArea = () => {
  const color = useAtomValue(wheelColor);

  return (
    <>
      <p 
        className="p-12 mt-4 text-xl font-bold"
        style={{ backgroundColor: `${color.toString("rgb")}`, color: `black` }}
      >
        Current color value: {color.toString('rgb')}
      </p>
    </>
  );
};

export default ImageArea;