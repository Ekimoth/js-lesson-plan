// types
import { SlideObject } from 'hooks/useSlides';

// data
import variables from './variables';
import boolean from './boolean';
import numbers from './numbers';
import strings from './string';
import theUndefined from './undefined';
import theNull from './null';
import primitivesConversion from './primitivesConversion';
import conditionalsIf from './conditionalsIf';
import conditionalsIfElse from './conditionalsIfElse';
import conditionalsIfElseIf from './conditionalsIfElseIf';
import loopsFor from './loopsFor';
import functions from './function';

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