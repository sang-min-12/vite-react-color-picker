import { useAtom } from 'jotai';
import { wheelColor } from '../jotai/atoms/colorState';
import ColorWheel from "./ColorWheel";
import {useEffect, useRef, useState} from "react";
import {parseColor} from "@react-stately/color";

const ColorPicker = () => {
  const [color, setColor] = useAtom(wheelColor);
  const num = useRef<number>(0);

  useEffect(() => {
    const keypressHandler = (e: KeyboardEvent) => {
      if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
      if (e.key === "ArrowUp") {
        num.current = num.current >= 360 ? 0 : ++num.current;
      } else if (e.key === "ArrowDown") {
        num.current = num.current <= 0 ? 360 : --num.current;
      }
      setColor(parseColor(`hsl(${num.current}, 100%, 50%)`));
    }

    window.addEventListener("keydown", keypressHandler);

    return () => {
      window.removeEventListener("keydown", keypressHandler);
    };
  }, []);

  return (
    <div 
      className="flex flex-col items-center"
    >
      <ColorWheel value={color} onChange={setColor} />
    </div>
  );
};

export default ColorPicker;