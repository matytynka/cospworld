# cospworld

## 1. Charakterystyka oprogramowania
### Nazwa skrócona
CospWorld
### Nazwa pełna
Aplikacja internetowa wypożyczalni kostiumów CospWorld
### Krótki opis ze wskazaniem celów
System strony internetowej wypożyczalni kostiumów ma na celu umożliwienie klientom łatwego i wygodnego wypożyczania kostiumów na określony czas. System ma za zadanie usprawnić proces wypożyczania kostiumów poprzez zautomatyzowanie wielu czynności, takich jak sprawdzanie dostępności kostiumów, generowanie potwierdzeń zamówień, przypominanie o terminach zwrotu i obsługę płatności online. Dodatkowo, system ma na celu zapewnienie łatwego zarządzania kontami klientów, obsługę reklamacji oraz generowanie raportów i analiz dla wypożyczalni w celu monitorowania działalności i podejmowania strategicznych decyzji.

## 2. Prawa autorskie
MIT License

Copyright (c) 2023 Martyna Świerszcz

Poniższymi zostaje udzielona zgoda na korzystanie, kopiowanie i modyfikację tego oprogramowania, a także na jego dystrybucję i sublicencjonowanie, pod warunkiem zachowania poniższych informacji o prawach autorskich wraz z tym oprogramowaniem.

Martyna Świerszcz udostępnia oprogramowanie „w stanie, w jakim jest” bez żadnych gwarancji, ani jawnych, ani dorozumianych, w tym między innymi gwarancji przydatności handlowej czy przydatności do określonego celu. W żadnym wypadku autorzy ani posiadacze praw autorskich nie ponoszą odpowiedzialności za jakiekolwiek szkody ani roszczenia wynikłe z korzystania z tego oprogramowania.

## 3. Specyfikacja wymagań
| Identyfikator | Nazwa | Opis | Priorytet | Kategoria |
|--------------|-------|------|-----------|-----------|
| REQ-001 | Rejestracja klienta | System powinien umożliwiać klientom rejestrację konta w celu korzystania z funkcji wypożyczania kostiumów. | 1 | Funkcjonalne |
| REQ-002 | Przeglądanie kostiumów | Klienci powinni móc przeglądać dostępne kostiumy w systemie, obejmujące ich zdjęcia, opisy i ceny. | 1 | Funkcjonalne |
| REQ-003 | Wyszukiwanie kostiumów | Klienci powinni mieć możliwość wyszukiwania kostiumów na podstawie kategorii, tematu, rozmiaru itp. | 1 | Funkcjonalne |
| REQ-004 | Składanie zamówienia | Klienci powinni mieć możliwość składania zamówień na wypożyczenie kostiumów, określając datę rozpoczęcia i zakończenia wypożyczenia. | 1 | Funkcjonalne |
| REQ-005 | System płatności online | System powinien umożliwiać klientom dokonywanie płatności online za wypożyczone kostiumy za pośrednictwem bezpiecznych metod płatności. | 1 | Funkcjonalne |
| REQ-006 | Potwierdzenie zamówienia | Klienci powinni otrzymać automatyczne potwierdzenie zamówienia zawierające szczegóły dotyczące kostiumów, daty wypożyczenia i instrukcje dotyczące odbioru. | 1 | Funkcjonalne |
| REQ-007 | Powiadomienia o terminie zwrotu | System powinien wysyłać powiadomienia klientom przed terminem zwrotu kostiumów, aby poinformować ich o konieczności zwrócenia kostiumów w określonym czasie. | 2 | Funkcjonalne |
| REQ-008 | Zwrot kostiumu | System powinien umożliwiać klientom zgłoszenie zwrotu wypożyczonego kostiumu i aktualizować status wypożyczenia w systemie. | 1 | Funkcjonalne |
| REQ-009 | Zwrot kaucji | Po poprawnym zwrocie kostiumu, system powinien zwracać kaucję klientowi na jego konto. | 1 | Funkcjonalne |
| REQ-010 | Obsługa reklamacji klienta | System powinien umożliwiać klientom zgłaszanie reklamacji dotyczących wypożyczonego kostiumu, takich jak uszkodzenia, braki w zestawie itp. Obsługa wypożyczalni powinna przeprowadzać proces rozpatrywania reklamacji i podejmować odpowiednie działania, takie jak naprawa kostiumu lub zwrot częściowy kosztów. | 1 | Funkcjonalne |
| REQ-011 | Raportowanie i analiza | System powinien generować raporty i analizy dotyczące działalności wypożyczalni, takie jak popularność kostiumów, dochody, trendy itp. | 3 | Funkcjonalne |
| REQ-012 | Bezpieczeństwo danych | System powinien zapewniać odpowiednie zabezpieczenia danych osobowych klientów, takie jak szyfrowanie, uwierzytelnianie i zarządzanie uprawnieniami. | 1 | Pozafunkcjonalne |
| REQ-013 | Responsywność | Strona internetowa powinna być responsywna, dostosowując się do różnych rozmiarów ekranów i urządzeń mobilnych. | 1 | Pozafunkcjonalne |
| REQ-014 | Wydajność | System powinien zapewniać szybką i wydajną obsługę zapytań klientów, minimalizując opóźnienia i czas ładowania strony. | 2 | Pozafunkcjonalne |
| REQ-015 | Intuicyjny interfejs użytkownika | Interfejs użytkownika powinien być łatwy w obsłudze, intuicyjny i przyjazny dla użytkowników, bez zbędnej skomplikowanej nawigacji. | 1 | Pozafunkcjonalne |
| REQ-016 | Reklamacje ze strony wypożyczalni | W przypadku, gdy klient zwraca zepsuty kostium, wypożyczalnia powinna mieć możliwość zgłoszenia reklamacji do klienta. System powinien umożliwiać wypożyczalni proces rozpatrywania reklamacji i podejmowania decyzji dotyczących zwrotu kaucji lub częściowego zwrotu kaucji. | 1 | Funkcjonalne |

## 4. Architektura systemu
### Architektura rozwoju:
* Język programowania: TypeScript
* Framework aplikacyjny: Angular 14
* Interfejs użytkownika: Angular Material (biblioteka Material Design dla Angular)
* Stylizacja interfejsu użytkownika: Tailwind CSS
* System kontroli wersji: Git (korzystając z platformy GitHub)
* Środowisko programistyczne: WSL (Windows Subsystem for Linux) z dystrybucją Ubuntu
* Baza danych: relacyjna baza danych PostgreSQL 12
* Komunikacja z zewnętrznymi usługami: HTTP, RESTful API

### Architektura uruchomieniowa:
* Serwer HTTP: Nginx do obsługi żądań HTTP.
* Serwer aplikacyjny: środowisko uruchomieniowe Node.js w połączeniu z frameworkiem Express.js dla obsługi warstwy serwerowej aplikacji.
* Baza danych: PostgreSQL 12, która może być uruchomiona w kontenerze Docker. Możesz wykorzystać oficjalny obraz PostgreSQL z Docker Hub.
* Docker: Docker służy do tworzenia kontenerów, które mogą zawierać aplikację wraz z jej zależnościami, takimi jak baza danych, i umożliwiają łatwe uruchomienie aplikacji na różnych środowiskach.
* Hosting: Serwer z systemem Linux

## 5. Testy
### Scenariusze testów
1. Scenariusz testowy: Przeglądanie kostiumów
* Cel: Sprawdzenie, czy kostiumy są prawidłowo wyświetlane na stronie przeglądania.
* Kroki:
  * Otwórz stronę przeglądania kostiumów.
  * Zweryfikuj, czy kostiumy są poprawnie wyświetlane.
  * Sprawdź, czy dla każdego kostiumu wyświetlane są odpowiednie informacje, takie jak nazwa, zdjęcie, cena.
  * Upewnij się, że liczba kostiumów na stronie jest zgodna z oczekiwaniami.
  * Kliknij na jeden z kostiumów, aby sprawdzić szczegóły kostiumu.

2. Scenariusz testowy: Zmiana ilości kafelków z kostiumami w jednym rzędzie
* Cel: Przetestowanie funkcjonalności zmiany ilości wyświetlanych kafelków z kostiumami w jednym rzędzie.
* Kroki:
  * Otwórz stronę przeglądania kostiumów.
  * Znajdź opcję zmiany ilości kafelków w jednym rzędzie.
  * Wybierz inną wartość i sprawdź, czy liczba kafelków dostosowuje się zgodnie z wybraną wartością.
  * Upewnij się, że strona jest poprawnie renderowana i dostosowuje się do zmienionej liczby kafelków.

3. Scenariusz testowy: Filtrowanie kostiumów po kategorii
* Cel: Przetestowanie funkcjonalności filtrowania kostiumów po kategorii.
* Kroki:
  * Otwórz stronę przeglądania kostiumów.
  * Znajdź opcję filtrowania kostiumów po kategorii.
  * Wybierz jedną z dostępnych kategorii.
  * Sprawdź, czy wyświetlane są tylko kostiumy z wybranej kategorii.
  * Upewnij się, że liczba kostiumów na stronie jest zgodna z oczekiwaniami po zastosowaniu filtru.

4. Scenariusz testowy: Sortowanie kostiumów po cenie

* Cel: Przetestowanie funkcjonalności sortowania kostiumów po cenie.
* Kroki:
  * Otwórz stronę przeglądania kostiumów.
  * Znajdź opcję sortowania kostiumów po cenie.
  * Wybierz odpowiednią opcję sortowania (rosnąco lub malejąco).
  * Sprawdź, czy kostiumy są sortowane zgodnie z wybranym kryterium.
  * Upewnij się, że kostiumy są prawidłowo wyświetlane w odpowiedniej kolejności.

5. Scenariusz testowy: Wybór liczby kostiumów na jednej stronie
* Cel: Przetestowanie możliwości wyboru liczby kostiumów wyświetlanych na jednej stronie.
* Kroki:
  * Otwórz stronę przeglądania kostiumów.
  * Znajdź opcję wyboru liczby kostiumów na jednej stronie.
  * Wybierz inną wartość.
  * Sprawdź, czy liczba wyświetlanych kostiumów na stronie dostosowuje się do wybranej wartości.
  * Upewnij się, że strona jest poprawnie renderowana i dostosowuje się do zmienionej liczby kostiumów.
