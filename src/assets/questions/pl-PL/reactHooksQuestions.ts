import { style } from '@/assets/questions/codeStyle';

export const reactHooksQuestions = [
  {
    id: 1,
    question: 'Do czego służy hook \'useState\'?',
    answer: [1],
    options: [
      'Deklaruje zmienną stanu z logiką aktualizacji w funkcji redukującej.',
      'Generuje losowe wartości do użycia wewnątrz komponentu.',
      'Automatycznie aktualizuje stan na podstawie zdarzeń zewnętrznych bez żadnego jawnego kodu.',
      'Służy do zarządzania globalnym stanem aplikacji we wszystkich komponentach.',
      'Deklaruje zmienną stanu, którą można bezpośrednio aktualizować.',
      'Deklaruje zmienną stanu, którą nie można bezpośrednio aktualizować.',
      'Jest konieczny tylko przy pracy z komponentami klasowymi, a nie funkcjonalnymi.',
    ],
    timeToAnswer: 40,
    points: 2,
  },
  {
    id: 2,
    question: `Co będzie w konsoli po kliknięciu przycisku + w poniższym kodzie?
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
    timeToAnswer: 140,
    points: 4,
  },
  {
    id: 3,
    question: `Co będzie w konsoli po kliknięciu przycisku + w poniższym kodzie?
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
    timeToAnswer: 140,
    points: 4,
  },
  {
    id: 4,
    question: `Jaka będzie wartość po kliknięciu przycisku 'Increase the number' w poniższym kodzie?
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
    timeToAnswer: 140,
    points: 4,
  },
  {
    id: 5,
    question: `Jaka będzie wartość po kliknięciu przycisku 'Zwiększ liczbę' w poniższym kodzie?
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
    timeToAnswer: 140,
    points: 4,
  },
  {
    id: 6,
    question: `
Ile ponownych renderowań nastąpi po kliknięciu przycisku 'Increase numbers' w poniższym kodzie?
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
    timeToAnswer: 140,
    points: 4,
  },
  {
    id: 7,
    question: 'Czym jest partycjonowanie (batching) w React?',
    answer: [5],
    options: [
      'To proces grupowania wielu aktualizacji stanu w jedną aktualizację.',
      'To proces grupowania wielu aktualizacji stanu w wiele aktualizacji.',
      'To proces grupowania wielu aktualizacji stanu w jedną aktualizację z opóźnieniem.',
      'To proces grupowania wielu aktualizacji stanu w wiele aktualizacji z opóźnieniem.',
    ],
    timeToAnswer: 100,
    points: 4,
  },
  {
    id: 8,
    question: 'Czy istnieje metoda, aby zmusić Reacta do natychmiastowego stosowania aktualizacji synchronicznie?',
    answer: [14],
    options: [
      'Tak, za pomocą \'renderSync(callback)\'',
      'Tak, za pomocą \'flushSync(callback)\'',
      'Tak, za pomocą \'runSync(callback)\'',
      'Tak, za pomocą \'updateSync(callback)\'',
      'Nie, to niemożliwe',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 9,
    question: 'Do czego służy hook \'useReducer\'?',
    answer: [9],
    options: [
      'Generuje losowe wartości do użycia wewnątrz komponentu.',
      'Automatycznie aktualizuje stan na podstawie zewnętrznych zdarzeń bez konieczności pisania jawnego kodu.',
      'Służy do zarządzania globalnym stanem aplikacji we wszystkich komponentach.',
      'Deklaruje zmienną stanu z logiką aktualizacji wewnątrz funkcji reducer.',
      'Deklaruje zmienną stanu, którą można aktualizować bezpośrednio.',
      'Deklaruje zmienną stanu, której nie można aktualizować bezpośrednio.',
      'Jest konieczny tylko przy pracy z komponentami klasowymi, a nie funkcjonalnymi.',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 10,
    question: 'Do czego służy hook \'useContext\'?',
    answer: [9],
    options: [
      'Context pozwala manipulować historią przeglądarki. useContext czyta i subskrybuje kontekst.',
      'Context pozwala pobierać pytania z zewnętrznego API. useContext czyta i subskrybuje kontekst.',
      'Context pozwala tworzyć i zarządzać stanem w komponentach klasowych. useContext czyta i subskrybuje kontekst.',
      'Context pozwala komponentowi otrzymywać informacje od odległych rodziców bez przekazywania ich jako props. useContext czyta i subskrybuje kontekst.',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 11,
    question: 'Do czego służy hook \'useRef\'?',
    answer: [1],
    options: [
      'React Hook, który pozwala tworzyć globalny stan między komponentami.',
      'React Hook, który pozwala wykonywać żądania HTTP i obsługiwać pobieranie pytań.',
      'React Hook, który pozwala definiować metody cyklu życia w komponentach funkcjonalnych.',
      'React Hook, który pozwala zarządzać trasowaniem i nawigacją w Twojej aplikacji React.',
      'React Hook, który pozwala odwołać się do wartości, która nie jest potrzebna do renderowania.',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 12,
    question: 'Do czego służy hook \'useImperativeHandle\'?',
    answer: [0],
    options: [
      'React Hook, który pozwala dostosować uchwyt udostępniany jako ref i zarządzać trasowaniem i nawigacją w Twojej aplikacji React.',
      'React Hook, który pozwala wykonywać żądania HTTP i obsługiwać pobieranie pytań.',
      'React Hook, który pozwala definiować metody cyklu życia w komponentach funkcjonalnych.',
      'React Hook, który pozwala zarządzać trasowaniem i nawigacją w Twojej aplikacji React.',
      'React Hook, który pozwala dostosować stan komponentu i cykl życia komponentu.',
      'React Hook, który pozwala dostosować uchwyt udostępniany jako ref.',
      'React Hook, który pozwala odwołać się do wartości, która nie jest potrzebna do renderowania.',
    ],
    timeToAnswer: 45,
    points: 4,
  },
  {
    id: 13,
    question: 'Do czego służy hook \'useEffect\'?',
    answer: [1],
    options: [
      'React Hook, który pozwala tworzyć globalny stan między komponentami.',
      'React Hook, który pozwala wykonywać żądania HTTP i obsługiwać pobieranie pytań.',
      'React Hook, który pozwala definiować metody cyklu życia w komponentach funkcjonalnych.',
      'React Hook, który pozwala zarządzać trasowaniem i nawigacją w Twojej aplikacji React.',
      'React Hook, który pozwala synchronizować komponent z systemem zewnętrznym.',
      'React Hook, który pozwala dostosować stan komponentu i cykl życia komponentu.',
      'React Hook, który pozwala dostosować uchwyt udostępniany jako ref.',
      'React Hook, który pozwala odwołać się do wartości, która nie jest potrzebna do renderowania.',
      'Żaden z powyższych',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 14,
    question: 'Do czego służy hook \'useLayoutEffect\'?',
    answer: [5],
    options: [
      'To wersja useEffect, która wywołuje się przed ponownym malowaniem ekranu przeglądarki.',
      'To wersja useEffect, która wywołuje się po ponownym malowaniu ekranu przeglądarki.',
      'To wersja useEffect, która wywołuje się po ponownym malowaniu ekranu przeglądarki z opóźnieniem.',
      'To wersja useEffect, która wywołuje się przed ponownym malowaniem ekranu przeglądarki z opóźnieniem.',
      'To wersja useEffect, która wywołuje się przed ponownym malowaniem ekranu przeglądarki z opóźnieniem i pozwala manipulować historią przeglądarki.',
      'Żaden z powyższych',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 15,
    question: 'Do czego służy hook \'useInsertionEffect\'?',
    answer: [16],
    options: [
      'Pozwala usuwać elementy z drzewa DOM po tym, jak wystąpią jakiekolwiek efekty układu.',
      'Pozwala wstawiać elementy do drzewa DOM po tym, jak wystąpią jakiekolwiek efekty układu.',
      'Pozwala wstawiać elementy do drzewa DOM przed wystąpieniem jakichkolwiek efektów układu.',
      'To wersja useEffect, która wywołuje się przed ponownym malowaniem ekranu przeglądarki z opóźnieniem.',
      'To wersja useEffect, która wywołuje się po ponownym malowaniu ekranu przeglądarki z opóźnieniem.',
      'Żaden z powyższych',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 16,
    question: `Ile ponownych renderowań nastąpi po kliknięciu przycisku 'Increase numbers' w poniższym kodzie?
<pre ${style}><code>
      const Counter = () => {
          const [count, setCount] = useState(0);
          const [number, setNumber] = useState(0);
          const [items, setItems] = useState([]);
      
        useEffect(() => {
            console.log('useEffect');
            
            setCount(prevCount => prevCount + 5);
            setItems(prevItems => [...prevItems, 'item']);
            
            });

      return (
        &lt;&gt;
            &lt;button onClick={() => setNumber(1)}&gt;Increase numbers&lt;/button&gt;
        &lt;/&gt;
      )}
</code></pre>`,
    answer: [16],
    options: [
      '0',
      '1',
      '2',
      '3',
      '4',
      'to będzie nieskończona pętla',
    ],
    timeToAnswer: 140,
    points: 4,
  },
  {
    id: 17,
    question: `Ile ponownych renderowań nastąpi po kliknięciu przycisku 'Increase numbers' w poniższym kodzie?
<pre ${style}><code>
      const Counter = () => {
          const [count, setCount] = useState(0);
          const [number, setNumber] = useState(0);
          const [items, setItems] = useState([]);
      
        useEffect(() => {
            console.log('useEffect');
            
            setCount(prevCount => prevCount + 5);
            setItems(prevItems => [...prevItems, 'item']);
            
            }, []);

      return (
        &lt;&gt;
            &lt;button onClick={() => setNumber(1)}&gt;Increase numbers&lt;/button&gt;
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
      'to będzie nieskończona pętla',
    ],
    timeToAnswer: 140,
    points: 4,
  },
  {
    id: 18,
    question: `Co robi ten kod 'return () => { connection.disconnect(); };'?
<pre ${style}><code>
     function ChatRoom({ roomId }) {
        const [serverUrl, setServerUrl] = useState('https://localhost:1234');

        useEffect(() => {
          const connection = createConnection(serverUrl, roomId);
          connection.connect();
          
          return () => {
            connection.disconnect();
          };
        }, [serverUrl, roomId]);
        // ...
    }
</code></pre>`,
    answer: [14, 16],
    options: [
      'Nic, to jest błędny kod',
      'To funkcja czyszczenia, która uruchamia się przy odmontowaniu komponentu.',
      'To funkcja czyszczenia, która uruchamia się po każdym ponownym renderowaniu z zmienionymi zależnościami.',
      'To funkcja czyszczenia, która uruchamia się przy montowaniu komponentu.',
      'Ustawia zmienną stanu serverUrl na wartość roomId.',
      'Ustawia zmienną stanu roomId na wartość serverUrl.',
    ],
    timeToAnswer: 60,
    points: 4,
  },
  {
    id: 19,
    question: 'Kiedy zaleca się użycie hooka \'useLayoutEffect\'?',
    answer: [5],
    options: [
      'Kiedy musisz wykonać pomiar elementów DOM przed malowaniem przeglądarki.',
      'Kiedy musisz dokonywać mutacji elementów DOM po malowaniu przeglądarki.',
      'Kiedy musisz dokonywać mutacji elementów DOM po malowaniu przeglądarki z opóźnieniem.',
      'Kiedy musisz dokonywać mutacji elementów DOM przed malowaniem przeglądarki z opóźnieniem.',
      'Nigdy nie zaleca się używania tego haka.',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 20,
    question: 'Dlaczego nie zaleca się używania hooka \'useLayoutEffect\'?',
    answer: [16],
    options: [
      'Ponieważ useLayoutEffect może poprawić wydajność. Lepiej używaj useEffect, gdy to możliwe.',
      'Ponieważ useLayoutEffect może zaszkodzić doświadczeniu użytkownika. Lepiej używaj useEffect, gdy to możliwe.',
      'Ponieważ useLayoutEffect może zaszkodzić wydajności. Lepiej używaj useEffect, gdy to możliwe.',
      'Zawsze zaleca się używanie tego haka.',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 21,
    question: 'Do czego służy hook \'useMemo\'?',
    answer: [9],
    options: [
      'useMemo to React Hook, który pozwala na używanie większej ilości pamięci w Twojej aplikacji.',
      'useMemo to React Hook, który pozwala tworzyć globalny stan między komponentami.',
      'useMemo to React Hook, który pozwala wykorzystywać pamięć podręczną przeglądarki.',
      'useMemo to React Hook, który pozwala buforować wynik obliczeń między ponownymi renderowaniami.',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 22,
    question: 'Do czego służy hook \'useCallback\'?',
    answer: [14],
    options: [
      'useCallback to React Hook, który pozwala na używanie większej ilości pamięci w Twojej aplikacji.',
      'useCallback to React Hook, który pozwala buforować definicję funkcji między ponownymi renderowaniami.',
      'useCallback to React Hook, który pozwala wykorzystywać pamięć podręczną przeglądarki.',
      'useCallback to React Hook, który pozwala buforować wynik obliczeń między ponownymi renderowaniami.',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 23,
    question: `Czy zobaczymy 'message' w konsoli po kliknięciu przycisku 'Click me' w poniższym kodzie?
<pre ${style}><code>
     function ChatRoom({ roomId }) {
        const [serverUrl, setServerUrl] = useState('https://localhost:1234');
        
        const styles = {
            color: 'red',
        };

        useEffect(() => {
              console.log('message');
        }, [styles]);
        
        return (
            &lt;&gt;
                &lt;button onClick={() => setServerUrl('')}&gt;Click me&lt;/button&gt;
            &lt;/&gt;
        );
    }
</code></pre>`,
    answer: [5],
    options: [
      'Tak, 1 raz',
      'Tak, 2 razy',
      'Tak, 3 razy',
      'Nie',
    ],
    timeToAnswer: 140,
    points: 4,
  },
  {
    id: 24,
    question: 'Do czego służy hook \'useTransition\'?',
    answer: [9],
    options: [
      'useTransition to React Hook, który pozwala buforować definicję funkcji między ponownymi renderowaniami.',
      'useTransition to React Hook, który pozwala wykorzystywać pamięć podręczną przeglądarki.',
      'useTransition to React Hook, który pozwala buforować wynik obliczeń między ponownymi renderowaniami.',
      'useTransition to React Hook, który pozwala aktualizować stan bez blokowania interfejsu użytkownika.',
      'useTransition to React Hook, który pozwala opóźniać renderowanie komponentu.',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 25,
    question: 'Do czego służy hook \'useDeferredValue\'?',
    answer: [0],
    options: [
      'useDeferredValue to React Hook, który pozwala buforować definicję funkcji między ponownymi renderowaniami.',
      'useDeferredValue to React Hook, który pozwala wykorzystywać pamięć podręczną przeglądarki.',
      'useDeferredValue to React Hook, który pozwala buforować wynik obliczeń między ponownymi renderowaniami.',
      'useDeferredValue to React Hook, który pozwala opóźniać renderowanie komponentu.',
      'useDeferredValue to React Hook, który pozwala aktualizować stan bez blokowania interfejsu użytkownika.',
      'useDeferredValue to React Hook, który pozwala odkładać aktualizację części interfejsu użytkownika.',
    ],
    timeToAnswer: 40,
    points: 4,
  },
  {
    id: 26,
    question: 'Gdzie możemy używać hooków Reacta?',
    answer: [5, 16],
    options: [
      'W funkcjonalnych komponentach Reacta.',
      'W klasowych komponentach Reacta.',
      'W niestandardowych hookach.',
      'Wszystkie z powyższych.',
      'Żadne z powyższych.',
    ],
    timeToAnswer: 40,
    points: 2,
  },
];