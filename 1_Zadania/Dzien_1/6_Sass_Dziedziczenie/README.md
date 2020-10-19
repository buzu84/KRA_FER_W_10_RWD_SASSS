<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# Sass

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadanie rozwiązywane z wykładowcą

### 1. Clearfix jeszcze raz (~ 5min - 10min)

Znajdź w pliku `index.html` element `section` o klasie `test-mixin`. Ostyluj elementy wewnątrz zgodnie z opisem ich klas (obramowanie, lewa strona, )
Nastepnie stwórz za pomocą placeholdera sass - `%` regułę dla clearfix. Clearfx ma dodawać do odpowiedniego elementu pseudoklasy `:before` i `:after`.
Wykrzystaj dyrektywę `@extend` do roszerzenia poszczególnych elementów o ten placeholder.

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1. Dziedziczenie  (~ 5min - 10min)
W prezentacji rozmawialiśmy o problemach związanych z extend. Omawialiśmy następujące problemy:
* z niezamierzonymi stylami, każda **klasa** ```error``` była podkreślana i zmieniała kolor przy najeżdżaniu kursorem,
* z niezamierzonymi i zbędnymi selektorami.
Spróbuj naprawić oba te problemy występujące w kodzie poniżej.
Dla ułatwienia, możesz dopisać do tego zadania HTML.
```CSS
#admin .nav a {
  color: #333;
}
a{
  color: #666;
}
#demo .body .link {
  @extend a;
}
```

### Zadanie 2. Placeholder (~ 10min - 15min)

Znajdź w pliku `index.html` element `section` o klasie `container`.
Stwórz w niej trzy boksy reprezentujące: success, error i info.

![Placeholder](images/placeholder.jpg)

Ostyluj je za pomocą Sass. Spróbuj wykorzystać w tym zadaniu **placeholder**, aby nie generować dodatkowej reguły w CSS. Niech Twój kod HTML wygląda w następująco:

```JavaScript
<div class="success">success</div>

<div class="error">error</div>

<div class="info">info</div>
```
