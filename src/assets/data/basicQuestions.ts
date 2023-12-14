// export const basicQuestions = [
//   {
//     id: 1,
//     question: "Define components in VueJS.",
//     answer: ["Modular Vue instances designed for reusability."],
//     options: [
//       "Modular Vue instances designed for reusability.",
//       "JavaScript functions that structure HTML elements.",
//       "CSS styles applied exclusively to Vue templates.",
//       "Database queries embedded in Vue applications.",
//     ],
//     timeToAnswer: 15,
//     points: 1,
//   },
//   {
//     id: 2,
//     question: "How can components be created in Vue?",
//     answer: ["The Vue component is placed in a single dedicated file using the `.vue` extension.", "The Vue component can be defined as a plain JavaScript object containing Vue-specific options."],
//     options: [
//       "Utilizing the newComponent() method.",
//       "Declaring a Vue instance with Vue.createComponent().",
//       "The Vue component is placed in a single dedicated file using the `.vue` extension.",
//       "The Vue component can be defined as a plain JavaScript object containing Vue-specific options.",
//     ],
//     timeToAnswer: 20,
//     points: 1,
//   },
//   {
//     id: 3,
//     question: "What purpose do Props serve in Vue?",
//     answer: ["Custom attributes transferred from parent to child components."],
//     options: [
//       "HTML tags within Vue templates.",
//       "Variables confined to the created lifecycle hook.",
//       "Custom attributes transferred from parent to child components.",
//       "Internal state management variables in Vue instances.",
//     ],
//     timeToAnswer: 15,
//     points: 1,
//   },
//   {
//     id: 4,
//     question: "Explain the data flow between Vue components.",
//     answer: ["Unidirectional data flow from parent to child through props and child to parent via events."],
//     options: [
//       "Bidirectional data flow solely from child to parent components.",
//       "Unidirectional data flow from parent to child through props and child to parent via events.",
//       "Limited data flow confined to components within the same hierarchy.",
//       "Data flow occurs arbitrarily based on component rendering order.",
//     ],
//     timeToAnswer: 25,
//     points: 1,
//   },
//   {
//     id: 5,
//     question: "What are slots in the context of Vue?",
//     answer: ["Reserved areas in templates designated for dynamic content."],
//     options: [
//       "Reserved areas in templates designated for dynamic content.",
//       "Special Vue components exclusively for rendering images.",
//       "Keywords reserved for conditional rendering.",
//       "External libraries specifically for Vue animations.",
//     ],
//     timeToAnswer: 15,
//     points: 1,
//   },
//   {
//     id: 6,
//     question: "How can fallback content be added for slots in Vue?",
//     answer: ["Providing default content within the slot tags."],
//     options: [
//       "Using the slot-fallback attribute.",
//       "Providing default content within the slot tags.",
//       "Employing the v-fallback directive.",
//       "Fallback content is not supported for slots in Vue.",
//     ],
//     timeToAnswer: 20,
//     points: 1,
//   },
//   {
//     id: 7,
//     question: "What do attribute bindings refer to in Vue?",
//     answer: ["Dynamically updating HTML attributes based on Vue data."],
//     options: [
//       "Linking external CSS files to Vue components.",
//       "Dynamically updating HTML attributes based on Vue data.",
//       "Assigning static values to HTML attributes.",
//       "Creating custom attributes for Vue templates.",
//     ],
//     timeToAnswer: 15,
//     points: 1,
//   },
//   {
//     id: 8,
//     question: "How is a two-way binding achieved in Vue?",
//     answer: ["By using the v-model directive.", "Manually implement by emitting and listening to the input event."],
//     options: [
//       "Employing the v-two-way directive.",
//       "By using the v-model directive.",
//       "Manually implement by emitting and listening to the input event.",
//       "By using the v-bind directive.",
//     ],
//     timeToAnswer: 20,
//     points: 1,
//   },
//   {
//     id: 9,
//     question: "Define directives in the context of Vue.",
//     answer: ["Special tokens in HTML attributes triggering reactive behavior."],
//     options: [
//       "External scripts imported into Vue components.",
//       "Special tags used for conditional rendering.",
//       "Custom methods for data manipulation in Vue instances.",
//       "Special tokens in HTML attributes triggering reactive behavior.",
//     ],
//     timeToAnswer: 15,
//     points: 1,
//   },
//   {
//     id: 10,
//     question: "Can multiple values be passed to a directive in Vue?",
//     answer: ["Yes, using an array or an object to pass multiple values."],
//     options: [
//       "Yes, separating values with commas within the directive.",
//       "Yes, using an array or an object to pass multiple values.",
//       "Yes, repeating the directive for each value.",
//       "No, directives only accept a single value.",
//     ],
//     timeToAnswer: 20,
//     points: 1,
//   },
// ];

interface Question {
  id: number;
  question: string;
  answer: string[];
  options: string[];
  timeToAnswer: number;
  points: number;
}

const style = 'style="background-color: #fef2ee; padding: 4px; border-radius: 4px; overflow-x: auto; font-size: 12px"';

export const basicQuestions:Question[] = [
  {
    id: 1,
    question: 'Which lifecycle hook in Vue 3 is called after the component has been mounted to the DOM?',
    answer: ['mounted'],
    options: [
      'created',
      'mounted',
      'hasBeenMounted',
      'componentMounted',
    ],
    timeToAnswer: 20,
    points: 2,
  },
  {
    id: 2,
    question: 'Which options are used for creating reactive computed properties in Vue 3?',
    answer: ['computed'],
    options: [
      'methods',
      'computed',
      'watch',
      'data',
    ],
    timeToAnswer: 20,
    points: 2,
  },
  {
    id: 3,
    question: 'In Vue 3, which directives are used for conditional rendering?',
    answer: ['v-if', 'v-else-if', 'v-else'],
    options: [
      'v-if',
      'v-for',
      'v-show',
      'v-else-if',
      'v-else',
    ],
    timeToAnswer: 30,
    points: 2,
  },
  {
    id: 4,
    question: 'What are the essential features of the Composition API in Vue 3?',
    answer: ['setup function', 'reactive references', 'computed properties'],
    options: [
      'data object',
      'setup function',
      'reactive references',
      'computed properties',
      'methods',
    ],
    timeToAnswer: 30,
    points: 3,
  },
  {
    id: 5,
    question: 'Which features are new or updated in Vue 3 compared to Vue 2?',
    answer: ['Composition API', 'Fragments', 'Teleport', 'Improved TypeScript support'],
    options: [
      'Composition API',
      'Vue Router',
      'Vuex',
      'Fragments',
      'Teleport',
      'Improved TypeScript support',
    ],
    timeToAnswer: 35,
    points: 3,
  },
  {
    id: 6,
    question: `Evaluate this Vue 3 code snippet: <pre ${style}>
       <code>
        &lt;script&gt;
           import logo from "assets";
        &lt;/script&gt;
        &lt;template&gt;
           &lt;img src="logo" alt="logo" /&gt;
        &lt;/template&gt;
       </code>
      </pre> Will this code work? If not, what is the correct way to fix it?`,
    answer: ['No', '<img :src="logo" alt="logo" />'],
    options: [
      'Yes, it will work',
      'No, <img :src="logo" alt="logo" />',
      'No, <img src={ logo } alt="logo" />',
      'No, <img src={{ logo }} alt="logo" />',
      'Yes, but the import statement should be import logo from "./assets/logo.png";',
      'No, the image tag should not have a closing tag like <img src="logo" alt="logo">',
    ],
    timeToAnswer: 60,
    points: 3,
  },
  {
    id: 7,
    question: `Review this code: <pre ${style}><code>&lt;button @click="count++"&gt;Increment&lt;/button&gt;</code></pre> Assume 'count' is a data property. Is this correct for incrementing a counter in Vue 3?`,
    answer: ['Yes, it\'s correct'],
    options: [
      'Yes, it\'s correct',
      'No, use v-on:click="() => count + 1"',
    ],
    timeToAnswer: 60,
    points: 2,
  },
  {
    id: 8,
    question: `Is the following code correct for a computed property in Vue 3? <pre ${style}><code>computed: { 
      reversedText() { 
          return this.text.split('').reverse().join('');
        }
     }</code></pre> assuming 'text' is a reactive data property.`,
    answer: ['Yes, it\'s correct'],
    options: [
      'Yes, it\'s correct',
      'No, it should be a method, not computed',
    ],
    timeToAnswer: 120,
    points: 3,
  },
  {
    id: 9,
    question: `Check this Vue 3 template syntax: <pre ${style}><code>&lt;div v-if="show"&gt;Welcome&lt;/div&gt;</code></pre> If 'show' is a reactive data property, is this syntax correct for conditional rendering?`,
    answer: ['Yes, it\'s correct'],
    options: [
      'Yes, it\'s correct',
      'No, use v-show="show"',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 10,
    question: `Assess this code for a Vue 3 setup function: <pre ${style}><code>setup() {
    const count = ref(0);
    return { count }; 
    }</code></pre> Is this a correct implementation of the Composition API?`,
    answer: ['Yes, it\'s correct'],
    options: [
      'Yes, it\'s correct',
      'No, count should be a reactive object',
    ],
    timeToAnswer: 20,
    points: 3,
  },
  {
    id: 11,
    question: 'What does the `v-model` directive do in Vue 3?',
    answer: ['Creates a two-way binding on an input or a form element.'],
    options: [
      'Updates the content of an HTML element.',
      'Creates a two-way binding on an input or a form element.',
      'Conditionally renders an element.',
      'Listens for events on an element.',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 12,
    question: 'In Vue 3, how can you watch for changes in a reactive property?',
    answer: ['Using the watch or watchEffect function.'],
    options: [
      'Using the onUpdated lifecycle hook.',
      'Using the watch or watchEffect function.',
      'With a computed property.',
      'Through a method in the methods option.',
    ],
    timeToAnswer: 20,
    points: 3,
  },
  {
    id: 13,
    question: `Assess this code for dynamic styling in Vue 3: <pre ${style}><code>&lt;div :style="{ color: isActive ? 'red' : 'blue' }"&gt;</code></pre> Is this syntax correct?`,
    answer: ['Yes, it\'s correct'],
    options: [
      'Yes, it\'s correct',
      'No, use v-bind:style',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 14,
    question: `Evaluate the Vue 3 script setup syntax: <pre ${style}><code>&lt;script setup&gt;</code></pre> Does it correctly enable the Composition API in a component?`,
    answer: ['Yes, it\'s correct'],
    options: [
      'Yes, it\'s correct',
      'No, additional imports are needed',
    ],
    timeToAnswer: 20,
    points: 3,
  },
  {
    id: 15,
    question: 'In Vue 3, what is the purpose of the `ref` function from the Composition API?',
    answer: ['To create a reactive reference.'],
    options: [
      'To reference a DOM element.',
      'To create a reactive reference.',
      'To link to another component.',
      'To reference a parent component.',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 16,
    question: 'Is the Vue 3 Composition API a replacement for the Options API?',
    answer: ['No', 'It\'s an alternative, not a replacement'],
    options: [
      'Yes, it replaces the Options API',
      'No, it\'s an alternative, not a replacement',
    ],
    timeToAnswer: 20,
    points: 3,
  },
  {
    id: 17,
    question: `Correct this Vue 3 code for a watchEffect: <pre ${style}><code>watchEffect(() => { console.log(props.title); });</code></pre> Assume 'props' is not defined.`,
    answer: ['No', 'Use a reactive source or ref instead of props'],
    options: [
      'watchEffect(() => { console.log(props?.title); });',
      'const props = ref({ title: \'YourTitle\' }); watchEffect(() => { console.log(props.value.title); });',
      'watch(() => props, () => { console.log(props.title); });',
      'created(() => { console.log(props.title); });',
      'provide(\'props\', props); const props = inject(\'props\'); watchEffect(() => { console.log(props.title); });',
    ],
    timeToAnswer: 120,
    points: 4,
  },
  {
    id: 18,
    question: 'Can the Vue Router be used for dynamic route matching in Vue 3?',
    answer: ['Yes', 'Vue Router supports dynamic route matching'],
    options: [
      'Yes, Vue Router supports dynamic route matching',
      'No, Vue Router does not support dynamic routes',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 19,
    question: `Evaluate if this Vue 3 template syntax is correct for v-slot: <pre ${style}><code>&lt;template v-slot:header="{ item }"&gt;{{ item.title }}&lt;/template&gt;</code></pre>`,
    answer: ['Yes, it\'s correct'],
    options: [
      'Yes, it\'s correct',
      'No, use slot-scope instead of v-slot',
    ],
    timeToAnswer: 20,
    points: 2,
  },
  {
    id: 20,
    question: 'Does Vue 3 support TypeScript out of the box?',
    answer: ['Yes', 'Vue 3 has built-in TypeScript support'],
    options: [
      'Yes, Vue 3 has built-in TypeScript support',
      'No, TypeScript support must be added separately',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 21,
    question: `Identify the error in this Vue 3 method: <pre ${style}><code>methods: { 
      increment() {
         this.counter += 1
          } 
    }</code></pre> assuming 'counter' is not defined in 'data'.`,
    answer: ['data() { return { counter: 0 } }, methods: { increment() { this.counter += 1 } }'],
    options: [
      'data() { counter: 0 }, methods: { increment() { this.counter += 1 } }',
      'data: { counter: 0 }, methods: { increment() { this.counter += 1 } }',
      'data: { counter: 0 }, increment() { this.counter += 1 }',
      'data() { return { counter: 0 } }, methods: { increment() { this.counter += 1 } }',
      'data: { increment() { this.counter += 1 } }',
    ],
    timeToAnswer: 120,
    points: 4,
  },
  {
    id: 22,
    question: 'Can the `provide` and `inject` functions be used for dependency injection in Vue 3?',
    answer: ['Yes', 'Provide and inject are used for dependency injection'],
    options: [
      'Yes, provide and inject are used for dependency injection',
      'No, provide and inject are not part of Vue 3',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 23,
    question: `Check if this is the correct way to declare a reactive object in Vue 3: <pre ${style}><code>const state = reactive({ count: 0 });</code></pre>`,
    answer: ['Yes', 'Correct way to declare a reactive object'],
    options: [
      'Yes\', \'Correct way to declare a reactive object',
      'No, use createRefObj instead of reactive',
    ],
    timeToAnswer: 20,
    points: 2,
  },
  {
    id: 24,
    question: 'Is the `v-for` directive used in Vue 3 for rendering a list of items?',
    answer: ['Yes', 'v-for is used for list rendering'],
    options: [
      'Yes, v-for is used for list rendering',
      'No, v-for is not used in Vue 3',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 25,
    question: `Determine if this Vue 3 slot usage is correct: <pre ${style}><code>&lt;template #default="{ item }"&gt;{{ item.name }}&lt;/template&gt;</code></pre> in a child component.`,
    answer: ['Yes', 'Correct named slot usage with scope'],
    options: [
      'Yes\', \'Correct named slot usage with scope',
      'No, use v-slot instead of #',
    ],
    timeToAnswer: 20,
    points: 2,
  },
  {
    id: 26,
    question: 'Does Vue 3\'s Composition API allow for better code organization and reusability compared to the Options API?',
    answer: ['Yes', 'Enhances code organization and reusability'],
    options: [
      'Yes, it enhances code organization and reusability',
      'No, it offers no improvements over the Options API',
    ],
    timeToAnswer: 15,
    points: 3,
  },
  {
    id: 27,
    question: `Verify if this syntax is correct for a Vue 3 template ref: <pre ${style}><code>&lt;div ref="myDiv"&gt;&lt;/div&gt;</code></pre> in the template section.`,
    answer: ['Yes', 'Correct usage of template ref'],
    options: [
      'Yes\', \'Correct usage of template ref',
      'No, use v-ref instead of ref',
    ],
    timeToAnswer: 20,
    points: 2,
  },
  {
    id: 28,
    question: 'Can you use the `v-model` directive on custom components in Vue 3?',
    answer: ['Yes', 'v-model can be used on custom components'],
    options: [
      'Yes, v-model can be used on custom components',
      'No, v-model is only for native HTML elements',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 29,
    question: `Assess the correctness of this Vue 3 event handling: <pre ${style}><code>&lt;button @click="handleClick()"&gt;Click me&lt;/button&gt;</code></pre> where 'handleClick' is a method.`,
    answer: ['Yes', 'Correct syntax for event handling'],
    options: [
      'Yes\', \'Correct syntax for event handling',
      'No, use v-on:click instead of @click',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 30,
    question: 'Is the `setup` function in Vue 3\'s Composition API called before or after the component\'s data properties are reactive?',
    answer: ['Before', 'Setup function is called before data properties become reactive'],
    options: [
      'Before, setup function is called before data properties become reactive',
      'After, setup function is called after data properties become reactive',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 31,
    question: `Is this the correct way to define a prop in Vue 3: <pre ${style}><code>&lt;script setup&gt; defineProps({ message: String }); &lt;/script&gt;</code></pre>?`,
    answer: ['Yes', 'Correct way to define a prop in script setup'],
    options: [
      'Yes\', \'Correct way to define a prop in script setup',
      'No, props should be defined in the data option',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 32,
    question: 'Does Vue 3 support server-side rendering (SSR) for creating SEO-friendly content?',
    answer: ['Yes', 'Vue 3 supports SSR for SEO-friendly content'],
    options: [
      'Yes, Vue 3 supports SSR for SEO-friendly content',
      'No, Vue 3 does not support SSR',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 33,
    question: `Determine if this code correctly uses Vue 3's teleport feature: <pre ${style}><code>&lt;teleport to="#endOfBody"&gt;...&lt;/teleport&gt;</code></pre>`,
    answer: ['Yes', 'Correct use of teleport to move content'],
    options: [
      'Yes\', \'Correct use of teleport to move content',
      'No, teleport requires a different syntax',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 34,
    question: 'In Vue 3, is it possible to create a custom directive for DOM manipulations?',
    answer: ['Yes', 'Vue 3 allows creating custom directives'],
    options: [
      'Yes, Vue 3 allows creating custom directives',
      'No, custom directives are not supported in Vue 3',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 35,
    question: 'Check if this Vue 3 syntax is correct for a reactive array: `const items = reactive([]);`.',
    answer: ['Yes', 'Correct syntax for a reactive array'],
    options: [
      'Yes\', \'Correct syntax for a reactive array',
      'No, use useRef([]) instead of reactive([])',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 36,
    question: 'Can Vue 3\'s reactive system track changes made to an array\'s length?',
    answer: ['Yes', 'Vue 3\'s reactive system can track array length changes'],
    options: [
      'Yes, Vue 3\'s reactive system can track array length changes',
      'No, Vue 3 cannot track changes to an array\'s length',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 37,
    question: `Evaluate this Vue 3 code for filtering a list: <pre ${style}><code>&lt;li v-for="item in filteredList" :key="item.id"&gt;{{ item.name }}&lt;/li&gt;</code></pre> where 'filteredList' is a computed property.`,
    answer: ['Yes', 'Correct usage of v-for with a computed property'],
    options: [
      'Yes\', \'Correct usage of v-for with a computed property',
      'No, use a method instead of a computed property',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 38,
    question: 'Is the `beforeUnmount` lifecycle hook in Vue 3 used for cleanup activities like removing event listeners?',
    answer: ['Yes', 'beforeUnmount is used for cleanup activities'],
    options: [
      'Yes, beforeUnmount is used for cleanup activities',
      'No, beforeUnmount is not for cleanup',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 39,
    question: `Is this the correct syntax for lazy-loading a component in Vue 3: <pre ${style}><code>const LazyComponent = defineAsyncComponent(() => import('./components/LazyComponent.vue'));</code></pre>?`,
    answer: ['Yes', 'Correct syntax for lazy-loading a component'],
    options: [
      'Yes\', \'Correct syntax for lazy-loading a component',
      'No, use a different method for lazy-loading',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 40,
    question: 'Can you use the `v-on` directive to listen to custom events emitted from a child component in Vue 3?',
    answer: ['Yes', 'v-on can listen to custom events from child components'],
    options: [
      'Yes, v-on can listen to custom events from child components',
      'No, v-on is only for native DOM events',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 41,
    question: `Verify if this is a valid way to create a dynamic class binding in Vue 3: <pre ${style}><code>&lt;div :class="{ active: isActive }"&gt;&lt;/div&gt;</code></pre> where 'isActive' is a reactive property.`,
    answer: ['Yes', 'Correct syntax for dynamic class binding'],
    options: [
      'Correct syntax for dynamic class binding',
      'No, use a different syntax for class binding',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 42,
    question: 'Does Vue 3\'s `v-show` directive conditionally toggle the display of an element without unmounting it?',
    answer: ['Yes', 'v-show toggles visibility without unmounting'],
    options: [
      'Yes, v-show toggles visibility without unmounting',
      'No, v-show unmounts the element',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 43,
    question: 'In Vue 3, which method should be used to programmatically navigate using the Vue Router?',
    answer: ['router.push'],
    options: [
      'router.go',
      'router.push',
      'router.link',
      'router.navigate',
      'router.forward',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 44,
    question: 'Check if this syntax is correct for a global mixin in Vue 3: `Vue.mixin({ ... })`.',
    answer: ['No', 'Use createApp().mixin() instead of Vue.mixin()'],
    options: [
      'Yes, it\'s correct',
      'No, use createApp().mixin() instead of Vue.mixin()',
      'No, mixins are deprecated in Vue 3',
      'No, use Vue.use() for mixins',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 45,
    question: 'Which feature is primarily used in Vue 3 for handling side effects?',
    answer: ['watchEffect'],
    options: [
      'computed',
      'methods',
      'watch',
      'watchEffect',
      'onMounted',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 46,
    question: `Evaluate this Vue 3 setup: <pre ${style}><code>&lt;script setup&gt; 
    import { ref } from 'vue'; 
    const isOpen = ref(false);
    &lt;/script&gt;</code></pre> Is this correct for defining a reactive boolean?`,
    answer: ['Yes', 'Correct use of ref to define a reactive boolean'],
    options: [
      'Yes\', \'Correct use of ref to define a reactive boolean',
      'No, use reactive instead of ref',
      'No, boolean values cannot be reactive',
      'No, import is not necessary',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 47,
    question: 'Is the `v-model` directive in Vue 3 compatible with custom events for two-way data binding?',
    answer: ['Yes', 'v-model can work with custom events for two-way binding'],
    options: [
      'Yes, v-model can work with custom events for two-way binding',
      'No, v-model does not support custom events',
      'Only with native HTML elements, not with components',
      'Yes, but requires additional plugins',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 48,
    question: 'Determine if this is valid Vue 3 syntax for a reactive ref with an initial array value: `const myList = ref([\'item1\', \'item2\']);`.',
    answer: ['Yes', 'Correct syntax for a reactive ref with an array'],
    options: [
      'Yes\', \'Correct syntax for a reactive ref with an array',
      'No, use reactive instead of ref for arrays',
      'No, arrays cannot be reactive in Vue 3',
      'No, the syntax for defining a ref is different',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 49,
    question: 'Can Vue 3 components be developed using class-style syntax with the help of the Vue Class Component library?',
    answer: ['Yes', 'Class-style components can be created using Vue Class Component'],
    options: [
      'Yes\', \'Class-style components can be created using Vue Class Component',
      'No, class-style syntax is not supported',
      'Only in TypeScript, not in JavaScript',
      'Yes, but it\'s deprecated in Vue 3',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 50,
    question: `Is this code correct for a Vue 3 custom directive to change text color: <pre ${style}><code>app.directive('color', {
      mounted(el, binding) {
         el.style.color = binding.value;
           }
        });</code></pre>?`,
    answer: ['Yes', 'Correct implementation of a custom directive for text color'],
    options: [
      'Yes\', \'Correct implementation of a custom directive for text color',
      'No, use created hook instead of mounted',
      'No, binding.value is not the correct way to access the value',
      'No, custom directives are not supported in Vue 3',
    ],
    timeToAnswer: 20,
    points: 1,
  },
];