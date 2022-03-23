// types
import { SlideObject } from 'components/Slide/useSlide';

const slides: SlideObject[] = [
  {
    backgroundColor: 'red',
    innerSlides: [
      {
        backgroundColor: 'yellow',
      },
      {
        backgroundColor: 'green',
      },
      {
        backgroundColor: 'blue',
      },
    ],
  },
  {
    backgroundColor: 'yellow',
  },
  {
    backgroundColor: 'green',
  },
  {
    backgroundColor: 'blue',
  },
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