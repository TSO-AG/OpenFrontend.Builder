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
