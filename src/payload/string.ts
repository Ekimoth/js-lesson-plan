const strings = [
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
          h4: 'Is the same as: The === operator',
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
          h4: 'Is different from: The !== operator',
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
          h4: "The - operator can't be used with strings",
        },
        codeSnippet: "console.log('James Bond' - 'Bond'); // NaN",
      },
      {
        headers: {
          h4: 'Bonus: Removing part of a string',
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
  {
    headers: {
      h2: 'Exercise time',
    },
    innerSlides: [
      {
        innerSlides: [
          {
            text: '1. Excercise text',
          },
          {
            headers: {
              h4: 'The solution',
            },
            codeSnippet: 'var vvv = "ddd";',
          },
        ],
      },
    ]
  }
];

export default strings;
