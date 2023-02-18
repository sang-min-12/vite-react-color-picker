import { atom } from 'jotai';
import {parseColor} from '@react-stately/color';

export const wheelColor = atom(parseColor('hsl(0, 100%, 50%)'));