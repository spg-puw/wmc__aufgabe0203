# Aufgabe Wetter

Aufgabe by [PUW](https://github.com/spg-puw/). Die folgende Aufgabe wurde aus dem [Repository von Koll. Schletz](https://github.com/schletz/Wmc/blob/main/31_JavaScript/30_JSON_Arrays.md#%C3%BCbung-2) übernommen und um Tests ergänzt.

Eine Wetter API liefert Messwerte im JSON Format. Die Stationen haben eine ID, die als Key
dient. Die Messwerte liegen als Array *measurements* vor. Die Reihenfolge der Messwerte kann
beliebig sein. Es wird die maximale und minimale Temperatur des Tages übertragen. Konnte
die Station an einem Tag keine Daten liefern, wird der Tag ohne diesen Datensatz geliefert.

Es soll nun ein Statistikobjekt erstellt werden. Dabei ist das absolute Maximum und Minimum
von Interesse.

## Aufgabe

1. Bearbeite die Datei *aufgabe1.mjs*<br>Die Datei kann mit `npm run start` ausgeführt werden.
2. Analysiere das Objekt *weatherdata* und ermittle das höchste Maximum und das tiefste Minimum
   pro Wetterstation dynamisch im Programmcode.
3. Die Ausgabe des Objektes *statistics* soll der unten angezeigten Ausgabe entsprechen.

Beachte folgende Hinweise:
- Über den `[]` Operator kann dynamisch auf Properties zugegriffen werden.
- Verwende diesen Operator, um die Stationen zu *statistics* hinzuzufügen und um den Namen
  aus *stations* zu lesen.
- Iteriere nur 1x über das Array *measurements*. Lese nicht zuerst die Stationen und gehe dann
  für jede Station durch das Array.
- Mit *Math.min()* bzw. *Math.max()* das gespeicherte absolute Maximum und Minimum neu gesetzt werden.
- Mit *continue* kann die Schleife mit dem nächsten Wert fortgesetzt werden. Das ist zum Prüfen
  von Bedingungen am Anfang der Schleife nützlich. Vermeide *else* im Programmcode und prüfe zu
  Beginn, ob ein Schleifendurchlauf sinnvoll ist.
- Es sollen keine temporären Variablen für Zwischenwerte verwendet werden.
- Array.filter und Array.reduce können natürlich ohne einschränkungen verwendet werden.

## Ausgabe
```text
{"11035":{"name":"Wien - Hohe Warte","min":-2.7,"max":10.2},"11082":{"name":"Gumpoldskirchen","min":-6.3,"max":9.7}}
```

## Testsetup

Es wird *jest* zum Testen verwendet. Das Setup erfolgt:

```sh
npm install
```

Das Programm selber kann mit folgendem Befehl gestartet werden:

```sh
npm run start
```

Anschließend können die Tests mit folgendem Befehl durchlaufen werden:

```sh
npm run test
```
