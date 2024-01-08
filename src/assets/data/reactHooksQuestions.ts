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
    timeToAnswer: 40,
    points: 8,
  },
];