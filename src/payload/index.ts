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
        headers: ['String with single quotes'],
      },
      {
        headers: ['String with double quotes'],
      },
      {
        headers: ['String with template literal'],
      },
    ],
  }
];

// const slides: SlideObject[] = [
//   // {
//   //   headers: ['Variables', 'Variables', 'Variables', 'Variables', 'Variables', 'Variables'],
//   // },
//   {
//     slides: [
//       {
//         headers: ['Declaring a variable'],
//         content: 'red',
//       },
//       {
//         headers: ['Declaring multiple variables'],
//         content: 'green',
//       },
//       {
//         slides: [
//           {
//             info: 'Long way',
//             content: 'yellow',
//           },
//           {
//             info: 'Short way',
//             content: 'purple',
//           }
//         ],
//       }
//     ]
//   },
//   {
//     content: 'brow',
//   },
//   {
//     content: 'skyblue',
//   }
// ];

export default slides;