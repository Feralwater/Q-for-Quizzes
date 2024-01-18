import type { QuizQuestion } from '@/types/QuizQuestion';
import { style } from '@/assets/questions/codeStyle';

export const basicVueQuestions:QuizQuestion[] = [
  {
    id: 1,
    question: 'Which lifecycle hook in Vue 3 is called after the component has been mounted to the DOM?',
    answer: [14],
    options: [
      'created',
      'mounted',
      'hasBeenMounted',
      'componentMounted',
    ],
    timeToAnswer: 30,
    points: 2,
  },
  {
    id: 2,
    question: 'Which options are used for creating reactive computed properties in Vue 3?',
    answer: [14],
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
    answer: [5, 9, 1],
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
    answer: [14, 16, 9],
    options: [
      'questions object',
      'setup function',
      'reactive references',
      'computed properties',
      'methods',
    ],
    timeToAnswer: 40,
    points: 3,
  },
  {
    id: 5,
    question: 'Which features are new or updated in Vue 3 compared to Vue 2?',
    answer: [5, 9, 1, 0],
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
           import logo from "assets/logo.png";
        &lt;/script&gt;
        &lt;template&gt;
           &lt;img src="logo" alt="logo" /&gt;
        &lt;/template&gt;
       </code>
      </pre> Will this code work? If not, what is the correct way to fix it?`,
    answer: [14],
    options: [
      'Yes, it will work',
      'No, <img :src="logo" alt="logo" />',
      'No, <img src={ logo } alt="logo" />',
      'No, <img src={{ logo }} alt="logo" />',
      'No, <img ::src="logo" alt="logo" />',
    ],
    timeToAnswer: 90,
    points: 3,
  },
  {
    id: 7,
    question: `Review this code: <pre ${style}><code>&lt;button @click="count++"&gt;Increment&lt;/button&gt;</code></pre> Assume 'count' is a data property. Is this correct for incrementing a counter in Vue 3?`,
    answer: [5],
    options: [
      'Yes, it\'s correct',
      'No, use v-on:click="() => count + 1"',
      'No, use v-plus:click="count + 1"',
      'No, use v-fn:click="count + 1"',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 8,
    question: `Is the following code correct for a computed property in Vue 3? <pre ${style}><code>computed: {
      reversedText() {
          return this.text.split('').reverse().join('');
        }
     }</code></pre> assuming 'text' is a reactive data property.`,
    answer: [5],
    options: [
      'Yes, it\'s correct',
      'No, it should be a method, not computed',
      'No, computed properties are not supported in Vue 3',
      'No, use a different syntax for computed properties',
    ],
    timeToAnswer: 120,
    points: 3,
  },
  {
    id: 9,
    question: `Check this Vue 3 template syntax: <pre ${style}><code>&lt;div v-if="show"&gt;Welcome&lt;/div&gt;</code></pre> If 'show' is a reactive data property, is this syntax correct for conditional rendering?`,
    answer: [5],
    options: [
      'Yes, it\'s correct',
      'No, use v-show="show"',
      'No, use :v-if="show === true"',
      'No, use :v-if="show == true"',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 10,
    question: `Assess this code for a Vue 3 setup function: <pre ${style}><code>setup() {
    const count = ref(0);
    return { count };
    }</code></pre> Is this a correct implementation of the Composition API?`,
    answer: [5],
    options: [
      'Yes, it\'s correct',
      'No, count should be a reactive object',
      'No, return count.value instead of count',
      'No, use reactive instead of ref',
    ],
    timeToAnswer: 120,
    points: 3,
  },
  {
    id: 11,
    question: 'What does the `v-model` directive do in Vue 3?',
    answer: [14],
    options: [
      'Updates the content of an HTML element.',
      'Creates a two-way binding on an input or a form element.',
      'Conditionally renders an element.',
      'Listens for events on an element.',
    ],
    timeToAnswer: 30,
    points: 2,
  },
  {
    id: 12,
    question: 'In Vue 3, how can you watch for changes in a reactive property?',
    answer: [16],
    options: [
      'Using the onUpdated lifecycle hook.',
      'With a computed property.',
      'Using the watch or watchEffect function.',
      'Through a method in the methods option.',
    ],
    timeToAnswer: 30,
    points: 3,
  },
  {
    id: 13,
    question: `Assess this code for dynamic styling in Vue 3: <pre ${style}><code>&lt;div :style="{ color: isActive ? 'red' : 'blue' }"&gt;</code></pre> Is this syntax correct?`,
    answer: [5],
    options: [
      'Yes, it\'s correct',
      'No, use v-bind::style',
      'No, use v-style instead of :style',
      'No, use style="color: {{ isActive ? \'red\' : \'blue\' }}"',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 14,
    question: `Evaluate the Vue 3 script setup syntax: <pre ${style}><code>&lt;script setup&gt;</code></pre> Does it correctly enable the Composition API in a component?`,
    answer: [5],
    options: [
      'Yes, it\'s correct',
      'No, additional imports are needed',
      'No, the script tag is not necessary',
      'No, the setup function is missing',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 15,
    question: 'In Vue 3, what is the purpose of the `ref` function from the Composition API?',
    answer: [9],
    options: [
      'To reference a DOM element.',
      'To link to another component.',
      'To reference a parent component.',
      'To create a reactive reference.',
    ],
    timeToAnswer: 20,
    points: 3,
  },
  {
    id: 16,
    question: 'Is the Vue 3 Composition API a replacement for the Options API?',
    answer: [16],
    options: [
      'Yes, it replaces the Options API',
      'No, the Options API is deprecated in Vue 3',
      'No, it\'s an alternative, not a replacement',
      'Maybe, it depends on the use case',
    ],
    timeToAnswer: 20,
    points: 3,
  },
  {
    id: 17,
    question: `Correct this Vue 3 code for a watchEffect: <pre ${style}><code>watchEffect(() => { console.log(props.title); });</code></pre> Assume 'props' is not defined.`,
    answer: [14],
    options: [
      'watchEffect(() => { console.log(props?.title); });',
      'const props = ref({ title: \'YourTitle\' }); watchEffect(() => { console.log(props.value.title); });',
      'watch(() => props, () => { console.log(props.title); });',
      'created(() => { console.log(props.title); });',
      'provide(\'props\', props); const props = inject(\'props\'); watchEffect(() => { console.log(props.title); });',
    ],
    timeToAnswer: 180,
    points: 4,
  },
  {
    id: 18,
    question: 'Can the Vue Router be used for dynamic route matching in Vue 3?',
    answer: [5],
    options: [
      'Yes, Vue Router supports dynamic route matching',
      'No, Vue Router does not support dynamic routes',
      'No, use Vue Route Matcher instead of Vue Router',
      'Maybe, it depends on the use case',
    ],
    timeToAnswer: 20,
    points: 2,
  },
  {
    id: 19,
    question: `Evaluate if this Vue 3 template syntax is correct for v-slot: <pre ${style}><code>&lt;template v-slot:header="{ item }"&gt;{{ item.title }}&lt;/template&gt;</code></pre>`,
    answer: [5],
    options: [
      'Yes, it\'s correct',
      'No, use slot-scope instead of v-slot',
      'No, use v-slot::header="{ item.title }"',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 20,
    question: 'Does Vue 3 support TypeScript out of the box?',
    answer: [14],
    options: [
      'No, TypeScript support must be added separately',
      'Yes, Vue 3 has built-in TypeScript support',
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
    answer: [9],
    options: [
      'questions() { counter: 0 }, methods: { increment() { this.counter += 1 } }',
      'questions: { counter: 0 }, methods: { increment() { this.counter += 1 } }',
      'questions: { counter: 0 }, increment() { this.counter += 1 }',
      'questions() { return { counter: 0 } }, methods: { increment() { this.counter += 1 } }',
      'questions: { increment() { this.counter += 1 } }',
    ],
    timeToAnswer: 120,
    points: 4,
  },
  {
    id: 22,
    question: 'Can the `provide` and `inject` functions be used for dependency injection in Vue 3?',
    answer: [9],
    options: [
      'No, provide and inject are not part of Vue 3',
      'No, provide and inject are only for native HTML elements',
      'Maybe, it depends on the use case',
      'Yes, provide and inject are used for dependency injection',
      'Yes, but only with the help of external libraries',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 23,
    question: `Check if this is the correct way to declare a reactive object in Vue 3: <pre ${style}><code>const state = reactive({ count: 0 });</code></pre>`,
    answer: [5],
    options: [
      'Yes\', \'Correct way to declare a reactive object',
      'No, use createRefObj instead of reactive',
      'No, use reactiveObj instead of reactive',
    ],
    timeToAnswer: 30,
    points: 2,
  },
  {
    id: 24,
    question: 'Is the `v-for` directive used in Vue 3 for rendering a list of items?',
    answer: [0],
    options: [
      'No, v-model is used for list rendering',
      'No, v-for is deprecated in Vue 3',
      'No, v-for is only for rendering a single item',
      'No, v-for is only for rendering a range of numbers',
      'No, v-map is used for list rendering',
      'Yes, v-for is used for list rendering',
      'Yes, but v-for is used for rendering a single item',
    ],
    timeToAnswer: 30,
    points: 2,
  },
  {
    id: 25,
    question: `Determine if this Vue 3 slot usage is correct: <pre ${style}><code>&lt;template #default="{ item }"&gt;{{ item.name }}&lt;/template&gt;</code></pre> in a child component.`,
    answer: [5],
    options: [
      'Yes\', \'Correct named slot usage with scope',
      'No, use v-slot instead of #',
      'No, use slot-scope instead of #',
      'No, use slot instead of template',
    ],
    timeToAnswer: 60,
    points: 4,
  },
  {
    id: 26,
    question: 'Define components in VueJS.',
    answer: [16],
    options: [
      'JavaScript functions that structure HTML elements.',
      'CSS styles applied exclusively to Vue templates.',
      'Modular Vue instances designed for reusability.',
      'Database queries embedded in Vue applications.',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 27,
    question: `Verify if this syntax is correct for a Vue 3 template ref: <pre ${style}><code>&lt;div ref="myDiv"&gt;&lt;/div&gt;</code></pre> in the template section.`,
    answer: [14],
    options: [
      'No, use v-ref instead of ref',
      'Yes, correct usage of template ref',
      'No, use ::ref instead of ref',
      'No, ref is not supported in Vue 3',
    ],
    timeToAnswer: 60,
    points: 1,
  },
  {
    id: 28,
    question: 'Can you use the `v-model` directive on custom components in Vue 3?',
    answer: [5],
    options: [
      'Yes, v-model can be used on custom components',
      'No, v-model is only for native HTML elements',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 29,
    question: 'How can components be created in Vue?',
    answer: [16, 9],
    options: [
      'Utilizing the newComponent() method.',
      'Declaring a Vue instance with Vue.createComponent().',
      'The Vue component is placed in a single dedicated file using the `.vue` extension.',
      'The Vue component can be defined as a plain JavaScript object containing Vue-specific options.',
    ],
    timeToAnswer: 40,
    points: 2,
  },
  {
    id: 30,
    question: 'Is the `setup` function in Vue 3\'s Composition API called before or after the component\'s questions properties are reactive?',
    answer: [5],
    options: [
      'Before, setup function is called before questions properties become reactive',
      'After, setup function is called after questions properties become reactive',
    ],
    timeToAnswer: 25,
    points: 1,
  },
  {
    id: 31,
    question: `Is this the correct way to define a prop in Vue 3: <pre ${style}><code>&lt;script setup&gt; defineProps({ message: String }); &lt;/script&gt;</code></pre>?`,
    answer: [5],
    options: [
      'Yes\', \'Correct way to define a prop in script setup',
      'No, props should be defined in the questions option',
      'No, props should be defined in the props option',
    ],
    timeToAnswer: 40,
    points: 1,
  },
  {
    id: 32,
    question: 'What purpose do Props serve in Vue?',
    answer: [16],
    options: [
      'HTML tags within Vue templates.',
      'Variables confined to the created lifecycle hook.',
      'Custom attributes transferred from parent to child components.',
      'Internal state management variables in Vue instances.',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 33,
    question: `Determine if this code correctly uses Vue 3's teleport feature: <pre ${style}><code>&lt;teleport to="#endOfBody"&gt;...&lt;/teleport&gt;</code></pre>`,
    answer: [5],
    options: [
      'Yes\', \'Correct use of teleport to move content',
      'No, use v-teleport instead of teleport',
      'No, <teleport goTo="#endOfBody">...</teleport>',
      'No, teleport is not supported in Vue 3',
    ],
    timeToAnswer: 120,
    points: 1,
  },
  {
    id: 34,
    question: 'In Vue 3, is it possible to create a custom directive for DOM manipulations?',
    answer: [5],
    options: [
      'Yes, Vue 3 allows creating custom directives',
      'No, custom directives are not supported in Vue 3',
      'Yes, but only with the help of external libraries',
      'Yes, but only with the help of plugins',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 35,
    question: 'Explain the questions flow between Vue components.',
    answer: [14],
    options: [
      'Bidirectional questions flow solely from child to parent components.',
      'Unidirectional questions flow from parent to child through props and child to parent via events.',
      'Limited questions flow confined to components within the same hierarchy.',
      'Data flow occurs arbitrarily based on component rendering order.',
    ],
    timeToAnswer: 60,
    points: 1,
  },
  {
    id: 36,
    question: "Can multiple values be passed to a directive in Vue?",
    answer: [14],
    options: [
      "Yes, separating values with commas within the directive.",
      "Yes, using an array or an object to pass multiple values.",
      "Yes, repeating the directive for each value.",
      "No, directives only accept a single value.",
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 37,
    question: `Evaluate this Vue 3 code for filtering a list:
            <pre ${style}>
              <code>
              &lt;li
                 v-for="item in filteredList"
                 :key="item.id"
              &gt;
                 {{ item.name }}
              &lt;/li&gt;
              </code>
            </pre>
    where 'filteredList' is a computed property.`,
    answer: [5],
    options: [
      'Yes\', \'Correct usage of v-for with a computed property',
      'No, use a method instead of a computed property',
      'No, use v-for="item in filteredList()"',
      'No, use v-for="item in filteredList.value"',
    ],
    timeToAnswer: 120,
    points: 1,
  },
  {
    id: 38,
    question: "Define directives in the context of Vue.",
    answer: [9],
    options: [
      "External scripts imported into Vue components.",
      "Special tags used for conditional rendering.",
      "Custom methods for questions manipulation in Vue instances.",
      "Special tokens in HTML attributes triggering reactive behavior.",
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 39,
    question: `Is this the correct syntax for lazy-loading a component in Vue 3: <pre ${style}><code>const LazyComponent = defineAsyncComponent(() => import('./components/LazyComponent.vue'));</code></pre>?`,
    answer: [5],
    options: [
      'Yes\', \'Correct syntax for lazy-loading a component',
      'No, use v-lazy instead of defineAsyncComponent',
      'No, use v-lazy instead of import',
      'No, lazy-loading is not supported in Vue 3',
    ],
    timeToAnswer: 120,
    points: 1,
  },
  {
    id: 40,
    question: 'Can you use the `v-on` directive to listen to custom events emitted from a child component in Vue 3?',
    answer: [5],
    options: [
      'Yes, v-on can listen to custom events from child components',
      'No, v-on is only for native DOM events',
      'No, use v-listen instead of v-on',
      'No, v-on is deprecated in Vue 3',
    ],
    timeToAnswer: 30,
    points: 1,
  },
  {
    id: 41,
    question: "What do attribute bindings refer to in Vue?",
    answer: [14],
    options: [
      "Linking external CSS files to Vue components.",
      "Dynamically updating HTML attributes based on Vue questions.",
      "Assigning static values to HTML attributes.",
      "Creating custom attributes for Vue templates.",
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 42,
    question: 'What is the difference between the `v-show` and `v-if` directives in Vue 3?',
    answer: [5],
    options: [
      'v-show toggles visibility without unmounting',
      'v-if toggles visibility without unmounting',
      'v-show is deprecated in Vue 3 as it\'s replaced by v-if',
      'v-show is only for native HTML elements, v-if is for components',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 43,
    question: 'In Vue 3, which method should be used to programmatically navigate using the Vue Router?',
    answer: [14],
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
    answer: [14],
    options: [
      'Yes, it\'s correct',
      'No, use createApp().mixin() instead of Vue.mixin()',
      'No, mixins are deprecated in Vue 3',
      'No, use Vue.use() for mixins',
    ],
    timeToAnswer: 60,
    points: 1,
  },
  {
    id: 45,
    question: "How can fallback content be added for slots in Vue?",
    answer: [14],
    options: [
      "Using the slot-fallback attribute.",
      "Providing default content within the slot tags.",
      "Employing the v-fallback directive.",
      "Fallback content is not supported for slots in Vue.",
    ],
    timeToAnswer: 30,
    points: 1,
  },
  {
    id: 46,
    question: `Evaluate this Vue 3 setup: <pre ${style}><code>&lt;script setup&gt;
    import { ref } from 'vue';
    const isOpen = ref(false);
    &lt;/script&gt;</code></pre> Is this correct for defining a reactive boolean?`,
    answer: [5],
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
    question: 'Is the `v-model` directive in Vue 3 compatible with custom events for two-way questions binding?',
    answer: [5],
    options: [
      'Yes, v-model can work with custom events for two-way binding',
      'No, v-model does not support custom events',
      'Only with native HTML elements, not with components',
      'Yes, but requires additional plugins',
    ],
    timeToAnswer: 30,
    points: 1,
  },
  {
    id: 48,
    question: "What are slots in the context of Vue?",
    answer: [5],
    options: [
      "Reserved areas in templates designated for dynamic content.",
      "Special Vue components exclusively for rendering images.",
      "Keywords reserved for conditional rendering.",
      "External libraries specifically for Vue animations.",
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 49,
    question: 'What is the purpose of the `v-once` directive in Vue 3?',
    answer: [14],
    options: [
      'To render a component only once and unmount it',
      'To render a component only once and cache the result',
      'To render a component only once and cache the result, then re-render if the questions changes',
      'To render a component only once and cache the result, then re-render if the questions changes, but only once',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 50,
    question: `Is this code correct for a Vue 3 custom directive to change text color: <pre ${style}><code>app.directive('color', {
      mounted(el, binding) {
         el.style.color = binding.value;
           }
        });</code></pre>?`,
    answer: [5],
    options: [
      'Yes\', \'Correct implementation of a custom directive for text color',
      'No, use created hook instead of mounted',
      'No, binding.value is not the correct way to access the value',
      'No, custom directives are not supported in Vue 3',
    ],
    timeToAnswer: 120,
    points: 1,
  },
];