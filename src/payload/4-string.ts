import { TopicObject } from './index';

const strings: TopicObject = {
  id: 4,
  title: 'String',
  group: 'Primitive Data Types',
  slides: [
    {
      headers: {
        h1: 'Data Types',
        h2: 'Primitive Data Types',
        h3: 'String',
      },
    },
    {
      headers: {
        h3: 'Declaring and assigning a string variable',
      },
      innerSlides: [
        {
          headers: {
            h4: "Single quote: ''",
          },
          codeSnippet: `var myName = 'Louie';`,
        },
        {
          headers: {
            h4: 'Double quotes: ""',
          },
          codeSnippet: `var myName = "Louie";`,
        },
        {
          headers: {
            h4: 'Template strings: ``',
          },
          codeSnippet: 'var myName = `Louie`;',
        },
        {
          headers: {
            h4: 'Multiline strings',
            h5: 'Only with template strings',
          },
          codeSnippet: `var story = \`
  This is
  a multiline
  string
\`;`,
        },
      ],
    },
    {
      headers: {
        h3: 'Comparing string variables'
      },
      innerSlides: [
        {
          headers: {
            h4: 'Is equal to',
            h5: 'The === operator',
          },
          innerSlides: [
            {
              codeSnippet: `var savedPassword = 'abcde12345';
var enteredPassword = 'abcde';

console.log(savedPassword === enteredPassword); // false
// A user entered an incorrect password
  `,
            },
            {
              codeSnippet: `var savedPassword = 'abcde12345';
var enteredPassword = 'abcde12345';

console.log(savedPassword === enteredPassword); // true
// The password is correct
  `,
            },
          ],
        },
      ],
    },
    {
      headers: {
        h3: 'Comparing string variables'
      },
      innerSlides: [
        {
          headers: {
            h4: 'Is not equal to',
            h5: 'The !== operator',
          },
          innerSlides: [
            {
              codeSnippet: `var savedPassword = 'abcde12345';
var enteredPassword = 'abcde';

console.log(savedPassword !== enteredPassword); // true
// The password is still incorrect, we just inverted the result
  `,
            },
            {
              codeSnippet: `var savedPassword = 'abcde12345';
var enteredPassword = 'abcde12345';

console.log(savedPassword !== enteredPassword); // false
// The password is still correct, we just inverted the result
      `,
            },
          ],
        },
      ],
    },
    {
      headers: {
        h3: 'Concatenating strings',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              headers: {
                h4: 'With the + operator',
              },
              codeSnippet: `var name = 'James';
var surname = 'Bond';
var fullName = name + ' ' + surname;

console.log(fullName); // James Bond
  `,
            },
            {
              headers: {
                h4: 'Inline',
              },
              codeSnippet: "console.log(name + ' ' + surname); // James Bond",
            },
            {
              headers: {
                h4: 'With template strings',
              },
              codeSnippet: 'console.log(`${name} ${surname}`); // James Bond',
            },
          ],
        },
      ],
    },
    {
      headers: {
        h3: '"Subtracting" strings',
      },
      innerSlides: [
        {
          headers: {
            h3: 'Remember!',
            h4: "The - operator can't be used with strings",
          },
          codeSnippet: "console.log('James Bond' - 'Bond'); // NaN",
        },
      ],
    },
    {
      headers: {
        h3: '"Subtracting" strings',
        h4: '',
        h2: 'Bonus',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Removing part of a string',
          },
          codeSnippet: `var fullName = 'James Bond';
console.log(fullName.replace(' Bond', ''); // James`,
        },
        {
          headers: {
            h4: 'Replacing a string with another',
          },
          codeSnippet: `var fullName = 'James Bond';
console.log(fullName.replace('Bond', 'Hetfield'); // James Hetfield`,
        },
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
    //   ]
    // },
    {
      headers: {
        h1: 'Congratulations!',
        h3: 'You completed the course on',
        h2: '   ',
        h4: 'JavaScript Data Types • Primitive Data Types • String',
      },
    },
  ],
};

export default strings;
