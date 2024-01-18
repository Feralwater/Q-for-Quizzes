import { style } from '@/assets/questions/codeStyle';

export const intermediateVueQuestions = [
  {
    id: 1,
    question: 'Jak Vue komponenty mogą wzajemnie ze sobą interagować i udostępniać informacje za pomocą zdarzeń?',
    answer: [9],
    options: [
      'Komponenty Vue komunikują się poprzez bezpośrednie wywołania metod, omijając konieczność użycia zdarzeń.',
      'Aby dzielić się danymi między komponentami Vue, używaj zamiast zdarzeń zmiennych globalnych.',
      'Zdarzenia w Vue pozwalają jedynie na jednokierunkową komunikację i nie mogą być używane do interakcji między komponentami.',
      'Komponenty Vue mogą wzajemnie ze sobą interagować i dzielić się informacjami za pomocą zdarzeń poprzez wbudowaną funkcję $emit.',
      'Komponenty Vue muszą zawsze polegać na relacjach rodzic-dziecko do wymiany informacji; zdarzenia nie są konieczne.',
      'Metoda $on w Vue jest używana do emitowania niestandardowych zdarzeń między komponentami.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 2,
    question: 'W jaki sposób różnią się sloty i sloty z zakresem (scoped slots) w Vue.js?',
    answer: [16, 8],
    options: [
      'Sloty i sloty z zakresem to synonimy i mogą być używane zamiennie w Vue.js.',
      'Sloty z zakresem są używane wyłącznie do dystrybucji treści, podczas gdy sloty służą wyłącznie do przekazywania danych.',
      'Slot to placeholder w komponencie potomnym, który jest wypełniany treścią przekazywaną z komponentu nadrzędnego.', // poprawna odpowiedź
      'Sloty są projektowane tylko dla komponentów klasowych, podczas gdy sloty z zakresem są przeznaczone dla komponentów funkcyjnych.',
      'Sloty z zakresem to przestarzała funkcja, a sloty są zalecanym, nowoczesnym podejściem.',
      'Użycie slotów lub slotów z zakresem jest opcjonalne w Vue.js; komponenty mogą skutecznie komunikować się bez nich.',
      'Slot z zakresem umożliwia przekazywanie danych komponentu potomnego do zakresu rodzica i używanie danych w treści slotu.', // poprawna odpowiedź
    ],
    timeToAnswer: 120,
    points: 11,
  },
  {
    id: 3,
    question: 'Jakie modyfikatory zdarzeń oferuje Vue do poprawy obsługi zdarzeń w komponentach?',
    answer: [5, 14, 16, 9, 1, 0],
    options: [
      '.stop: Ten modyfikator jest używany do zatrzymywania propagacji zdarzenia do elementów nadrzędnych. Jest to równoważne wywołaniu event.stopPropagation() w JavaScript.',
      '.prevent: Służy do zapobiegania domyślnej akcji zdarzenia (takiej jak zapobieganie wysłaniu formularza). Jest to podobne do event.preventDefault() w JavaScript.',
      '.capture: Z tym modyfikatorem obsługiwacz zdarzeń jest dodawany w fazie przechwytywania, a nie w fazie bąbelkowania.',
      '.self: Ten modyfikator sprawia, że obsługiwacz zdarzeń jest uruchamiany tylko wtedy, gdy zdarzenie jest wysyłane z elementu, a nie z elementu potomnego.',
      '.once: Zapewnia, że zdarzenie jest uruchamiane tylko raz.',
      '.passive: Modyfikator ten jest używany szczególnie w celu poprawy wydajności na urządzeniach mobilnych, wskazując, że obsługiwacz zdarzeń nie będzie wywoływał preventDefault().',
      '.keep-alive: Modyfikator ten służy do utrzymania komponentu w DOM, zamiast go usuwać, gdy jest usuwany z komponentu nadrzędnego.',
      '.sync: Modyfikator ten służy do aktualizacji wartości prop za pomocą wartości komponentu potomnego.',
    ],
    timeToAnswer: 180,
    points: 10,
  },
  {
    id: 4,
    question: 'Jak warunkowo renderować grupę elementów?',
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
    question: 'Czy możliwe jest łączenie stylów lokalnych i globalnych?',
    answer: [9],
    options: [
      'Nie, niemożliwe jest łączenie stylów lokalnych i globalnych w Vue.js.',
      'Tak, ale tylko w komponentach funkcyjnych.',
      'Tak, ale tylko w komponentach klasowych.',
      'Tak, możliwe jest łączenie stylów lokalnych i globalnych w Vue.js.',
    ],
    timeToAnswer: 30,
    points: 5,
  },
  {
    id: 6,
    question: 'Co to są mixiny (mixins) w Vue?',
    answer: [9],
    options: [
      'Nie ma mixiny w Vue; to funkcja Reacta.',
      'Mixiny to sposób obsługi stanu globalnego w Vue.',
      'Mixiny to sposób przechowywania zmiennych globalnych w Vue.',
      'Mixiny to sposób na rozprowadzanie wielokrotnego użytku funkcji dla komponentów Vue.',
      'Mixiny to sposób na uruchamianie kodu przed utworzeniem instancji Vue.',
      'Mixiny to sposób na uruchamianie kodu po utworzeniu instancji Vue.',
      'Mixiny to sposób na uruchamianie kodu przed zniszczeniem instancji Vue.',
    ],
    timeToAnswer: 40,
    points: 5,
  },
  {
    id: 7,
    question: 'Jakie są główne korzyści z funkcji Teleport w Vue 3?',
    answer: [9],
    options: [
      'Teleport pozwala na przesyłanie danych z komponentu potomnego do komponentu nadrzędnego.',
      'Teleport pozwala na przesyłanie danych z komponentu nadrzędnego do komponentu potomnego.',
      'Teleport pozwala na przesyłanie danych między komponentami rodzeństwa.',
      'Teleport pozwala na renderowanie komponentu w innym miejscu w drzewie DOM.',
    ],
    timeToAnswer: 60,
    points: 6,
  },
  {
    id: 8,
    question: 'Czy możesz opisać funkcję Suspense w Vue 3 i jej zastosowanie?',
    answer: [5],
    options: [
      'Suspense w Vue 3 to funkcja przeznaczona do obsługi operacji asynchronicznych w komponentach, wyświetlając zawartość tymczasową podczas oczekiwania na zakończenie zadania asynchronicznego.',
      'Suspense to funkcja, która pozwala na zarządzanie stanem komponentu.',
      'Suspense to hook, który pozwala na obsługę operacji asynchronicznych w komponencie.',
      'Suspense to sklep, który pozwala na zarządzanie globalnym stanem w komponencie.',
      'Suspense służy do obsługi tylko operacji synchronicznych i wyświetlania zawartości tymczasowej podczas oczekiwania na zakończenie operacji asynchronicznej.',
      'Suspense jest bezużyteczne.',
    ],
    timeToAnswer: 90,
    points: 8,
  },
  {
    id: 9,
    question: 'Wybierz dyrektywy obsługiwane w Vue 3.',
    answer: [5, 1, 0, 8],
    options: [
      'Dyrektywy ogólne',
      'Dyrektywy warunkowe',
      'Dyrektywy parametrowe',
      'Dyrektywy funkcjonalne',
      'Dyrektywy dosłowne',
      'Puste dyrektywy',
      'Dyrektywy niestandardowe',
    ],
    timeToAnswer: 90,
    points: 8,
  },
  {
    id: 10,
    question: `Ocen ten fragment kodu: <pre ${style}>
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
    </pre> Co zostanie wyświetlone w przeglądarce?`,
    answer: [9],
    options: [
      'Nic, ponieważ kod jest niepoprawny',
      'Nic, ponieważ kod jest poprawny, ale warunek jest fałszywy',
      'Błąd',
      'This is a test component',
      'This is a test component i zostanie zgłoszony błąd',
    ],
    timeToAnswer: 200,
    points: 10,
  },
  {
    id: 11,
    question: `Ocen ten fragment kodu: <pre ${style}>
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
    </pre> Co zostanie wyświetlone w przeglądarce?`,
    answer: [16],
    options: [
      'Aktualizacja statusu: inicjowanie Aktualizacja statusu: online',
      'Aktualizacja statusu: Aktualizacja statusu: inicjowanie Aktualizacja statusu: online Aktualizacja statusu: offline',
      'Aktualizacja statusu: Aktualizacja statusu: online',
      'Aktualizacja statusu: inicjowanie Aktualizacja statusu: online',
      'Aktualizacja statusu: Aktualizacja statusu: online Aktualizacja statusu: offline',
      'Aktualizacja statusu: offline',
      'Aktualizacja statusu: Aktualizacja statusu: offline',
    ],
    timeToAnswer: 300,
    points: 25,
  },
];