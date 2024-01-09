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
];