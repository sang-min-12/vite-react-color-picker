import { useAtom } from 'jotai';
import { wheelColor } from '../jotai/atoms/colorState';
import ColorWheel from "./ColorWheel";

const ColorPicker = () => {
  const [color, setColor] = useAtom(wheelColor);
  return (
    <div 
      className="flex flex-col items-center"
    >
      <ColorWheel value={color} onChange={setColor} />
    </div>
  );
};

export default ColorPicker;