import { style } from '@/assets/data/codeStyle';

export const reactHooksQuestions = [
  {
    id: 1,
    question: 'What for do we use \'useState\' hook?',
    answer: [1],
    options: [
      'It declares a state variable with the update logic inside a reducer function.',
      'It generates random values for use within the component.',
      'It automatically updates the state based on external events without any explicit code.',
      'It is used to manage global application state across all components.',
      'It declares a state variable that you can update directly.',
      'It declares a state variable that you can not update directly.',
      'It is only necessary when working with class components, not functional components.',
    ],
    timeToAnswer: 40,
    points: 8,
  },
  {
    id: 2,
    question: `What will be in console after clicking on the button + on the code below?
<pre ${style}><code>
      const Counter = () => {
          const [count, setCount] = useState(0);
      
          const handleClick = (dif: number) => {
                  setCount(count + dif);
                  console.log(count);
          };

      return (
        &lt;&gt;
            &lt;button onClick={() => handleClick(1)}&gt;+&lt;/button&gt;
            &lt;button onClick={() => handleClick(-1)}&gt;-&lt;/button&gt;
        &lt;/&gt;
      )}
</code></pre>`,
    answer: [5],
    options: [
      '0',
      '1',
      '-1',
    ],
    timeToAnswer: 60,
    points: 8,
  },
  {
    id: 3,
    question: `What will be in console after clicking on the button + on the code below?
<pre ${style}><code>
      const Counter = () => {
          const [count, setCount] = useState(0);
      
          const handleClick = (dif: number) => {
                  setCount((prevCount) => prevCount + dif);
                  setCount((prevCount) => {
                      console.log(prevCount);
                      return prevCount + dif;
                  });
          };

      return (
        &lt;&gt;
            &lt;button onClick={() => handleClick(1)}&gt;+&lt;/button&gt;
            &lt;button onClick={() => handleClick(-1)}&gt;-&lt;/button&gt;
        &lt;/&gt;
      )}
</code></pre>`,
    answer: [14],
    options: [
      '0',
      '1',
      '-1',
    ],
    timeToAnswer: 80,
    points: 8,
  },
  {
    id: 4,
    question: `What will be count after clicking on the button 'Increase the number' on the code below?
<pre ${style}><code>
      const Counter = () => {
          const [count, setCount] = useState(0);
      
          const handleClick = () => {
                  setCount(count + 5);
                  setCount((prevCount) => prevCount + 1);
          };

      return (
        &lt;&gt;
            &lt;button onClick={() => handleClick()}&gt;Increase the number&lt;/button&gt;
        &lt;/&gt;
      )}
</code></pre>`,
    answer: [9],
    options: [
      '0',
      '1',
      '5',
      '6',
    ],
    timeToAnswer: 100,
    points: 8,
  },
  {
    id: 5,
    question: `What will be count after clicking on the button 'Increase the number' on the code below?
<pre ${style}><code>
      const Counter = () => {
          const [count, setCount] = useState(0);
      
          const handleClick = () => {
                  setCount(count + 5);
                  setCount((prevCount) => prevCount + 1);
                  setCount(42);
          };

      return (
        &lt;&gt;
            &lt;button onClick={() => handleClick()}&gt;Increase the number&lt;/button&gt;
        &lt;/&gt;
      )}
</code></pre>`,
    answer: [1],
    options: [
      '0',
      '1',
      '5',
      '6',
      '42',
    ],
    timeToAnswer: 100,
    points: 8,
  },
  {
    id: 6,
    question: `How many re-renders will be after clicking on the button 'Increase numbers' on the code below?
<pre ${style}><code>
      const Counter = () => {
          const [count, setCount] = useState(0);
          const [number, setNumber] = useState(0);
      
          const handleClick = () => {
                  setCount(prevCount => prevCount + 5);
                  setCount(prevCount => prevCount + 1);
                  
                  setNumber(prevNumber => prevNumber + 5);
                  setNumber(prevNumber => prevNumber + 1);
          };

      return (
        &lt;&gt;
            &lt;button onClick={() => handleClick()}&gt;Increase numbers&lt;/button&gt;
        &lt;/&gt;
      )}
</code></pre>`,
    answer: [14],
    options: [
      '0',
      '1',
      '2',
      '3',
      '4',
    ],
    timeToAnswer: 120,
    points: 8,
  },
  {
    id: 7,
    question: 'What is batching in React?',
    answer: [5],
    options: [
      'It is a process of grouping multiple state updates into a single update.',
      'It is a process of grouping multiple state updates into a multiple updates.',
      'It is a process of grouping multiple state updates into a single update with a delay.',
      'It is a process of grouping multiple state updates into a multiple updates with a delay.',
    ],
    timeToAnswer: 100,
    points: 8,
  },
  {
    id: 8,
    question: 'Is there a method to compel React to immediately apply updates synchronously?',
    answer: [14],
    options: [
      'Yes, by using \'renderSync(callback)\'',
      'Yes, by using \'flushSync(callback)\'',
      'Yes, by using \'runSync(callback)\'',
      'Yes, by using \'updateSync(callback)\'',
      'No, it is impossible',
    ],
    timeToAnswer: 40,
    points: 8,
  },
  {
    id: 9,
    question: 'What for do we use \'useReducer\' hook?',
    answer: [9],
    options: [
      'It generates random values for use within the component.',
      'It automatically updates the state based on external events without any explicit code.',
      'It is used to manage global application state across all components.',
      'It declares a state variable with the update logic inside a reducer function.',
      'It declares a state variable that you can update directly.',
      'It declares a state variable that you can not update directly.',
      'It is only necessary when working with class components, not functional components.',
    ],
    timeToAnswer: 30,
    points: 8,
  },
  {
    id: 10,
    question:  'What for do we use \'useContext\' hook?',
    answer: [9],
    options: [
      'Context lets to manipulate the browser history. useContext reads and subscribes to a context.',
      'Context lets to fetch data from an external API. useContext reads and subscribes to a context.',
      'Context lets to create and manage state in class components. useContext reads and subscribes to a context.',
      'Context lets a component receive information from distant parents without passing it as props. useContext reads and subscribes to a context.',
    ],
    timeToAnswer: 30,
    points: 8,
  },
  {
    id: 11,
    question: 'What for do we use \'useRef\' hook?',
    answer: [1],
    options: [
      'React Hook that lets you create global state across components.',
      "React Hook that lets you perform HTTP requests and handle data fetching.",
      "React Hook that lets you define lifecycle methods in functional components.",
      "React Hook that lets you manage routing and navigation in your React application.",
      'React Hook that lets you reference a value that’s not needed for rendering.',
    ],
    timeToAnswer: 30,
    points: 8,
  },
  {
    id: 12,
    question: 'What for do we use \'useImperativeHandle\' hook?',
    answer: [0],
    options: [
      'React Hook that lets you customize the handle exposed as a ref and manage routing and navigation in your React application.',
      "React Hook that lets you perform HTTP requests and handle data fetching.",
      "React Hook that lets you define lifecycle methods in functional components.",
      "React Hook that lets you manage routing and navigation in your React application.",
      'React Hook that lets you customize the component state and the component lifecycle.',
      'React Hook that lets you customize the handle exposed as a ref.',
      'React Hook that lets you reference a value that’s not needed for rendering.',
    ],
    timeToAnswer: 45,
    points: 8,
  },
  {
    id: 13,
    question: 'What for do we use \'useEffect\' hook?',
    answer: [1],
    options: [
      'React Hook that lets you create global state across components.',
      "React Hook that lets you perform HTTP requests and handle data fetching.",
      "React Hook that lets you define lifecycle methods in functional components.",
      "React Hook that lets you manage routing and navigation in your React application.",
      "React Hook that lets you synchronize a component with an external system.",
      'React Hook that lets you customize the component state and the component lifecycle.',
      'React Hook that lets you customize the handle exposed as a ref.',
      'React Hook that lets you reference a value that’s not needed for rendering.',
      "None of the above",
    ],
    timeToAnswer: 40,
    points: 8,
  },
  {
    id: 14,
    question: 'What for do we use \'useLayoutEffect\' hook?',
    answer: [5],
    options: [
      'It  is a version of useEffect that fires before the browser repaints the screen.',
      'It is a version of useEffect that fires after the browser repaints the screen.',
      'It is a version of useEffect that fires after the browser repaints the screen with a delay.',
      'It is a version of useEffect that fires before the browser repaints the screen with a delay.',
      'It is a version of useEffect that fires before the browser repaints the screen with a delay and allows to manipulate the browser history.',
      "None of the above",
    ],
    timeToAnswer: 30,
    points: 8,
  },
  {
    id: 15,
    question: 'What for do we use \'useInsertionEffect\' hook?',
    answer: [16],
    options: [
      'It allows removing elements from the DOM after any layout effects fire.',
      'It allows inserting elements into the DOM after any layout effects fire.',
      'It allows inserting elements into the DOM before any layout effects fire.',
      'It is a version of useEffect that fires before the browser repaints the screen with a delay.',
      'It is a version of useEffect that fires after the browser repaints the screen with a delay.',
      "None of the above",
    ],
    timeToAnswer: 30,
    points: 8,
  },
];