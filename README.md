# OpenFrontend.Builder

## Vorlagen

Der Builder speichert Vorlagen mit `window.localStorage` im Browser. Jede Person
erhält dadurch ihre eigenen Vorlagen, sofern sie ein eigenes Gerät oder
Browserprofil verwendet. Die Vorlagen gehören immer zur gleichen Origin
(Protokoll, Host und Port), werden nicht zwischen Browsern oder Geräten
synchronisiert und können beim Löschen der Browserdaten verloren gehen.

Nur **Vorlage speichern** schreibt den aktuellen Stand dauerhaft in den
Browser-Speicher. **Vorlage laden** stellt den zuletzt gespeicherten Stand der
ausgewählten Vorlage wieder her. Mit **Vorlage löschen** kann die ausgewählte
Vorlage nach einer Sicherheitsabfrage aus dem Browser-Speicher entfernt werden.

**Vorlage exportieren** lädt die ausgewählte Vorlage als versionierte
`*.openfrontend-template.json`-Datei herunter. Die Datei enthält den Namen, die
aktive Variante und alle Designwerte. Über **Vorlage importieren** kann eine
solche Datei geprüft, im Browser gespeichert und direkt geladen werden.
Bestehende Vorlagen mit demselben Namen werden nur nach einer Bestätigung
überschrieben. Der frühere SCSS-Export wird nicht mehr verwendet.

## Desktop- und Mobile-Ansicht

Mit den Buttons **Desktop** und **Mobile** oben im Builder lässt sich die
Vorschau umschalten. Die Mobile-Ansicht zeigt die Seite in einem Smartphone-Rahmen
mit 390 × 844 px, damit die mobilen Media Queries wie auf einem echten Gerät
greifen. Bei wenig Platz wird das ganze Gerät verkleinert dargestellt.
Änderungen im Builder werden live in die Mobile-Vorschau übertragen, auch wenn
sie noch nicht als Vorlage gespeichert sind.

## Version

Unten im Builder-Panel wird die aktuelle Version angezeigt. Sie stammt aus dem
`?v=`-Parameter von `js/builder.js` in `index.html` und dient gleichzeitig als
Cache-Buster für `css/builder.css` und `js/builder.js`.

Bei jeder Änderung am Builder wird die Version an beiden Stellen in
`index.html` erhöht (Semantic Versioning):

- **Patch** (`1.0.0` → `1.0.1`): Fehlerbehebungen und kleine Anpassungen
- **Minor** (`1.0.0` → `1.1.0`): neue Funktionen
- **Major** (`1.0.0` → `2.0.0`): inkompatible Änderungen, z. B. am Vorlagen- oder Exportformat
