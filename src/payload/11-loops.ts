import { TopicObject } from './index';

const loops: TopicObject = {
  id: 11,
  title: 'JavaScript Loops',
  slides: [
    {
      headers: {
        h1: 'JavaScript Loops',
      },
    },
    {
      headers: {
        h1: 'JavaScript Loops',
      },
      innerSlides: [
        {
          headers: {
            h4: 'Imagine doing this',
          },
          codeSnippet: `document.innerHTML += '<li>Item 1</li>';
document.innerHTML += '<li>Item 2</li>';
document.innerHTML += '<li>Item 3</li>';
document.innerHTML += '<li>Item 4</li>';
document.innerHTML += '<li>Item 5</li>';
document.innerHTML += '<li>Item 6</li>';`,
        },
        {
          headers: {
            h4: 'And then being able to replace it with this',
          },
          codeSnippet: `for (var i = 1; i <= 6; i++) {
  document.innerHTML += \`<li>Item \${i}</li>\`;
}`,
        },
        {
          headers: {
            h4: 'The answer: Loops'
          },
        },
      ],
    },
    {
      headers: {
        h1: 'JavaScript Loops',
      },
    },
    {
      headers: {
        h1: 'JavaScript Loops',
        h2: 'A quick and easy way for doing something repeatedly',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: 'There are different kinds of loops, but they all do the same...'
            },
            {
              text: 'They repeat an action some number of times',
            },
          ],
        },
      ],
    },
    {
      headers: {
        h1: 'JavaScript Loops',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              headers: {
                h4: 'Loop statements in JavaScript',
              },
              text: `1. "for" statement`
            },
            {
              headers: {
                h4: 'Bonus',
              },
              text: `2. "do/while" statement
3. "while" statement
4. "for...in" statement
5. "for...of" statement`
            },
          ],
        },
      ],
    },
  ],
};

export default loops;