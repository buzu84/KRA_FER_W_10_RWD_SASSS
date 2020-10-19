<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# RWD &ndash; Media Queries

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Zadanie 1. Zmiana tła  (~ 5min - 10min)

W pliku `index.html` zmień tło strony na żółte jeśli szerokość ekranu jest mniejsza niż `420px`, jeśli jest większa niż `420px`
zmień kolor tła na niebieskie.

### Zadanie 2. Mixin  i `@content` (~ 5min - 10min)

Znajdź w pliku `index.html` element `form` o klasie `my-form`.

Stwórz mixin, za pomocą którego będzie można ustawić `placeholder` dla elementów `input` oraz `textarea` w każdej przeglądarce.
Wykorzystaj atrybut `@content`, aby móc przekazać do mixina color tekstu.

Pamiętaj, że w przypadku elementu textarea dodanie odstępu pomiędzy tagiem otwierającym a zamykającym (spacja, enter) powodują, że placeholder nie działa.

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1. Zapytania media queries  (~ 5min - 10min)
Ustaw media queries zgodnie z poniższą tabelą.

| Wielkość ekranu w pikselach | Kolor tła |
| :---: | :---: |
| do 400 | zielony |
| od 400 do 800 | fioletowy |
| ponad 800 | pomarańczowy |


### Zadanie 2. Układ elementów  (~ 5min - 10min)
Stwórz dwa elementy `div` w HTML-u. W pliku Sassa ustaw je obok siebie oraz ustaw im szerokość i wysokość na **300px** oraz kolor i lewy margines na **10px**.	Za pomocą media queries spraw, aby na ekranach mniejszych niż **900px** elementy spadły pod siebie i aby ich szerokość była ustawiona na **100%**.
