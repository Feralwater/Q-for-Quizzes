export const advancedVueQuestions = [
  {
    id: 1,
    question: 'What are the benefits of using Composition API in Vue 3?',
    answer: [5, 16],
    options: [
      'It has better type inference and more flexible code structure.',
      'Its just new syntax to make React developers feel more comfortable.',
      'It makes code more readable and reusable.',
      'It is faster than Options API.',
      'It is slower than Options API.',
      'Its has no benefits. It is just a new way of writing code.',
      'Its has no benefits at all. It is just an experimental feature.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 2,
    question: 'What is Composition API in Vue 3?',
    answer: [1],
    options: [
      'The Composition API is a new feature in Vue 3 that allows you to write CSS styles directly within your Vue components.',
      'Vue 3\'s Composition API is a set of tools for handling HTTP requests and managing network communication in your Vue applications.',
      'Composition API is a feature in Vue 3 that enables the creation of 3D graphics and animations within your Vue components.',
      'The Composition API introduces a new paradigm for creating database queries and managing questions persistence in Vue 3 applications.',
      'Composition API is a set of APIs that allows us to create Vue components using imported functions instead of declaring options.',
      'Vue 3\'s Composition API includes built-in support for creating augmented reality (AR) experiences directly within Vue components.',
      'Composition API is a framework within Vue 3 for implementing blockchain technology and smart contracts in your web applications.',
    ],
    timeToAnswer: 40,
    points: 5,
  },
  {
    id: 3,
    question: 'Composition API includes:',
    answer: [5, 9, 8],
    options: [
      'Lifecycle Hooks – hooks into the component lifecycle',
      'Built-in code editor - allowing developers to write and edit their JavaScript code directly within Vue components.',
      'Feature for automatically generating documentation based on the comments within your Vue component code.',
      'Dependency Injection – leverage Vue’s dependency injection system while using reactivity APIs.',
      'Module for integrating artificial intelligence (AI) and machine learning (ML) capabilities directly into Vue 3 applications.',
      'Set of pre-designed UI components for creating stylish and responsive user interfaces out of the box.',
      'Reactivity API – directly create reactive states, computed states, and watchers',
      'Real-time collaboration feature, allowing multiple developers to simultaneously work on the same Vue component.',
      'Feature for automatically translating Vue component code into different programming languages, promoting cross-language compatibility.',
    ],
    timeToAnswer: 90,
    points: 5,
  },
  {
    id: 4,
    question: 'How can animations be incorporated into a Vue application?',
    answer: [5, 16, 8],
    options: [
      'Watchers can be used to animate an element based on a numerical state.',
      'Include the "magicAnimate" attribute on the elements you want to animate, and Vue will automatically generate animation.',
      'Transition and TransitionGroup – Vue components for handling enter/leave and list transitions.',
      'Vue applications support animations by integrating the "VueAnimate" plugin, which enables seamless transitions between different states of your components.',
      'Animations in Vue can be achieved by invoking the "animate()" method directly within the template, specifying the desired animation properties inline.',
      ' Vue applications include a built-in GIF animator that automatically animates static images within your components when they are rendered.',
      'Animations that are triggered by the addition of CSS classes.',
      'Vue\'s animation capabilities can be extended by using the "anime.js" library, which provides a straightforward integration for complex animations in your Vue components.',
      'Incorporating animations into Vue is as simple as using the "v-animate" directive on elements, specifying the type of animation you want directly in the template.',
      'Transition effects applied by interpolating values such as a component’s style binding.',
    ],
    timeToAnswer: 120,
    points: 5,
  },
  {
    id: 5,
    question: 'What are plugins in Vue?',
    answer: [14],
    options: [
      'Vue plugins are specialized tools for creating photo galleries within Vue components, enhancing image presentation.',
      'Vue plugins are modular pieces of code used to extend app-level features. They can be defined as objects or functions, both requiring an install() function. This function is then used with app.use(), allowing for additional properties to be included.',
      'In Vue, plugins are primarily designed to automate the process of writing and formatting documentation for your Vue applications.',
      'Vue plugins are exclusive features that enable developers to embed virtual reality (VR) experiences directly into Vue components.',
      'Plugins in Vue serve as a dedicated framework for implementing artificial intelligence (AI) algorithms seamlessly within Vue applications.',
    ],
    timeToAnswer: 30,
    points: 5,
  },
  {
    id: 6,
    question: 'How can you enhance the performance of your Vue application?',
    answer: [5, 14, 16],
    options: [
      'Virtualize Lists: Improve rendering performance by employing list virtualization, focusing on elements within or near the viewport.',
      'Minimize Component Abstractions: Be cautious with abstractions like renderless and higher-order components to avoid unnecessary rendering costs, especially in large lists.',
      'Optimize Reactivity: Manage performance for large, immutable questions structures by utilizing shallow APIs like shallowRef() and shallowReactive() to reduce reactivity overhead.',
      'Virtualize Large Texts: Rendering large text blocks is a common performance bottleneck in Vue applications. Applying virtualization techniques to handle extensive paragraphs and documents is a recommended optimization strategy.',
      'Embrace Excessive Component Abstractions: Introducing numerous renderless and higher-order components enhances Vue application performance by providing additional layers of abstraction for code organization.',
      'Deepen Reactivity for Improved Performance: Expanding the reactivity system to include deeper levels of questions structures, even for small and simple components, can significantly enhance Vue application speed and responsiveness.',
    ],
    timeToAnswer: 120,
    points: 5,
  },
  {
    id: 7,
    question: 'What are dynamic components in Vue?',
    answer: [16],
    options: [
      'Dynamic Components are Animated Elements: Dynamic components in Vue are primarily designed for creating animated elements within your application, adding a dynamic flair to the user interface.',
      'Dynamic Components Automatically Rotate: These components have a built-in feature that automatically rotates through different views, providing an animated slideshow effect without explicit coding.',
      'Dynamic components in Vue allow you to dynamically switch between different components at runtime using the <component> element with the is attribute or v-bind:is directive.',
      'Dynamic Components Generate Random Content: Vue\'s dynamic components come with a feature that generates random content, offering a unique and unpredictable user experience every time the component is rendered.',
      'Dynamic Components Control Backend Logic: Vue\'s dynamic components are responsible for managing backend logic and server-side operations, seamlessly integrating frontend and backend functionalities.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 8,
    question: 'What are async components in Vue?',
    answer: [1],
    options: [
      'Async Components Predict User Behavior: Vue\'s async components have a predictive feature that anticipates user actions and preloads components based on expected interactions.',
      'Async Components Automatically Handle Errors: These components come with an automatic error-handling mechanism, resolving issues without any explicit error handling in your code.',
      'Async Components Control Network Connectivity: Vue\'s async components take charge of managing network connectivity, ensuring optimal component loading based on the user\'s internet speed.',
      'Async Components Enable Time Travel: These components introduce a time-traveling feature, allowing users to navigate between past and future states of a component for a unique browsing experience.',
      'Async components in Vue are components loaded on-demand using a factory function or a Promise. They aid in optimizing performance by deferring the loading of components until they are required.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 9,
    question: 'What is the global registration of components in Vue?',
    answer: [5],
    options: [
      'Global registration of components in Vue involves using Vue.component to register a component globally, making it accessible throughout the entire application without the need for local registration in each component.',
      'Global Component Registration Requires Internet Connection: Registering components globally in Vue necessitates a constant internet connection for seamless global access and rendering.',
      'Global Registration Enables Component Teleportation: Once globally registered, Vue components gain the ability to teleport themselves to different parts of the application, providing a dynamic and interactive user experience.',
      'Global Registration Enables Component Teleportation: Once globally registered, Vue components gain the ability to teleport themselves to different parts of the application, providing a dynamic and interactive user experience.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 10,
    question: 'What is dynamic route matching?',
    answer: [16],
    options: [
      'Dynamic route matching allows developers to create routes that can only be matched with specific, predefined values.',
      'In dynamic route matching, parameters are static and cannot be changed based on user input or other dynamic factors.',
      'Dynamic route matching in Vue allows routes to include dynamic segments, enabling parameterized and flexible routing in Vue Router.',
      'It is not possible to pass parameters dynamically in the URL using dynamic route matching in Vue.js.',
    ],
    timeToAnswer: 40,
    points: 5,
  },
  {
    id: 11,
    question: 'How do you resolve circular dependencies between components?',
    answer: [5, 14, 16, 9, 1],
    options: [
      'Restructure Code: Reevaluate component design to break the circular relationship by restructuring code and logic.',
      'Async Component Loading: Use dynamic imports or resolveComponent to load components lazily and break the circular dependency.',
      'Event Bus: Implement an event bus for communication, allowing components to emit and listen for events, decoupling them.',
      'Dependency Injection: Use dependency injection patterns, passing dependencies as props or injecting them, to break direct imports.',
      'Refactor Code: Refactor components to have a hierarchical structure or introduce a higher-level parent component to manage state and actions, avoiding circular dependencies.',
    ],
    timeToAnswer: 120,
    points: 5,
  },
  {
    id: 12,
    question: 'What are some common sources of memory leaks in Vue apps?',
    answer: [5, 14, 16, 9, 1, 0, 8, 19, 18],
    options: [
      'Event Listeners: Event listeners can cause memory leaks if not removed properly.',
      'Timers and Intervals: Timers and intervals can cause memory leaks if not cleared properly.',
      'Global Variables: Global variables can cause memory leaks if not cleared properly.',
      'Component Instances: Component instances can cause memory leaks if not destroyed properly.',
      'Keep-Alive Component: The keep-alive component can cause memory leaks if not used properly.',
      'Circular References: Circular references can cause memory leaks if not handled properly.',
      'Third-party Libraries: Third-party libraries can cause memory leaks if not used properly.',
      'Large Data Sets: Large questions sets can cause memory leaks if not handled properly.',
      'Using props: Using props can cause memory leaks if not handled properly.',
      'Inefficient DOM Manipulation: Inefficient DOM manipulation can cause memory leaks if not handled properly.',
    ],
    timeToAnswer: 180,
    points: 5,
  },
  {
    id: 13,
    question: 'What are some best practices to follow to create an accessible Vue application?',
    answer: [5, 14, 16, 9, 1, 0, 8, 19, 23, 18],
    options: [
      'Use semantic HTML elements.',
      'Use ARIA and role attributes.',
      'Use the tabindex attribute.',
      'Use the alt attribute.',
      'Use the aria-label attribute.',
      'Use the aria-labelledby attribute.',
      'Use the aria-describedby attribute.',
      'Manage focus appropriately when opening and closing modal dialogs or other dynamic content.',
      'Ensure that text has sufficient contrast against its background for readability.',
      'Ensure that text has sufficient contrast against its background for readability.',
      'No need to use create accessible Vue applications as Vue automatically handles accessibility.',
    ],
    timeToAnswer: 120,
    points: 5,
  },
  {
    id: 14,
    question: 'What the difference between watch and watchEffect?',
    answer: [16],
    options: [
      'Watch is more performant than watchEffect',
      'WatchEffect is more performant than watch',
      'Watch runs lazily while watchEffect runs on init',
      'WatchEffect runs lazily while watch runs on init',
      'There is no difference between watch and watchEffect',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 15,
    question: 'What is isRef in Vue 3?',
    answer: [9],
    options: [
      'isRef is a function that checks if a value is an object with reactive properties',
      'isRef is a function that checks if a value is an object with reactive computed',
      'isRef is a function that checks if a value is an object with reactive ref',
      'isRef is a function that checks if a value is a ref object.',
      'all of the above',
      'none of the above',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 16,
    question: 'What is unref in Vue 3?',
    answer: [5],
    options: [
      'unref is a function that returns  the inner value if the argument is a ref, otherwise return the argument itself.',
      'unref is a function that returns the value of a reactive object',
      'unref is a function that returns the value of a reactive computed',
      'unref is a function that returns the value of a reactive ref',
      'all of the above',
      'none of the above',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 17,
    question: 'What is toRef in Vue 3?',
    answer: [8],
    options: [
      'toRef is a function that returns a ref object',
      'toRef is a function that returns a reactive object',
      'toRef is a function that returns a computed object',
      'toRef is a function that returns a ref object',
      'all of the above',
      'none of the above',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 18,
    question: 'What is shallowRef in Vue 3?',
    answer: [14],
    options: [
      'shallowRef is a function that returns an object with reactive properties',
      'shallowRef is a function that returns shallow version of ref()',
      'shallowRef is a function that returns a computed object with reactive properties',
      'shallowRef is a function that returns an object with shallow reactive properties',
      'all of the above',
      'none of the above',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 19,
    question: 'Can you create a customized ref with explicit control over its dependency tracking and updates triggering?',
    answer: [1],
    options: [
      'Yes, using createRef',
      'Yes, using customReference',
      'Yes, using createReference',
      'Yes, using implicitRef',
      'Yes, using customRef',
      'No, you can use only Vue\'s built-in ref',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 20,
    question: 'Find the hook(s) that not exist(s) in Vue 3',
    answer: [5],
    options: [
      'onMounted()',
      'onUpdated()',
      'onUnmounted()',
      'onBeforeMount()',
      'onBeforeUpdate()',
      'onBeforeUnmount()',
      'onErrorCaptured()',
      'onActivated()',
      'onDeactivated()',
      'all of the above',
      'none of the above',
    ],
    timeToAnswer: 60,
    points: 5,
  },
];