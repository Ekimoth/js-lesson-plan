import { TopicObject } from './index';

const functions: TopicObject = {
  id: 13,
  title: 'Functions',
  slides: [
    {
      headers: {
        h1: 'JavaScript Functions',
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h3: 'What is a function?'
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: "It's a piece of code with a name",
            },
            {
              text: '...so that it can be called by that name',
            },
            {
              text: '...as many times as we want',
            },
          ],  
        },
      ],
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h3: 'Declaring a function',
      },
      innerSlides: [
        {
          headers: {
            h4: 'The "function" keyword',
          },
          codeSnippet: `function...`
        },
        {
          headers: {
            h4: 'Name of the function',
          },
          codeSnippet: `function greeting...`
        },
        {
          headers: {
            h4: 'The "()" operator',
          },
          codeSnippet: `function greeting()...`
        },
        {
          headers: {
            h4: 'The body of the function',
          },
          codeSnippet: `function greeting() {
  // function body
}`,
        },
      ],
    },
    {
      headers: {
        h2: 'Exercise time',
        h3: 'Declaring a function',
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Calling a function',
      },
      innerSlides: [
        {
          text: 'Calling a function means running the code inside its body',
          innerSlides: [
            {
              headers: {
                h4: 'How to do it?',
                h5: 'The "()" operator again',
              },
              codeSnippet: `// if the function looks like this
function greeting() {
  console.log('Hello');
}`
            },
          ],
        },
        {
          text: 'You call/run it like this',
          codeSnippet: 'greeting();',
        },
      ],
    },
    {
      headers: {
        h2: 'Exercise time',
        h3: 'Calling a function',
      },
    },
    {
      headers: {
        h1: 'Function Arguments',
      },
    },
    {
      headers: {
        h1: 'Function Arguments',
        h2: 'What is a function argument?'
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: "It's a parameter that a function accepts when being called",
            },
            {
              text: "It's very much like a variable...",
            },
            {
              text: 'It has a name...',
            },
            {
              text: '...And a value',
            },
          ],
        },
      ],
    },
    {
      headers: {
        h1: 'Function Arguments',
        h2: 'How to declare a function argument?'
      },
      innerSlides: [
        {
          innerSlides: [
            {
              headers: {
                h5: 'Remember those "()" brackets?',
              },
            },
            {
              headers: {
                h5: 'The space between them is reserved for arguments',
              },
              codeSnippet: `function greeting(whom) {
  console.log(whom);
}`,
            },
            {
              text: 'And "whom" is the argument',
            },
          ],
        },
      ],
    },
    {
      headers: {
        h2: 'Exercise time',
        h3: 'Add arguments to a function',
      },
    },
    {
      headers: {
        h1: 'Function Arguments',
        h3: 'How to use them?',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              codeSnippet: `function greeting(whom) {
  console.log(\`Hello, \${whom}!\`);
}`,
            },
            {
              headers: {
                h4: 'We declared an argument. Now what?',
              },
            },
            {
              headers: {
                h4: 'Great. Now we can call the function.',
              },
              codeSnippet: `greeting(); // Hello, undefined!`,
            },
            {
              headers: {
                h4: "But don't forget the argument",
              },
              codeSnippet: `greeting('Batman'); // Hello, Batman!`,
            },
          ],
        },
      ],
    },
    {
      headers: {
        h2: 'Exercise time',
        h3: 'Calling a function with an argument',
      },
    },
    {
      headers: {
        h1: 'Function Arguments',
        h3: 'A function with multiple arguments',
        h4: 'Sometimes a function needs more than just one argument',
      },
    },
    {
      headers: {
        h1: 'Function Arguments',
        h3: 'A function with multiple arguments',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: 'Not any different from a function with one argument',
            },
            {
              headers: {
                h4: 'We take the function we already have',
              },
              codeSnippet: `function greeting(whom) {
  console.log(\`Hello, \${whom}!\`);
}`,
            },
            {
              headers: {
                h4: 'And we add a new argument like this',
              },
              codeSnippet: `function greeting(whom, byWhom) {
  console.log(\`Hello, \${whom}! From \${byWhom}\`);
}`,
            },
          ],
        },
      ],
    },
    {
      headers: {
        h1: 'Function Arguments',
        h3: 'A function with multiple arguments',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              headers: {
                h4: 'Great. We have this',
              },
              codeSnippet: `function greeting(whom, byWhom) {
  console.log(\`Hello, \${whom}! From \${byWhom}\`);
}`,
            },
            {
              headers: {
                h4: 'To use it we simply call it like this',
              },
              codeSnippet: `greeting('Batman', 'Bane')`,
            },
          ],
        },
      ],
    },
    {
      headers: {
        h2: 'Exercise time',
        h3: 'Calling a function with multiple arguments',
      },
    },
    {
      headers: {
        h1: 'Function Arguments',
        h2: 'Arguments in correlation with other variables',
      },
    },
    {
      headers: {
        h2: 'Function Arguments',
        h3: 'Arguments in correlation with other variables',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              codeSnippet: `function sumAB(a, b) {
  var c = a + b;
  // a and b are function arguments
  // c is a local variable
  // a, b and c are all ONLY accessible inside this function
}`,
            },
            {
              headers: {
                h4: 'Difference between "var" and "let" inside a function',
              },
              codeSnippet: `function subtractAB(a, b) {
  // The "var space"
  if (a > b) {
    // lets ONLY live in their own block
    let c = a - b;
  } else if (b > a) {
    // lets ONLY live in their own block
    let c = b - a;
  } else {
    // vars live in the "var space"
    var d = a * b;
  }
  
  console.log(d); // This will work
  console.log(c); // This will throw an error
}`,
            },
          ],
        },
      ],
    },
    {
      headers: {
        h2: 'Exercise time',
        h3: "Let's practice some vars and lets",
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Functions also are variables',
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Functions also are just variables',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              headers: {
                h4: 'And can be assigned to variables',
              },
            },
            {
              headers: {
                h4: 'How we declared a function',
              },
              codeSnippet: `function greeting() {
  console.log('Hello');
}`,
            },
            {
              headers: {
                h4: 'We can also do it this way',
              },
              codeSnippet: `let greeting = function() {
  console.log('Hello');
};`
            },
          ],
        },
      ],
    },
    {
      headers: {
        h2: 'Exercise time',
        h4: "Let's convert some function declarations into function variables",
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'They can be called from another function',
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Calling a function from another function',
      },
      innerSlides: [
        {
          headers: {
            h4: "Define a function",
          },
          codeSnippet: `function myTestFn() {
  console.log('Testing 123');
}`,
        },
        {
          headers: {
            h4: 'Then define another function',
          },
          codeSnippet: `function myCallerFn() {
  myTestFn();
}`
        },
        {
          headers: {
            h4: 'Then finally call myCallerFn',
          },
          codeSnippet: `myCallerFn(); // Testing 123`,
        },
      ],
    },
    {
      headers: {
        h2: 'Practice time',
        h4: "Let's call some function from another function",
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Callback Functions',
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Callback Functions',
        h3: 'Functions used as arguments',
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Callback Functions',
        h3: 'Functions used as arguments',
      },
      innerSlides: [
        // todo: add some slides here
      ],
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Functions that return a value',
      },
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Functions that return a value',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              headers: {
                h4: "Functions don't just follow orders",
              },
            },
            {
              headers: {
                h4: 'They can also "give" you things',
              },
            },
            {
              text: 'If you tell them to',
            },
            {
              headers: {
                h4: 'They can can create a value for you...',
              },
            },
            {
              headers: {
                h4: '...which then you can use to store in a variable',
              },
            },
            {
              codeSnippet: `var sandwich = getSandwich();`
            },
          ],
        },
      ],
    },
    {
      headers: {
        h1: 'JavaScript Functions',
        h2: 'Functions that return a value',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              headers: {
                h4: "Let's take a step back",
              },
            },
            {
              headers: {
                h4: '...Take a look at a function we already have...',
              },
              codeSnippet: `function myTestFn() {
  console.log('Testing 123');
}`,
            },
            {
              headers: {
                h4: '...try to store its result in a variable',
              },
              codeSnippet: `var message = myTestFn();`,
            },
            {
              headers: {
                h4: '...and then console.log() the variable we just created',
              },
              codeSnippet: `console.log(message); // undefined`,
            },
            {
              text: 'The "message" var is undefined...',
            },
            {
              text: `Because the "myTestFn" isn't told to give us a value`,
            },
          ],
        },
      ],
    },
    {
      headers: {
        h1: 'Functions that return a value',
        h2: 'The "return" keyword',
      },
    },
    {
      headers: {
        h1: 'Functions that return a value',
        h2: 'The "return" keyword',
        h3: 'How do they look?',
      },
      innerSlides: [
        {
          innerSlides: [
            {
              text: 'Imagine you need a var with the value of 5',
              
            },
            {
              codeSnippet: `var myLuckyNumber = 5;`,
            },
            {
              text: "And you want a function that gives you that number",
            },
            {
              text: 'The only thing your function needs',
            },
            {
              codeSnippet: `return 5;`,
            },
          ],
        },
        {
          innerSlides: [
            {
              codeSnippet: `function giveMeFive() {
  return 5;      
}`,
            },
            {
              codeSnippet: `var myLuckyNumber = giveMeFive();`,
            },
            {
              codeSnippet: 'console.log(myLuckyNumber); // 5',
            },
          ],
        },
      ],
    },
    {
      headers: {
        h2: 'Practice time',
        h4: "Let's practice some functions that return a value",
      },
    },
  ],
};

export default functions;