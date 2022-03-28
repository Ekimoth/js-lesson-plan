import { TopicObject } from './index';

const theUndefined: TopicObject = {
  id: 5,
  title: 'Undefined',
  group: 'Primitive Data Types',
  slides: [
    {
      headers: {
        h1: 'Data Types',
        h2: 'Primitive Data Types',
        h3: 'undefined',
      },
      innerSlides: [
        {
          innerSlides: [
            {},
            {
              text: 'The primitive "non-type" type',
            },
            {
              text: '...or value...',
            },
            {
              text: '...or whatever.',
            },
            {
              text: 'Or both! An "undefined" value of the "undefined" type.',
            },
          ],
        },
      ]
    },
    {
      headers: {
        h2: 'undefined',
        h3: 'It indicates absence of value of any type',
      },
      innerSlides: [
        {
          innerSlides: [
            {},
            {
              headers: {
                h4: 'The typeof keyword',
                h5: "One of the ways to check a variable's data type",
              },
            },
            {
              codeSnippet: `var uselessVar;
console.log(typeof uselessVar); // undefined`,
            },
            {
              headers: {
                h5: '...Or safely check if there is a variable with that name at all',
              },
              codeSnippet: 'console.log(typeof notSureIfVarWithThisNameExists); // undefined',
            },
            {
              headers: {
                h5: 'typeof returns a string',
              },
              codeSnippet: "console.log(typeof notSureIfVarWithThisNameExists === 'undefined'); // true",
            },
          ],
        },
      ],
    },
  ],
};

export default theUndefined;

