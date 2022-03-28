import { TopicObject } from './index';

const numbers: TopicObject = {
  id: 3,
  title: 'Number',
  group: 'Primitive Data Types',
  slides: [
    {
      headers: {
        h1: 'Data Types',
        h2: 'Primitive Data Types',
        h3: 'Number',
      },
    },
    {
      headers: {
        h2: 'Arithmetic operations with numeric variables',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Adding',
            h5: 'The + operator',
          },
          codeSnippet: `var someApples = 5;
var moreApples = 10;
var allApples = someApples + moreApples;

console.log(allApples); // 15`,
        },
        {
          headers: {
            h4: 'Subtracting',
            h5: 'The - operator',
          },
          codeSnippet: `var allApples = 15;
var someApples = 10;
var applesLeft = allApples - someApples;

console.log(applesLeft); // 5`,
        },
        {
          headers: {
            h4: 'Multiplying',
            h5: 'The * operator',
          },
          codeSnippet: `var roomWidth = 4;
var roomLength = 5;
var roomSquareSize = roomWidth * roomLength;

console.log(roomSquareSize); // 20`,
        },
        {
          headers: {
            h4: 'Dividing',
            h5: 'The / operator',
          },
          codeSnippet: `var allToys = 15;
var kids = 5;
var toysPerKid = allToys / kids;

console.log(toysPerKid); // 3`,
        },
      ],
    },
    {
      headers: {
        h2: 'Arithmetic operations with numeric variables',
        h3: 'Bonus',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Exponentiation',
            h5: 'The * operator',
          },
          innerSlides: [
            {
              codeSnippet: `var widthAndHeightInMeters = 4;
console.log(widthAndHeightInMeters ** 2, 'square meters'); // 16 square meters`,
            },
            {
              codeSnippet: `var cubeWidth = 2;
console.log(cubeWidth ** 3, 'cube meters'); // 8 cube meters`,
            },
          ],
        },
      ]
    },
    {
      headers: {
        h2: 'Arithmetic operations with numeric variables',
        h3: 'Bonus',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Modulus/remainder',
            h5: 'The % operator',
          },
          innerSlides: [
            {
              codeSnippet: `var allToys = 3;
var kids = 2;
var sufficitOfToys = allToys % kids;

console.log(sufficitOfToys); // 1`,
            },
          ],
        },
      ]
    },
    {
      headers: {
        h2: 'NaN',
        h3: '(Not a Number)',
        h4: 'The "non-value" type of numbers',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: 'NaN is the result from a mathematical operation that was unable to return a valid numeric result',
            },
            {
              headers: {
                h5: 'Math operation where the result is not a real number',
              },
              codeSnippet: 'Math.sqrt(-1); // NaN',
            },
          ]
        }
      ],
    },
    {
      headers: {
        h2: 'Exercise time',
      },
    },
    // {
    //   headers: {
    //     h2: 'Exercise time',
    //   },
    //   innerSlides: [
    //     {
    //       innerSlides: [
    //         {
    //           text: '1. Excercise text',
    //         },
    //         {
    //           headers: {
    //             h4: 'The solution',
    //           },
    //           codeSnippet: 'var vvv = "ddd";',
    //         },
    //       ],
    //     },
    //   ],
    // },
    {
      headers: {
        h1: 'Congratulations!',
        h3: 'You completed the course on',
        h2: '   ',
        h4: 'JavaScript Data Types • Primitive Data Types • Number',
      },
    },
  ],
};

export default numbers;