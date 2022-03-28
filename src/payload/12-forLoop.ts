import { TopicObject } from './index';

const forLoop: TopicObject = {
  id: 12,
  title: 'The "for" loop',
  group: 'JavaScript Loops',
  slides: [
    {
      headers: {
        h1: 'The "for" loop',
      },
      innerSlides: [
        {
          text: 'How it looks in code',
          codeSnippet: `for ({starting value}, {ending value}; {increment or decrement value}) {
  // code that will run multiple times
}`,
        },
      ],
    },
    {
      headers: {
        h1: 'The "for" loop',
        h2: 'Example',
      },
      innerSlides: [
        {
          headers: {
            h4: 'This'
          },
          codeSnippet: `for (var i = 1; i <= 3; i++) {
  document.innerHTML += \`<li>Item \${i}</li>\`;
}`,
        },
        {
          headers: {
            h4: 'is equivalent to this',
          },
          codeSnippet: `var i = 1;
if (i <= 3) { // i is 1, so this condition is true
  document.innerHTML += \`<li>Item \${i}</li>\`;
  i++; // i becomes 2
}

if (i <= 3) { // true
  document.innerHTML += \`<li>Item \${i}</li>\`;
  i++; // i becomes 3
}

if (i <= 3) { // true
  document.innerHTML += \`<li>Item \${i}</li>\`;
  i++; // is becomes 4
}

if (i <= 3) { // false
  // this code doesn't run
  document.innerHTML += \`<li>Item \${i}</li>\`;
}
`,
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
        h1: 'Congratulations!',
        h3: 'You completed the course on',
        h2: '   ',
        h4: 'JavaScript Data Types • JavaScript Loops • The "for" Loop',
      },
    },
  ],
};

export default forLoop;