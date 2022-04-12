import { TopicObject } from './index';

const array: TopicObject = {
  id: 14,
  title: 'JavaScript Array',
  slides: [
    {
      headers: {
        h1: 'JavaScript Arrays',
        h2: 'Array Overview',
      },
    },
    {
      headers: {
        h1: 'JavaScript Arrays',
        h2: 'Array Overview',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: '1. What is an array?',
            },
            {
              text: '2. Creating an array',
            },
            {
              text: `3. Array index and elements`,
            },
            {
              text: `  - Accessing an array element by index
  - Assigning or modifying an element by index
  - Number of elements in an array
  - Find a value in an array`,
            },
            {
              text: `4. Iterating through an array`,
            },
            {
              text: `  - With "for" loops`,
            },
          ],
        },
      ],
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'What is an array?',
      },
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'What is an array?',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              headers: {
                h4: 'An array is a collection of values',
              },
            },
            {
              headers: {
                h4: '...or a list.',
              },
            },
            {
              headers: {
                h4: '...of values.',
              },
            },
            {
              headers: {
                h4: 'They are a way for storing multiple values into a single variable',
              },
            },
            {
              headers: {
                h4: '...instead of creating multiple variables.',
              },
            },
          ],
        },
      ],
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'What is an array?',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Imagine these variables and their values',
          },
          codeSnippet: `let name1 = 'Vasil';
let name2 = 'Angel';
let name3 = 'Jasna';
let name4 = 'Bojana';`,
        },
        {
          headers: {
            h4: 'And to be able to keep them in a single variable',
          },
          codeSnippet: `let names = ['Vasil', 'Angel', 'Jasna', 'Bojana'];`,
        },
      ],
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'What is an array?',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              headers: {
                h4: 'Keeping values in separate variables',
              },
              codeSnippet: `let name1 = 'Vasil';
let name2 = 'Angel';
let name3 = 'Jasna';
let name4 = 'Bojana';`,
            },
            {
              headers: {
                h4: 'Addressing and accessing them',
              },
              codeSnippet: `console.log(name2); // Angel`,
            },
          ]
        },
        {
          innerSlides: [
            {
              headers: {
                h4: 'Keeping values in an array',
              },
              codeSnippet: `let names = ['Vasil', 'Angel', 'Jasna', 'Bojana'];`,
            },
            {
              headers: {
                h4: 'And address any of them just as easily, by their...',
              },
              codeSnippet: `console.log(names[1]); // Angel`,
            },
            {
              text: '...index number.',
            },
          ],
        },
      ],
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'How to create an array?',
      },
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'How to create an array?',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Just like any other variable',
          },
          codeSnippet: 'let names =...',
        },
        {
          headers: {
            h4: 'Open square brackets "["...',
            h5: 'To mark where the array begins',
          },
          codeSnippet: 'let names = ['
        },
        {
          headers: {
            h4: 'Values separated with commas...',
          },
          codeSnippet: "let names = ['Albulena', 'Donche'",
        },
        {
          headers: {
            h4: 'Close square brackets "]"',
            h5: 'To mark where the array ends',
          },
          codeSnippet: "let names = ['Albulena', 'Donche'];",
        },
      ],
    },
    {
      headers: {
        h2: 'Practice time',
        h4: "Let's practice creating arrays",
      },
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'Array index and array elements',
      },
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'Array index',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: 'When imagining an array think of it as a list of variables',
            },
            {
              text: "and it's a numbered list.",
            },
            {
              text: `And every value in it is kept under an order number`,
            },
            {
              text: 'Called "index"',
            },
            {
              headers: {
                h4: 'Important: Index starts with 0.'
              },
            },
            {
              codeSnippet: `let myFirstArray = ['Batman', 'Superman'];
// index 0: 'Batman', index 1: 'Superman'`,
            },
          ],
        },
      ],
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'Array index',
        h3: 'How to access a value in an array?',
      },
      innerSlides: [
        {
          headers: {
            h4: 'The traditional way',
            h5: 'array[index]',
          },
          codeSnippet: `let myFirstArray = ['Batman', 'Superman'];
console.log(myFirstArray[1]); // Superman`,
        },
        {
          headers: {
            h4: 'The new way',
            h5: 'array.at(index)'
          },
          codeSnippet: `let myFirstArray = ['Batman', 'Superman'];
console.log(myFirstArray.at(1)); // Superman`,
        },
      ],
    },
    {
      headers: {
        h2: 'Practice time',
        h4: "Let's practice accessing values in an array",
      },
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'Array index',
        h3: 'How to modify a value?',
      },
      innerSlides: [
        {
          headers: {
            h4: "It's easy if you know the index",
          },
          codeSnippet: `let myFirstArray = ['Batman', 'Superman'];
myFirstArray[1] = 'Robin';

console.log(myFirstArray); // Batman, Robin
console.log(myFirstArray[1]; // Robin)`,
        },
      ],
    },
    {
      headers: {
        h2: 'Practice time',
        h4: "Let's practice modifying an array value",
      },
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'Array length',
      },
    },
    {
      headers: {
        h1: 'JavaScript Array',
        h2: 'Array length',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: 'Does an array keep track of how many values it holds?',
            },
            {
              headers: {
                h4: 'Yes.',
              },
            },
            {
              codeSnippet: `myFirstArray.length`,
            },
            {
              codeSnippet: `console.log(myFirstArray); // Batman, Robin
console.log(myFirstArray.length); // 2`,
            },
          ],
        },
      ],
    },
  ],
};

export default array;