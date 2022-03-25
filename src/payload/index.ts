// types
import { SlideObject } from 'hooks/useSlides';

// data
import numbers from './numbers';
import strings from './string';
import theUndefined from './undefined';
import theNull from './null';

export interface TopicObject {
  id: number;
  title: string;
  group?: string;
  slides: SlideObject[];
}

const slides: TopicObject[] = [
  numbers,
  strings,
  theUndefined,
  theNull,
];

export default slides;