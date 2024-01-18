import type { QuizQuestion } from '@/types/QuizQuestion';
import { style } from '@/assets/questions/en-US/codeStyle';

export const basicVueQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Który hook cyklu życia w Vue 3 jest wywoływany po zamontowaniu komponentu do DOM-u?',
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
    question: 'Które opcje są używane do tworzenia reaktywnych obliczeniowych właściwości w Vue 3?',
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
    question: 'W Vue 3, które dyrektywy są używane do warunkowego renderowania?',
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
    question: 'Jakie są istotne cechy Composition API w Vue 3?',
    answer: [14, 16, 9],
    options: [
      'obiekt questions',
      'funkcja setup',
      'reaktywne referencje',
      'obliczeniowe właściwości',
      'metody',
    ],
    timeToAnswer: 40,
    points: 3,
  },
  {
    id: 5,
    question: 'Które funkcje są nowe lub zaktualizowane w Vue 3 w porównaniu z Vue 2?',
    answer: [5, 9, 1, 0],
    options: [
      'Composition API',
      'Vue Router',
      'Vuex',
      'Fragments',
      'Teleport',
      'Poprawione wsparcie TypeScript',
    ],
    timeToAnswer: 35,
    points: 3,
  },
  {
    id: 6,
    question: `Ocen ten fragment kodu Vue 3: <pre ${style}>
       <code>
        &lt;script&gt;
           import logo from "assets/logo.png";
        &lt;/script&gt;
        &lt;template&gt;
           &lt;img src="logo" alt="logo" /&gt;
        &lt;/template&gt;
       </code>
      </pre> Czy ten kod będzie działać? Jeśli nie, jaka jest poprawna metoda naprawy?`,
    answer: [14],
    options: [
      'Tak, będzie działać',
      'Nie, <img :src="logo" alt="logo" />',
      'Nie, <img src={ logo } alt="logo" />',
      'Nie, <img src={{ logo }} alt="logo" />',
      'Nie, <img ::src="logo" alt="logo" />',
    ],
    timeToAnswer: 90,
    points: 3,
  },
  {
    id: 7,
    question: `Przejrzyj ten kod: <pre ${style}><code>&lt;button @click="count++"&gt;Zwiększ&lt;/button&gt;</code></pre> Zakładając, że 'count' to właściwość danych. Czy to jest poprawne zwiększanie licznika w Vue 3?`,
    answer: [5],
    options: [
      'Tak, to jest poprawne',
      'Nie, użyj v-on:click="() => count + 1"',
      'Nie, użyj v-plus:click="count + 1"',
      'Nie, użyj v-fn:click="count + 1"',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 8,
    question: `Czy poniższy kod jest poprawny dla obliczeniowej właściwości w Vue 3? <pre ${style}><code>computed: {
      reversedText() {
          return this.text.split('').reverse().join('');
        }
     }</code></pre> Zakładając, że 'text' to reaktywna właściwość danych.`,
    answer: [5],
    options: [
      'Tak, to jest poprawne',
      'Nie, to powinna być metoda, a nie obliczeniowa właściwość',
      'Nie, obliczeniowe właściwości nie są obsługiwane w Vue 3',
      'Nie, użyj innej składni dla obliczeniowych właściwości',
    ],
    timeToAnswer: 120,
    points: 3,
  },
  {
    id: 9,
    question: `Sprawdź tę składnię Vue 3 w szablonie: <pre ${style}><code>&lt;div v-if="show"&gt;Witaj&lt;/div&gt;</code></pre> Jeśli 'show' to reaktywna właściwość danych, czy ta składnia jest poprawna dla warunkowego renderowania?`,
    answer: [5],
    options: [
      'Tak, to jest poprawne',
      'Nie, użyj v-show="show"',
      'Nie, użyj :v-if="show === true"',
      'Nie, użyj :v-if="show == true"',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 10,
    question: `Ocen ten kod funkcji setup Vue 3: <pre ${style}><code>setup() {
    const count = ref(0);
    return { count };
    }</code></pre> Czy to jest poprawna implementacja Composition API?`,
    answer: [5],
    options: [
      'Tak, to jest poprawne',
      'Nie, count powinien być reaktywnym obiektem',
      'Nie, zamiast count zwracaj count.value',
      'Nie, użyj reactive zamiast ref',
    ],
    timeToAnswer: 120,
    points: 3,
  },
  {
    id: 11,
    question: 'Co robi dyrektywa `v-model` w Vue 3?',
    answer: [14],
    options: [
      'Aktualizuje zawartość elementu HTML.',
      'Tworzy dwukierunkowe wiązanie dla elementu input lub formularza.',
      'Warunkowo renderuje element.',
      'Nasłuchuje zdarzeń na elemencie.',
    ],
    timeToAnswer: 30,
    points: 2,
  },
  {
    id: 12,
    question: 'W Vue 3, jak można śledzić zmiany w reaktywnej właściwości?',
    answer: [16],
    options: [
      'Korzystając z haka cyklu życia onUpdated.',
      'Przy użyciu obliczeniowej właściwości.',
      'Korzystając z funkcji watch lub watchEffect.',
      'Poprzez metodę w opcji methods.',
    ],
    timeToAnswer: 30,
    points: 3,
  },
  {
    id: 13,
    question: `Oceń ten kod dotyczący dynamicznego stylowania w Vue 3: <pre ${style}><code>&lt;div :style="{ color: isActive ? 'red' : 'blue' }"&gt;</code></pre> Czy ta składnia jest poprawna?`,
    answer: [5],
    options: [
      'Tak, jest poprawna',
      'Nie, użyj v-bind::style',
      'Nie, użyj v-style zamiast :style',
      'Nie, użyj style="color: {{ isActive ? \'red\' : \'blue\' }}"',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 14,
    question: `Oceń składnię script setup w Vue 3: <pre ${style}><code>&lt;script setup&gt;</code></pre> Czy poprawnie aktywuje Composition API w komponencie?`,
    answer: [5],
    options: [
      'Tak, jest poprawna',
      'Nie, potrzebne są dodatkowe importy',
      'Nie, tag script nie jest konieczny',
      'Nie, brakuje funkcji setup',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 15,
    question: 'W Vue 3, jaki jest cel funkcji `ref` z Composition API?',
    answer: [9],
    options: [
      'Do odwoływania się do elementu DOM.',
      'Do łączenia z innym komponentem.',
      'Do odwoływania się do komponentu nadrzędnego.',
      'Do tworzenia reaktywnej referencji.',
    ],
    timeToAnswer: 20,
    points: 3,
  },
  {
    id: 16,
    question: 'Czy Composition API w Vue 3 zastępuje Options API?',
    answer: [16],
    options: [
      'Tak, zastępuje Options API',
      'Nie, Options API zostało zdezaktualizowane w Vue 3',
      'Nie, to alternatywa, nie zastępstwo',
      'Może, to zależy od przypadku użycia',
    ],
    timeToAnswer: 20,
    points: 3,
  },
  {
    id: 17,
    question: `Popraw ten kod Vue 3 dla watchEffect: <pre ${style}><code>watchEffect(() => { console.log(props.title); });</code></pre> Załóż, że 'props' nie jest zdefiniowane.`,
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
    question: 'Czy Vue Router może być używany do dynamicznego dopasowywania tras w Vue 3?',
    answer: [5],
    options: [
      'Tak, Vue Router obsługuje dynamiczne dopasowywanie tras',
      'Nie, Vue Router nie obsługuje dynamicznych tras',
      'Nie, użyj Vue Route Matcher zamiast Vue Router',
      'Może, to zależy od przypadku użycia',
    ],
    timeToAnswer: 20,
    points: 2,
  },
  {
    id: 19,
    question: `Oceń, czy ta składnia Vue 3 dla v-slot jest poprawna: <pre ${style}><code>&lt;template v-slot:header="{ item }"&gt;{{ item.title }}&lt;/template&gt;</code></pre>`,
    answer: [5],
    options: [
      'Tak, jest poprawna',
      'Nie, użyj slot-scope zamiast v-slot',
      'Nie, użyj v-slot::header="{ item.title }"',
    ],
    timeToAnswer: 120,
    points: 2,
  },
  {
    id: 20,
    question: 'Czy Vue 3 wspiera TypeScript "out of the box"?',
    answer: [14],
    options: [
      'Nie, obsługa TypeScript musi być dodana osobno',
      'Tak, Vue 3 ma wbudowaną obsługę TypeScript',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 21,
    question: `Zidentyfikuj błąd w tej metodzie Vue 3: <pre ${style}><code>methods: {
      increment() {
         this.counter += 1
          }
    }</code></pre> Zakładając, że 'counter' nie jest zdefiniowany w 'data'.`,
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
    question: 'Czy funkcje `provide` i `inject` mogą być używane do wstrzykiwania zależności w Vue 3?',
    answer: [9],
    options: [
      'Nie, provide i inject nie są częścią Vue 3',
      'Nie, provide i inject są przeznaczone tylko dla natywnych elementów HTML',
      'Może, to zależy od przypadku użycia',
      'Tak, provide i inject są używane do wstrzykiwania zależności',
      'Tak, ale tylko przy użyciu zewnętrznych bibliotek',
    ],
    timeToAnswer: 15,
    points: 2,
  },
  {
    id: 23,
    question: `Sprawdź, czy to jest prawidłowy sposób deklarowania obiektu reaktywnego w Vue 3: <pre ${style}><code>const state = reactive({ count: 0 });</code></pre>`,
    answer: [5],
    options: [
      'Tak, to poprawny sposób deklarowania obiektu reaktywnego',
      'Nie, użyj createRefObj zamiast reactive',
      'Nie, użyj reactiveObj zamiast reactive',
    ],
    timeToAnswer: 30,
    points: 2,
  },
  {
    id: 24,
    question: 'Czy dyrektywa `v-for` jest używana w Vue 3 do renderowania listy elementów?',
    answer: [0],
    options: [
      'Nie, v-model jest używane do renderowania list',
      'Nie, v-for jest zdezaktualizowane w Vue 3',
      'Nie, v-for jest przeznaczone tylko do renderowania pojedynczego elementu',
      'Nie, v-for jest przeznaczone tylko do renderowania zakresu liczb',
      'Nie, v-map jest używane do renderowania list',
      'Tak, v-for jest używane do renderowania list',
      'Tak, ale v-for jest używane do renderowania pojedynczego elementu',
    ],
    timeToAnswer: 30,
    points: 2,
  },
  {
    id: 25,
    question: `Ocenić, czy to użycie slotu Vue 3 jest poprawne: <pre ${style}><code>&lt;template #default="{ item }"&gt;{{ item.name }}&lt;/template&gt;</code></pre> w komponencie potomnym.`,
    answer: [5],
    options: [
      'Tak, poprawne użycie nazwanego slotu z zasięgiem',
      'Nie, użyj v-slot zamiast #',
      'Nie, użyj slot-scope zamiast #',
      'Nie, użyj slot zamiast template',
    ],
    timeToAnswer: 60,
    points: 4,
  },
  {
    id: 26,
    question: 'Zdefiniuj komponenty w VueJS.',
    answer: [16],
    options: [
      'Funkcje JavaScript strukturujące elementy HTML.',
      'Style CSS stosowane wyłącznie do szablonów Vue.',
      'Modularne instancje Vue zaprojektowane do wielokrotnego użycia.',
      'Zapytania do bazy danych osadzone w aplikacjach Vue.',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 27,
    question: `Zweryfikuj, czy ta składnia jest poprawna dla ref w szablonie Vue 3: <pre ${style}><code>&lt;div ref="myDiv"&gt;&lt;/div&gt;</code></pre> w sekcji szablonu.`,
    answer: [14],
    options: [
      'Nie, użyj v-ref zamiast ref',
      'Tak, poprawne użycie ref w szablonie',
      'Nie, użyj ::ref zamiast ref',
      'Nie, ref nie jest obsługiwane w Vue 3',
    ],
    timeToAnswer: 60,
    points: 1,
  },
  {
    id: 28,
    question: 'Czy można użyć dyrektywy `v-model` na komponentach niestandardowych w Vue 3?',
    answer: [5],
    options: [
      'Tak, v-model można używać na komponentach niestandardowych',
      'Nie, v-model jest przeznaczone tylko dla natywnych elementów HTML',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 29,
    question: 'Jak można tworzyć komponenty w Vue?',
    answer: [16, 9],
    options: [
      'Korzystając z metody newComponent().',
      'Deklarując instancję Vue za pomocą Vue.createComponent().',
      'Komponent Vue umieszczony jest w jednym dedykowanym pliku z rozszerzeniem `.vue`.',
      'Komponent Vue można zdefiniować jako zwykły obiekt JavaScript zawierający opcje specyficzne dla Vue.',
    ],
    timeToAnswer: 40,
    points: 2,
  },
  {
    id: 30,
    question: 'Czy funkcja `setup` w Composition API Vue 3 jest wywoływana przed czy po tym, jak właściwości pytania komponentu stają się reaktywne?',
    answer: [5],
    options: [
      'Przed, funkcja setup jest wywoływana przed tym, jak właściwości pytania stają się reaktywne',
      'Po, funkcja setup jest wywoływana po tym, jak właściwości pytania stają się reaktywne',
    ],
    timeToAnswer: 25,
    points: 1,
  },
  {
    id: 31,
    question: `Czy to jest poprawny sposób definiowania propa w Vue 3: <pre ${style}><code>&lt;script setup&gt; defineProps({ message: String }); &lt;/script&gt;</code></pre>?`,
    answer: [5],
    options: [
      'Tak, poprawny sposób definiowania propa w skrypcie setup',
      'Nie, propsy powinny być definiowane w opcji questions',
      'Nie, propsy powinny być definiowane w opcji props',
    ],
    timeToAnswer: 40,
    points: 1,
  },
  {
    id: 32,
    question: 'Do czego służą propsy w Vue?',
    answer: [16],
    options: [
      'Tagi HTML w szablonach Vue.',
      'Zmienne ograniczone do lifecycle hook created.',
      'Niestandardowe atrybuty przesyłane z komponentu nadrzędnego do podrzędnego.',
      'Wewnętrzne zmienne zarządzania stanem w instancjach Vue.',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 33,
    question: `Określ, czy ten kod poprawnie używa funkcji teleport w Vue 3: <pre ${style}><code>&lt;teleport to="#endOfBody"&gt;...&lt;/teleport&gt;</code></pre>`,
    answer: [5],
    options: [
      'Tak, poprawne użycie teleportacji do przeniesienia zawartości',
      'Nie, użyj v-teleport zamiast teleport',
      'Nie, <teleport goTo="#endOfBody">...</teleport>',
      'Nie, teleportacja nie jest obsługiwana w Vue 3',
    ],
    timeToAnswer: 120,
    points: 1,
  },
  {
    id: 34,
    question: 'Czy w Vue 3 można tworzyć niestandardową dyrektywę do manipulacji DOM-em?',
    answer: [5],
    options: [
      'Tak, Vue 3 umożliwia tworzenie niestandardowych dyrektyw',
      'Nie, niestandardowe dyrektywy nie są obsługiwane w Vue 3',
      'Tak, ale tylko przy użyciu zewnętrznych bibliotek',
      'Tak, ale tylko przy użyciu wtyczek',
    ],
    timeToAnswer: 15,
    points: 1,
  },
  {
    id: 35,
    question: 'Wyjaśnij przepływ danych między komponentami Vue.',
    answer: [14],
    options: [
      'Biderakcyjny przepływ danych wyłącznie od komponentu podrzędnego do nadrzędnego.',
      'Jednokierunkowy przepływ danych od komponentu nadrzędnego do podrzędnego za pośrednictwem propsów i od komponentu podrzędnego do nadrzędnego poprzez zdarzenia.',
      'Ograniczony przepływ danych ograniczony do komponentów w tej samej hierarchii.',
      'Przepływ danych zachodzi arbitralnie w oparciu o kolejność renderowania komponentu.',
    ],
    timeToAnswer: 60,
    points: 1,
  },
  {
    id: 36,
    question: 'Czy do dyrektywy w Vue można przekazać wiele wartości?',
    answer: [14],
    options: [
      'Tak, oddzielając wartości przecinkami wewnątrz dyrektywy.',
      'Tak, używając tablicy lub obiektu do przekazywania wielu wartości.',
      'Tak, powtarzając dyrektywę dla każdej wartości.',
      'Nie, dyrektywy przyjmują tylko pojedynczą wartość.',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 37,
    question: `Oceń ten kod Vue 3 do filtrowania listy:
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
    gdzie 'filteredList' to obliczana właściwość.`,
    answer: [5],
    options: [
      'Tak, poprawne użycie v-for z obliczaną właściwością',
      'Nie, użyj metody zamiast obliczanej właściwości',
      'Nie, użyj v-for="item in filteredList()"',
      'Nie, użyj v-for="item in filteredList.value"',
    ],
    timeToAnswer: 120,
    points: 1,
  },
  {
    id: 38,
    question: 'Zdefiniuj dyrektywy w kontekście Vue.',
    answer: [9],
    options: [
      'Zewnętrzne skrypty importowane do komponentów Vue.',
      'Specjalne tagi używane do warunkowego renderowania.',
      'Niestandardowe metody do manipulacji danymi w instancjach Vue.',
      'Specjalne tokeny w atrybutach HTML uruchamiające reaktywne zachowanie.',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 39,
    question: `Czy to jest poprawna składnia do leniwego ładowania komponentu w Vue 3: <pre ${style}><code>const LazyComponent = defineAsyncComponent(() => import('./components/LazyComponent.vue'));</code></pre>?`,
    answer: [5],
    options: [
      'Tak, poprawna składnia do leniwego ładowania komponentu',
      'Nie, użyj v-lazy zamiast defineAsyncComponent',
      'Nie, użyj v-lazy zamiast import',
      'Nie, leniwe ładowanie nie jest obsługiwane w Vue 3',
    ],
    timeToAnswer: 120,
    points: 1,
  },
  {
    id: 40,
    question: 'Czy możesz użyć dyrektywy `v-on` do nasłuchiwania na zdarzenia emitowane z komponentu podrzędnego w Vue 3?',
    answer: [5],
    options: [
      'Tak, v-on może nasłuchiwać na zdarzenia emitowane z komponentów podrzędnych',
      'Nie, v-on służy tylko do zdarzeń natywnych DOM',
      'Nie, użyj v-listen zamiast v-on',
      'Nie, v-on jest przestarzałe w Vue 3',
    ],
    timeToAnswer: 30,
    points: 1,
  },
  {
    id: 41,
    question: 'Do czego odnoszą się wiązania atrybutów w Vue?',
    answer: [14],
    options: [
      'Łączenie zewnętrznych plików CSS z komponentami Vue.',
      'Dynamiczna aktualizacja atrybutów HTML na podstawie danych w Vue.',
      'Przypisywanie statycznych wartości do atrybutów HTML.',
      'Tworzenie niestandardowych atrybutów dla szablonów Vue.',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 42,
    question: 'Jaka jest różnica między dyrektywami `v-show` a `v-if` w Vue 3?',
    answer: [5],
    options: [
      'v-show przełącza widoczność bez odmontowywania',
      'v-if przełącza widoczność bez odmontowywania',
      'v-show jest przestarzałe w Vue 3, ponieważ zostało zastąpione przez v-if',
      'v-show jest tylko dla natywnych elementów HTML, v-if jest dla komponentów',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 43,
    question: 'W Vue 3, którą metodę należy użyć do nawigacji programowej za pomocą Vue Router?',
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
    question: 'Sprawdź, czy ta składnia jest poprawna dla globalnego mixin w Vue 3: `Vue.mixin({ ... })`.',
    answer: [14],
    options: [
      'Tak, to jest poprawne',
      'Nie, użyj createApp().mixin() zamiast Vue.mixin()',
      'Nie, mixiny są przestarzałe w Vue 3',
      'Nie, użyj Vue.use() do mixiny',
    ],
    timeToAnswer: 60,
    points: 1,
  },
  {
    id: 45,
    question: 'Jak można dodać treść zastępczą dla slotów w Vue?',
    answer: [14],
    options: [
      'Używając atrybutu slot-fallback.',
      'Podanie domyślnej treści wewnątrz tagów slot.',
      'Zastosowanie dyrektywy v-fallback.',
      'Treść zastępcza nie jest obsługiwana dla slotów w Vue.',
    ],
    timeToAnswer: 30,
    points: 1,
  },
  {
    id: 46,
    question: `Ocen tę konfigurację Vue 3: <pre ${style}><code>&lt;script setup&gt;
    import { ref } from 'vue';
    const isOpen = ref(false);
    &lt;/script&gt;</code></pre> Czy jest to poprawne zdefiniowanie reaktywnego booleana?`,
    answer: [5],
    options: [
      'Tak, poprawne użycie ref do zdefiniowania reaktywnego booleana',
      'Nie, użyj reactive zamiast ref',
      'Nie, wartości boolean nie mogą być reaktywne',
      'Nie, import nie jest konieczny',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 47,
    question: 'Czy dyrektywa `v-model` w Vue 3 jest kompatybilna z niestandardowymi zdarzeniami do dwukierunkowej wiązania danych?',
    answer: [5],
    options: [
      'Tak, v-model może współpracować z niestandardowymi zdarzeniami do dwukierunkowej wiązania danych',
      'Nie, v-model nie obsługuje niestandardowych zdarzeń',
      'Tylko z natywnymi elementami HTML, nie z komponentami',
      'Tak, ale wymaga dodatkowych wtyczek',
    ],
    timeToAnswer: 30,
    points: 1,
  },
  {
    id: 48,
    question: 'Co oznaczają sloty w kontekście Vue?',
    answer: [5],
    options: [
      'Zarezerwowane obszary w szablonach przeznaczone na dynamiczne treści.',
      'Specjalne komponenty Vue przeznaczone wyłącznie do renderowania obrazów.',
      'Słowa kluczowe zarezerwowane dla warunkowego renderowania.',
      'Zewnętrzne biblioteki przeznaczone specjalnie dla animacji w Vue.',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 49,
    question: 'Jaki jest cel dyrektywy `v-once` w Vue 3?',
    answer: [14],
    options: [
      'Renderować komponent tylko raz i go odmontować',
      'Renderować komponent tylko raz i buforować wynik',
      'Renderować komponent tylko raz i buforować wynik, a następnie ponownie renderować w przypadku zmiany danych',
      'Renderować komponent tylko raz i buforować wynik, a następnie ponownie renderować w przypadku zmiany danych, ale tylko raz',
    ],
    timeToAnswer: 20,
    points: 1,
  },
  {
    id: 50,
    question: `Czy ten kod jest poprawny dla niestandardowej dyrektywy Vue 3 do zmiany koloru tekstu: <pre ${style}><code>app.directive('color', {
      mounted(el, binding) {
         el.style.color = binding.value;
           }
        });</code></pre>?`,
    answer: [5],
    options: [
      'Tak, poprawna implementacja niestandardowej dyrektywy do koloru tekstu',
      'Nie, użyj haka created zamiast mounted',
      'Nie, binding.value to nieprawidłowy sposób dostępu do wartości',
      'Nie, niestandardowe dyrektywy nie są obsługiwane w Vue 3',
    ],
    timeToAnswer: 120,
    points: 1,
  },
];