<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Sass

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Zadanie 1. Prosty mixin  (~ 5min - 10min)

Znajdź w pliku `index.html` element `section` o klasie `test-mixin`. Ostyluj elementy wewnątrz zgodnie z opisem ich klas (obramowanie, lewa strona, )
Nastepnie stwórz prosty mixin, który doda do  odpowiedniego elementu pseudoelementy `:before` i `:after`. Niech mixin ma nazwę **clearfix**.

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1. Mixin border  (~ 5min - 10min)
Stwórz mixin, który na podstawie przekazanego do niego parametru - `$font` - ustawi wielkość tekstu dla elementu `header`. Dodatkowo ustawi również `border-radius` na `5px`.

### Zadanie 2. Dialog  (~ 10min - 15min)

Stwórz mixin, o nazwie `dialogBox`, który przyjmuje dwa argumenty - kolor ($backgroundColor) oraz szerokość boksa ($width). Jego zadaniem jest ustawienie styli dla elementu o klasie `dialog` (w pliku `dialog.html`).

```
  width: $width;
  padding: 10px;
  background: $backgroundColor;
  border: 1px solid black;
  margin: 40px auto;
```

Do mixinu dodaj pseudoelement `:after`, który stworzy kwadrat o wymiarach 10x10px, dekorujący boks. Końcowy projekt powinien wyglądać następująco:

![Dialog](images/dialog.png)

Zadanie przetestuj dla backgroundu `green` i `lightgray`, oraz dowolnymi szerokościami.
