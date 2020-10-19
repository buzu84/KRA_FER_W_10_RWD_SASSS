<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Sass - Logika

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### Interpolacja i logika (~ 10min - 15min)

Wstaw na stronie kilka nagłówków, np. od **h1** do **h4**. Zapisz za pomocą zmiennej wysokość linii i podstawowy rozmiar tekstu, a następnie zastosuj te style dla całego dokumentu.

Ostyluj nagłówki w taki sposób, aby na podstawie zdefiniowanego rozmiaru tekstu zmieniała się ich wielkość. Wykorzystaj pętle i interpolację.
Oblicz odpowiednio rozmiar każdego nagłówka, pamiętaj o ich hierarchii (**h1** powinien być największy).

Ustaw nagłówkom różne kolory.

Skorzystaj: http://sass-lang.com/documentation/Sass/Script/Functions.html

-------------------------------------------------------------------------------
## Zadania do samodzielnego wykonania

### Zadanie 1. Rysowanie kształtów (~ 5min - 10min)

Napisz mixin o nazwie `drawItem` ,który przyjmuje dwa argumenty - kształt do narysowania, oraz kolor jego tła.

* Jeśli przekazany kształt to `circle` - stworzy koło o wymiarach 100px na 100px
* Jeśli przekazany kształt to `rectangle` - stworzy kwadrat o wymiarach 200px na 200px

Dodaj mixin do elementu `div` o klasie `draw-container`.

### Zadanie 2. Interpolacja i logika (~ 10min - 15min)

Za pomocą pętli określ kolor obramowania dla dziesięciu kontenerów np. elementów `div`. Niech kolor będzie pomarańczowy dla parzystych kontenerów, a niebieski dla nieparzystych.
Określ im **klasy** od ```block_1``` do ```block_10```. Wykorzystaj pętlę.
