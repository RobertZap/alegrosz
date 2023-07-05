# Alegrosz

React - otrzymywanie danych:
    - props - dane przekazywane z komponentu rodzica do komponentu dziecka. 
        Aby przeslac komponent dziecka do komponentu rodzica nalezy wywolac funkcje ktra wywola sie u dziecka
    - state - dane komponentu, przypisany zawsze do komponetu. jesli komponent ma przypisany stan nazywa sie statefull, 
        jesli nie to stateLess. fn + useState/useReduce | class + this.state
    - contextAPI


    preventDefoult - wylaczenie natywnej obslugi strony. 

przyjmowanie danych

Ajax -> fetch(url, {init})

HTTP Verbs/methods:
    - Get
    - Post
    - Put
    - Delete
    - Head

HTTP status codes:
    - 1xx - kody informacyjne
    - 2xx - sukcesy (200,201)
    - 3xx - przekierowania (304)
    - 4xx - bledy klienta (400 - zle dane, 401 - nie jestesmy zalogowani, 402, 403, 404, 405, 418)
    - 5xx - blad backend (500, 501, 502, 503, 504)

API - komunikacja miedzy frontend - backend
Contrackt - zbior zasad, najbardziej popularny RestAPI

RestAPI :
    - zaklada uzycie http
    - oparty o http methods, http status code, endpoints

URL / URI: 
    -https://www.gmail.google.com/search?s="bieszczdy"&limit10#elo

    - https:// - protokul komunikacyjny, szyfrowany
    - www - rodzaj zasobu, strona internetowa
    - gmail - poddomena
    - google - domena
    - com - domena komercyjna 
    - serch - endpoint / path / source (uzywany do RestAPI)
    - ? - zmienne ?="wartosc"
    - & oddzielenie zmiennych
    - # przeniesienie do znacznika o takim id jaki jest podany



Algorytm do edycji: 

    - tworze komponent do edycji (pusty)
    - podpinam do rootera
    - w product detail musze zrobic przekierowanie na komponent edycyjny (Link)
    - w komponencie edycji robie formularz
    - pobieram dane z serwera po ID i wypelniam firmularz
    - uzytkownik po edycji klika w zapisz 
    - wysylamy dane do serwera, robimy przekierowanie na strone tego produktu 
