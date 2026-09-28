# Il tuo budget — wizard SVAG

Pagina statica per compilare a distanza le voci di budget del colloquio FIT,
servita da GitHub Pages: https://giokar-droid.github.io/svag-budget/

- **Non conserva dati.** Le risposte restano nel browser di chi compila e partono
  solo quando è lui a mandarle, per e-mail, come JSON.
- **Le voci non si scrivono qui.** `voci.js` è generato da `genera.py` a partire
  dall'elenco `BUDGET_CATS` del Fit Master: una voce nuova si aggiunge lì e si rigenera.
- Link personale: `#salta=rent,lamal,…` nasconde le voci già note. Nel link ci sono
  solo nomi di voce, mai importi né nomi di persona.
