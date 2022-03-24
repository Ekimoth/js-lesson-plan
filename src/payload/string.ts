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
  This
  is
  a
  multiline
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
  {
    headers: {
      h3: 'Comparing string variables'
    },
    innerSlides: [
      {
        headers: {
          h4: 'Is different from: The !== operator',
        },
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
];

export default strings;
