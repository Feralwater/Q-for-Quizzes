export const advancedVueQuestions = [
  {
    id: 1,
    question: 'Jakie są korzyści z użycia Composition API w Vue 3?',
    answer: [5, 16],
    options: [
      'Posiada lepszą w inferencji typów i bardziej elastyczną strukturę kodu.',
      'To tylko nowa składnia, aby sprawić, że programiści React poczują się bardziej komfortowo.',
      'Sprawia, że kod staje się bardziej czytelny i wielokrotnego użytku.',
      'Jest szybszy niż Options API.',
      'Jest wolniejszy niż Options API.',
      'Nie ma żadnych korzyści. To tylko nowy sposób pisania kodu.',
      'Nie ma żadnych korzyści w ogóle. To tylko funkcja eksperymentalna.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 2,
    question: 'Co to jest Composition API w Vue 3?',
    answer: [1],
    options: [
      'Composition API to nowa funkcja w Vue 3, która pozwala pisać arkusze CSS bezpośrednio w komponentach Vue.',
      'Composition API Vue 3 to zestaw narzędzi do obsługi żądań HTTP i zarządzania komunikacją sieciową w aplikacjach Vue.',
      'Composition API to funkcja w Vue 3, która umożliwia tworzenie grafiki 3D i animacji w komponentach Vue.',
      'Composition API wprowadza nowy paradygmat tworzenia zapytań do bazy danych i zarządzania trwałością pytań w aplikacjach Vue 3.',
      'Composition API to zestaw interfejsów API, które pozwalają nam tworzyć komponenty Vue, używając zaimportowanych funkcji zamiast deklarowania opcji.',
      'Composition API Vue 3 obejmuje wbudowane wsparcie dla tworzenia doświadczeń rzeczywistości rozszerzonej (AR) bezpośrednio w komponentach Vue.',
      'Composition API to framework w Vue 3 do implementacji technologii blockchain i inteligentnych umów w aplikacjach internetowych.',
    ],
    timeToAnswer: 40,
    points: 5,
  },
  {
    id: 3,
    question: 'Composition API obejmuje:',
    answer: [5, 9, 8],
    options: [
      'Haki cyklu życia – wpinają się w cykl życia komponentu',
      'Zintegrowany edytor kodu - umożliwia programistom pisanie i edytowanie kodu JavaScript bezpośrednio w komponentach Vue.',
      'Funkcję automatycznego generowania dokumentacji na podstawie komentarzy w kodzie komponentu Vue.',
      'Wstrzykiwanie zależności – wykorzystuj system wstrzykiwania zależności Vue przy korzystaniu z reaktywnych interfejsów API.',
      'Moduł do integrowania sztucznej inteligencji (AI) i uczenia maszynowego (ML) bezpośrednio w aplikacjach Vue 3.',
      'Zestawu predefiniowanych komponentów interfejsu użytkownika do tworzenia stylowych i responsywnych interfejsów użytkownika od razu.',
      'API reaktywności – bezpośrednie tworzenie stanów reaktywnych, stanów obliczonych i obserwatorów',
      'Funkcję współpracy w czasie rzeczywistym, umożliwiającą wielu programistom jednoczesną pracę nad tym samym komponentem Vue.',
      'Funkcję automatycznego tłumaczenia kodu komponentu Vue na różne języki programowania, promując zgodność międzyjęzykową.',
    ],
    timeToAnswer: 90,
    points: 5,
  },
  {
    id: 4,
    question: 'Jak można włączyć animacje do aplikacji Vue?',
    answer: [5, 16, 8],
    options: [
      'Do animowania elementu na podstawie stanu liczbowego można użyć obserwatorów.',
      'Aby włączyć animację, dodaj atrybut "magicAnimate" do elementów, które chcesz animować, a Vue automatycznie wygeneruje animację.',
      'Transition i TransitionGroup – komponenty Vue do obsługi animacji wejścia/wyjścia i listy.',
      'Aplikacje Vue obsługują animacje, integrując wtyczkę "VueAnimate", umożliwiając płynne przejścia między różnymi stanami komponentów.',
      'Animacje w Vue można osiągnąć, wywołując metodę "animate()" bezpośrednio w szablonie, określając pożądane właściwości animacji w linii.',
      'Aplikacje Vue zawierają wbudowany animator GIF-ów, który automatycznie animuje statyczne obrazy w komponentach Vue podczas ich renderowania.',
      'Animacje, które są aktywowane przez dodawanie klas CSS.',
      'Możliwość rozszerzenia zdolności animacyjnych Vue poprzez użycie biblioteki "anime.js", która zapewnia prostą integrację dla skomplikowanych animacji w komponentach Vue.',
      'Włączanie animacji do Vue jest takie proste jak użycie dyrektywy "v-animate" na elementach, określenie rodzaju animacji bezpośrednio w szablonie.',
      'Efekty przejścia stosowane poprzez interpolację wartości, takie jak wiązanie stylu komponentu.',
    ],
    timeToAnswer: 120,
    points: 5,
  },
  {
    id: 5,
    question: 'Co to są wtyczki (plugins) w Vue?',
    answer: [14],
    options: [
      'Wtyczki Vue to specjalistyczne narzędzia do tworzenia galerii zdjęć w komponentach Vue, poprawiające prezentację obrazów.',
      'Wtyczki Vue to modułowe fragmenty kodu używane do rozszerzania funkcji na poziomie aplikacji. Mogą być definiowane jako obiekty lub funkcje, obie wymagają funkcji install(). Następnie używana jest z app.use(), umożliwiając dodawanie dodatkowych właściwości.',
      'W Vue wtyczki są głównie przeznaczone do automatyzacji procesu pisania i formatowania dokumentacji dla aplikacji Vue.',
      'Wtyczki Vue to ekskluzywne funkcje, które umożliwiają programistom osadzenie doświadczeń rzeczywistości wirtualnej (VR) bezpośrednio w komponentach Vue.',
      'Wtyczki w Vue pełnią rolę dedykowanego frameworka do implementacji algorytmów sztucznej inteligencji (AI) w sposób niezauważalny w aplikacjach Vue.',
    ],
    timeToAnswer: 30,
    points: 5,
  },
  {
    id: 6,
    question: 'Jak można zwiększyć wydajność aplikacji Vue?',
    answer: [5, 14, 16],
    options: [
      'Wirtualizuj listy: Popraw wydajność renderowania, stosując wirtualizację list, koncentrując się na elementach wewnątrz lub w pobliżu widoku.',
      'Zminimalizuj abstrakcje komponentów: Bądź ostrożny z abstrakcjami, takimi jak komponenty renderless i komponenty wyższego rzędu, aby unikać zbędnych kosztów renderowania, zwłaszcza w dużych listach.',
      'Optymalizuj reaktywność: Zarządzaj wydajnością dla dużych, niezmienialnych struktur pytań, używając płytkich API, takich jak shallowRef() i shallowReactive(), aby zredukować nadmierną reaktywność.',
      'Wirtualizuj duże bloki tekstu: Renderowanie dużych bloków tekstu jest powszechnym źródłem wąskiego gardła wydajności w aplikacjach Vue. Zastosowanie technik wirtualizacji do obsługi rozległych akapitów i dokumentów jest zalecaną strategią optymalizacji.',
      'Przyjmuj nadmierne abstrakcje komponentów: Wprowadzenie licznych komponentów renderless i komponentów wyższego rzędu poprawia wydajność aplikacji Vue, dostarczając dodatkowych warstw abstrakcji dla organizacji kodu.',
      'Rozszerz reaktywność dla poprawy wydajności: Rozbudowa systemu reaktywności, aby obejmować głębsze poziomy struktur pytań, nawet dla małych i prostych komponentów, może znacząco poprawić szybkość i reaktywność aplikacji Vue.',
    ],
    timeToAnswer: 120,
    points: 5,
  },
  {
    id: 7,
    question: 'Co to są dynamiczne komponenty w Vue?',
    answer: [16],
    options: [
      'Dynamiczne komponenty to animowane elementy: Dynamiczne komponenty w Vue są głównie przeznaczone do tworzenia animowanych elementów w aplikacji, dodając dynamiczny charakter do interfejsu użytkownika.',
      'Dynamiczne komponenty obracają się automatycznie: Te komponenty posiadają wbudowaną funkcję, która automatycznie obraca się przez różne widoki, dostarczając animowanego efektu pokazu slajdów bez konieczności kodowania.',
      'Dynamiczne komponenty w Vue pozwalają dynamicznie przełączać się między różnymi komponentami podczas działania, używając elementu <component> z atrybutem is lub dyrektywą v-bind:is.',
      'Dynamiczne komponenty generują losową treść: Dynamiczne komponenty Vue posiadają funkcję generowania losowej treści, oferując unikalne i nieprzewidywalne doświadczenie użytkownika za każdym razem, gdy komponent jest renderowany.',
      'Dynamiczne komponenty kontrolują logikę backendu: Dynamiczne komponenty Vue są odpowiedzialne za zarządzanie logiką backendu i operacjami po stronie serwera, bezproblemowo integrując funkcje frontendu i backendu.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 8,
    question: 'Co to są komponenty asynchroniczne w Vue?',
    answer: [1],
    options: [
      'Komponenty asynchroniczne Vue posiadają funkcję przewidywania zachowania użytkownika i wczytywania komponentów zgodnie z oczekiwanymi interakcjami.',
      'Komponenty asynchroniczne automatycznie obsługują błędy: Te komponenty są wyposażone w automatyczny mechanizm obsługi błędów, rozwiązując problemy bez konieczności explicitej obsługi błędów w kodzie.',
      'Komponenty asynchroniczne kontrolują łączność sieciową: Komponenty asynchroniczne Vue przejmują zarządzanie łącznością sieciową, zapewniając optymalne ładowanie komponentów w oparciu o szybkość internetu użytkownika.',
      'Komponenty asynchroniczne umożliwiają podróż w czasie: Te komponenty wprowadzają funkcję podróżowania w czasie, pozwalając użytkownikom poruszać się między stanami komponentu sprzed i poźniej dla unikalnego doświadczenia przeglądania.',
      'Komponenty asynchroniczne w Vue to komponenty ładowane na żądanie za pomocą funkcji fabrycznej lub Promise. Pomagają w optymalizacji wydajności, odkładając ładowanie komponentów do momentu, gdy są one wymagane.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 9,
    question: 'Jaka jest globalna rejestracja komponentów w Vue?',
    answer: [5],
    options: [
      'Globalna rejestracja komponentów w Vue polega na użyciu Vue.component do globalnej rejestracji komponentu, dzięki czemu staje się on dostępny w całej aplikacji bez potrzeby lokalnej rejestracji w każdym komponencie.',
      'Globalna rejestracja komponentów wymaga stałego połączenia internetowego w celu zapewnienia płynnego globalnego dostępu i renderowania.',
      'Globalna rejestracja umożliwia teleportację komponentów: po globalnej rejestracji komponenty Vue zyskują zdolność teleportowania się do różnych części aplikacji, co zapewnia dynamiczne i interaktywne doświadczenie użytkownika.',
      'Globalna rejestracja umożliwia teleportację komponentów: po globalnej rejestracji komponenty Vue zyskują zdolność teleportowania się do różnych części aplikacji, co zapewnia dynamiczne i interaktywne doświadczenie użytkownika.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 10,
    question: 'Co to jest dynamiczne dopasowywanie tras?',
    answer: [16],
    options: [
      'Dynamiczne dopasowywanie tras pozwala programistom tworzyć trasy, które mogą być dopasowywane tylko do określonych, predefiniowanych wartości.',
      'W dynamicznym dopasowywaniu tras parametry są statyczne i nie mogą być zmieniane na podstawie wejścia użytkownika lub innych dynamicznych czynników.',
      'Dynamiczne dopasowywanie tras w Vue pozwala trasom zawierać dynamiczne segmenty, umożliwiając parametryzację i elastyczne trasowanie w Vue Router.',
      'Nie można przekazywać parametrów dynamicznie w adresie URL za pomocą dynamicznego dopasowywania tras w Vue.js.',
    ],
    timeToAnswer: 40,
    points: 5,
  },
  {
    id: 11,
    question: 'Jak rozwiązać cykliczne zależności między komponentami?',
    answer: [5, 14, 16, 9, 1],
    options: [
      'Przeprojektuj kod: Ponownie ocenić projekt komponentu w celu przerwania cyklicznego związku przez przeprojektowanie kodu i logiki.',
      'Ładowanie komponentów asynchronicznie: Użyj dynamicznych importów lub resolveComponent do leniwego ładowania komponentów i przerwania cyklicznej zależności.',
      'Magazyn zdarzeń: Wprowadź magazyn zdarzeń do komunikacji, umożliwiając komponentom emitowanie i nasłuchiwanie zdarzeń, odłączając je od siebie.',
      'Wstrzykiwanie zależności: Korzystaj z wzorców wstrzykiwania zależności, przekazując zależności jako propsy lub wstrzykując je, aby przerwać bezpośrednie importy.',
      'Refaktoruj kod: Przeorganizuj komponenty tak, aby miały hierarchiczną strukturę lub wprowadź wyższy komponent nadrzędny do zarządzania stanem i działaniami, unikając cyklicznych zależności.',
    ],
    timeToAnswer: 120,
    points: 5,
  },
  {
    id: 12,
    question: 'Jakie są powszechne źródła wycieków pamięci w aplikacjach Vue?',
    answer: [5, 14, 16, 9, 1, 0, 8, 19, 18],
    options: [
      'Słuchacze zdarzeń: Słuchacze zdarzeń mogą powodować wycieki pamięci, jeśli nie są prawidłowo usuwane.',
      'Timery i interwały: Timery i interwały mogą powodować wycieki pamięci, jeśli nie są prawidłowo czyścić.',
      'Zmienne globalne: Zmienne globalne mogą powodować wycieki pamięci, jeśli nie są prawidłowo czyszczone.',
      'Instancje komponentów: Instancje komponentów mogą powodować wycieki pamięci, jeśli nie są prawidłowo niszczone.',
      'Komponent Keep-Alive: Komponent Keep-Alive może powodować wycieki pamięci, jeśli nie jest prawidłowo używany.',
      'Cykliczne odwołania: Cykliczne odwołania mogą powodować wycieki pamięci, jeśli nie są prawidłowo obsługiwane.',
      'Biblioteki zewnętrzne: Biblioteki zewnętrzne mogą powodować wycieki pamięci, jeśli nie są prawidłowo używane.',
      'Duże zestawy danych: Duże zestawy danych mogą powodować wycieki pamięci, jeśli nie są prawidłowo obsługiwane.',
      'Użycie propsów: Użycie propsów może powodować wycieki pamięci, jeśli nie są prawidłowo obsługiwane.',
      'Niezbyt wydajna manipulacja DOM: Nieefektywna manipulacja DOM może powodować wycieki pamięci, jeśli nie jest prawidłowo obsługiwana.',
    ],
    timeToAnswer: 180,
    points: 5,
  },
  {
    id: 13,
    question: 'Jakie są najlepsze praktyki tworzenia dostępnej aplikacji Vue?',
    answer: [5, 14, 16, 9, 1, 0, 8, 19, 23, 18],
    options: [
      'Używaj semantycznych elementów HTML.',
      'Używaj atrybutów ARIA i roli.',
      'Używaj atrybutu tabindex.',
      'Używaj atrybutu alt.',
      'Używaj atrybutu aria-label.',
      'Używaj atrybutu aria-labelledby.',
      'Używaj atrybutu aria-describedby.',
      'Odpowiednio zarządzaj fokusem podczas otwierania i zamykania okien modalnych lub innych dynamicznych treści.',
      'Upewnij się, że tekst ma wystarczający kontrast z tłem dla czytelności.',
      'Upewnij się, że tekst ma wystarczający kontrast z tłem dla czytelności.',
      'Nie trzeba tworzyć dostępnych aplikacji Vue, ponieważ Vue automatycznie obsługuje dostępność.',
    ],
    timeToAnswer: 120,
    points: 5,
  },
  {
    id: 14,
    question: 'Jaka jest różnica między watch a watchEffect?',
    answer: [16],
    options: [
      'Watch jest bardziej wydajny niż watchEffect.',
      'WatchEffect jest bardziej wydajny niż watch.',
      'Watch działa leniwie, podczas gdy watchEffect działa na starcie.',
      'WatchEffect działa leniwie, podczas gdy watch działa na starcie.',
      'Nie ma różnicy między watch a watchEffect.',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 15,
    question: 'Co to jest isRef w Vue 3?',
    answer: [9],
    options: [
      'isRef to funkcja, która sprawdza, czy wartość jest obiektem z reaktywnymi właściwościami.',
      'isRef to funkcja, która sprawdza, czy wartość jest obiektem z reaktywnymi obliczeniami.',
      'isRef to funkcja, która sprawdza, czy wartość jest obiektem z reaktywnym ref.',
      'isRef to funkcja, która sprawdza, czy wartość jest obiektem ref.',
      'wszystkie powyższe',
      'żadne z powyższych',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 16,
    question: 'Co to jest unref w Vue 3?',
    answer: [5],
    options: [
      'unref to funkcja, która zwraca wewnętrzną wartość, jeśli argumentem jest ref, w przeciwnym razie zwraca argument.',
      'unref to funkcja, która zwraca wartość reaktywnego obiektu.',
      'unref to funkcja, która zwraca wartość reaktywnego obliczenia.',
      'unref to funkcja, która zwraca wartość reaktywnego ref.',
      'wszystkie powyższe',
      'żadne z powyższych',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 17,
    question: 'Co to jest toRef w Vue 3?',
    answer: [8],
    options: [
      'toRef to funkcja, która zwraca obiekt ref.',
      'toRef to funkcja, która zwraca reaktywny obiekt.',
      'toRef to funkcja, która zwraca obliczeniowy obiekt.',
      'toRef to funkcja, która zwraca obiekt ref.',
      'wszystkie powyższe',
      'żadne z powyższych',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 18,
    question: 'Co to jest shallowRef w Vue 3?',
    answer: [14],
    options: [
      'shallowRef to funkcja, która zwraca obiekt z reaktywnymi właściwościami.',
      'shallowRef to funkcja, która zwraca płytką wersję ref().',
      'shallowRef to funkcja, która zwraca obliczeniowy obiekt z reaktywnymi właściwościami.',
      'shallowRef to funkcja, która zwraca obiekt z płytkimi reaktywnymi właściwościami.',
      'wszystkie powyższe',
      'żadne z powyższych',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 19,
    question: 'Czy można utworzyć dostosowany ref z wyraźną kontrolą nad śledzeniem zależności i wyzwalaniem aktualizacji?',
    answer: [1],
    options: [
      'Tak, za pomocą createRef',
      'Tak, za pomocą customReference',
      'Tak, za pomocą createReference',
      'Tak, za pomocą implicitRef',
      'Tak, za pomocą customRef',
      'Nie, można używać tylko wbudowanych refów Vue',
    ],
    timeToAnswer: 60,
    points: 5,
  },
  {
    id: 20,
    question: 'Znajdź hook(i), które nie istnieje(ją) w Vue 3',
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
      'wszystkie powyższe',
      'żadne z powyższych',
    ],
    timeToAnswer: 60,
    points: 5,
  },
];