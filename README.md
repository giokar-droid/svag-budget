# Il tuo budget — wizard SVAG

Pagina statica per compilare a distanza le voci di budget del colloquio FIT,
servita da GitHub Pages: https://giokar-droid.github.io/svag-budget/

- **Non conserva dati.** Le risposte restano nel browser di chi compila e partono
  solo quando è lui a mandarle, per e-mail, come JSON.
- **Le voci non si scrivono qui.** `voci.js` è generato da `genera.py` a partire
  dall'elenco `BUDGET_CATS` del Fit Master: una voce nuova si aggiunge lì e si rigenera.
- Link personale: `#salta=rent,lamal,…` nasconde le voci già note. In questa forma nel
  link ci sono solo nomi di voce, mai importi né nomi di persona.
- **Pagina precompilata (v1.4, 04.10.2026):** `#pre=<base64url di "id=importo[:s|m|a];…">`
  mette nella pagina le cifre del colloquio; il cliente le rivede e corregge (etichetta
  «dal colloquio» finché non le tocca), il JSON di ritorno porta `precompilato: true` e
  `modificate: [id…]`. Il frammento dopo `#` resta nel browser e non arriva a GitHub Pages,
  ma **il link contiene gli importi del cliente**: si genera con
  `importa_budget.py --link SIGLA --precompila` e si manda solo a lui. Mai nomi di persona.
