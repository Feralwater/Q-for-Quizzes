import { style } from '@/assets/data/codeStyle';

export const intermediateVueQuestions = [
  {
    id: 1,
    question: 'How can Vue components interact and share information with each other using events?',
    answer: [9],
    options: [
      'Vue components communicate through direct method calls, bypassing the need for events.',
      'To share data between Vue components, use global variables instead of events.',
      'Events in Vue are only one-way communication and cannot be used for interaction between components.',
      'Vue components can interact and share information using events through the built-in $emit function.',
      'Vue components must always rely on parent-child relationships for information exchange; events are not necessary.',
      'The $on method in Vue is used to emit custom events between components.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 2,
    question: 'How do slots and scoped slots differ in Vue.js?',
    answer: [16, 8],
    options: [
      'Slots and scoped slots are synonyms and can be used interchangeably in Vue.js.',
      'Scoped slots are exclusively used for content distribution, while slots are solely for passing data.',
      'A slot is a placeholder in a child component that is filled with content passed from the parent.', // correct
      'Slots are designed only for class components, while scoped slots are intended for functional components.',
      'Scoped slots are a deprecated feature, and slots are the recommended, modern approach.',
      'Using slots or scoped slots is optional in Vue.js; components can communicate effectively without them.',
      'Scoped slot allows you to pass child component data to the parent scope and use the data in the slot content.', // correct
    ],
    timeToAnswer: 120,
    points: 11,
  },
  {
    id: 3,
    question: 'What event modifiers does Vue offer to enhance event handling in components?',
    answer: [5, 14, 16, 9, 1, 0],
    options: [
      '.stop: This modifier is used to stop the propagation of the event to parent elements. It\'s equivalent to calling event.stopPropagation() in JavaScript.',
      '.prevent: It\'s used to prevent the default action of the event (like preventing a form from submitting). This is similar to event.preventDefault() in JavaScript.',
      '.capture: With this modifier, an event handler is added in the capture phase rather than the bubbling phase.',
      '.self: This modifier ensures that the event handler is only triggered if the event is dispatched from the element itself, not from a child element.',
      '.once: It ensures that the event is only triggered once.',
      '.passive: This modifier is used especially for improving performance on mobile devices, indicating that the event handler will not call preventDefault().',
      '.keep-alive: This modifier is used to keep the component in the DOM instead of destroying it when it\'s removed from the parent component.',
      '.sync: This modifier is used to update a prop value with the value of a child component.',
    ],
    timeToAnswer: 180,
    points: 10,
  },
  {
    id: 4,
    question: 'How do you conditionally render a group of elements?',
    answer: [5, 14, 16, 9, 8],
    options: [
      '<template v-if="condition">...</template>',
      '<template v-else-if="condition">...</template>',
      '<template v-else>...</template>',
      '<template v-show="condition">...</template>',
      '<template v-show-else="condition">...</template>',
      '<template v-show-else-if="condition">...</template>',
      '<div v-if="condition">...</div>',
    ],
    timeToAnswer: 60,
    points: 7,
  },
  {
    id: 5,
    question: 'Is it possible to combine local and global styles?',
    answer: [5],
    options: [
      'Yes, it\'s possible to combine local and global styles in Vue.js.',
      'No, it\'s not possible to combine local and global styles in Vue.js.',
      'I don\'t know.',
      'I don\'t care.',
      'I don\'t know and I don\'t care.',
      'I need to call my mom.',
    ],
    timeToAnswer: 30,
    points: 5,
  },
  {
    id: 6,
    question: 'What are mixins in Vue?',
    answer: [9],
    options: [
      'There are no mixins in Vue; it\'s a feature of React.',
      'Mixins are a way to handle global state in Vue.',
      'Mixins are a way to store global variables in Vue.',
      'Mixins are a way to distribute reusable functionalities for Vue components.',
      'Mixins are a way to run code before the Vue instance is created.',
      'Mixins are a way to run code after the Vue instance is created.',
      'Mixins are a way to run code before the Vue instance is destroyed.',
    ],
    timeToAnswer: 40,
    points: 5,
  },
  {
    id: 7,
    question: 'What are the key benefits of Vue 3\'s Teleport feature?',
    answer: [9],
    options: [
      'Teleport allows you to send data from a child component to a parent component.',
      'Teleport allows you to send data from a parent component to a child component.',
      'Teleport allows you to send data between sibling components.',
      'Teleport allows you to render a component in a different location in the DOM tree.',
    ],
    timeToAnswer: 60,
    points: 6,
  },
  {
    id: 8,
    question: 'Can you describe Vue 3\'s Suspense and its use case?',
    answer: [5],
    options: [
      'Suspense in Vue 3 is a feature designed to handle asynchronous operations in components, displaying fallback content while waiting for the async task to complete.',
      'Suspense is a function that allows you to manage the state of a component.',
      'Suspense is a hook that allows you to handle asynchronous operations in a component.',
      'Suspense is a store that allows you to manage global state in a component.',
      'Suspense is used to handle only synchronous operations and display fallback content while waiting for the async operation to complete',
      'Suspense is useless.',
    ],
    timeToAnswer: 90,
    points: 8,
  },
  {
    id: 9,
    question: 'Select directives that are supported in Vue 3.',
    answer: [5, 1, 0, 8],
    options: [
      'General Directives',
      'Conditional Directives',
      'Parameter Directives',
      'Functional Directives',
      'Literal Directives',
      'Empty Directives',
      'Custom Directives',
    ],
    timeToAnswer: 90,
    points: 8,
  },
  {
    id: 10,
    question: `Evaluate this code snippet: <pre ${style}>
      <code>
        &lt;script&gt;
         const showMe = '';
        &lt;/script&gt;

        &lt;template&gt;
          &lt;div v-if="showMe"
            This is a test component
          &lt;/div&gt;
        &lt;/template&gt;
      </code>
    </pre> What is it going to output in the browser?`,
  answer: [9],
  options: [
    'Nothing, because the code is invalid',
    'Nothing, because the code is valid but the condition is false',
    'An error',
    'This is a test component',
    'This is a test component and an error will be thrown',
    'I don\'t know',
  ],
  timeToAnswer: 200,
  points: 10,
},
  {
    id: 10,
    question: `Evaluate this code snippet: <pre ${style}>
     <code>
   const MockComponent = {
       render() {
             return this.$slots.default;
          },

       data() {
         return {
           status: '',
       };
     },

      watch: {
        status: {
          handler(newVal) {
            console.log('Status update: ' + newVal);
          },
          immediate: true,
        },
      },
    
      beforeCreate() {
        this.status = 'initializing';
      },
      mounted() {
        this.status = 'online';
      },
      beforeDestroy() {
        this.status = 'offline';
      },
    };

    new Vue({
      el: '#app',
    
      components: {
        MockComponent,
      },
    
         &lt;template&gt;
          &lt;MockComponent v-if="showComponent" /&gt;
         &lt;/template&gt;
    
      data() {
        return {
          showComponent: false,
        };
      },
    
      mounted() {
        this.showComponent = true;
        window.setTimeout(() => {
          this.showComponent = false;
        }, 1000);
      },
    });
      </code>
    </pre> What is it going to output in the browser?`,
    answer: [16],
    options: [
      'Status update: initializing Status update: online',
      'Status update: Status update: initializing Status update: online Status update: offline',
      'Status update: Status update: online',
      'Status update: initializing Status update: online',
      'Status update: Status update: online Status update: offline',
      'Status update: offline',
      'Status update: Status update: offline',
    ],
    timeToAnswer: 300,
    points: 25,
  },
];