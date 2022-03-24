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
];

export default strings;
