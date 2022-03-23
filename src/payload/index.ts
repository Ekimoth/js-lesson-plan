// types
import { SlideObject } from 'hooks/useSlides';

const slides: SlideObject[] = [
  {
    headers: ['Data Types', 'Primitive Data Types', 'String'],
  },
  {
    headers: ['Declaring and assigning a string variable'],
    innerSlides: [
      {
        headers: ['Single quotes: \'\''],
        content: `var myName = 'Vladimir';`,
      },
      {
        headers: [,,'Double quotes: ""'],
        content: `var myName = "Vladimir";`,
      },
      {
        headers: [,,'Template literal: ``'],
        content: 'var myName = `Vladimir`;',
      },
    ],
  }
];

export default slides;