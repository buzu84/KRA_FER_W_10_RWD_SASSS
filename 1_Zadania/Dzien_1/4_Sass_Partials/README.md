<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Sass - Partials

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

-------------------------------------------------------------------------------

## Zadanie rozwiązywane z wykładowcą

### Zadanie 1. Organizacja projektu  (~ 10min - 15min)

Stwórz potrzebne foldery i pliki i zorganizuj  według schematu poniżej.
Umieść przykłądowe style według opisu:

```
[folder] scss
    [folder] settings
                _all.scss - zmienne przechowujące rozmiar fonta lub szerokości
                _colors.scss - zmienne z kolorami
    [folder] generic
                _reset.scss - style resetujące
    [folder] elements
                _footer.scss - style dla elementu footer, wykorzystaj wcześniej zdefiniowane zmienne
                _header.scss - style dla elementu header, wykorzystaj wczesniej zdefiniowane zmienne
                _content.scss - style dla elementu article, wykorzystaj wczesniej zdefiniowane zmienne
                _base.scss - style dla całej strony
    main.scss - tylko importy wcześniej stworzonych plików
```

## Zadania do samodzielnego wykonania

### Zadanie 1. Rozdzielanie styli
W folderze `scss` istnieje plik `main.scss`, w którym są zakomentowane style dla strony. Odkomentuj je, a następnie podziel ten plik według schematu z zadania z wykładowcą.
