// types
import { SlideObject } from 'hooks/useSlides';

// data
import variables from './1-variables';
import boolean from './2-boolean';
import numbers from './3-';
import strings from './4-string';
import theUndefined from './5-undefined';
import theNull from './6-null';
import primitivesConversion from './7-primitivesConversion';
import conditionalsIf from './8-conditionalsIf';
import conditionalsIfElse from './9-conditionalsIfElse';
import conditionalsIfElseIf from './10-conditionalsIfElseIf';
import loopsFor from './11-loopsFor';
import functions from './12-function';

export interface TopicObject {
  id: number;
  isPlaceholder?: boolean;
  title: string;
  group?: string;
  slides: SlideObject[];
}

const slides: TopicObject[] = [
  variables,
  boolean,
  numbers,
  strings,
  theUndefined,
  theNull,
  primitivesConversion,
  conditionalsIf,
  conditionalsIfElse,
  conditionalsIfElseIf,
  loopsFor,
  functions,
];

export default slides;