// GENERATO da ~/SVAG-tools/budget_wizard/genera.py — non modificare a mano.
// Fonte: SVAG_Master_v3_27.html
window.SVAG_VOCI = {
 "fonte": "SVAG_Master_v3_27.html",
 "generato": "2026-09-28",
 "categorie": [
  {
   "id": "housing",
   "icon": "🏠",
   "name": "Abitare",
   "items": [
    {
     "id": "rent",
     "label": "Affitto mensile",
     "q": "Quanto paga di affitto?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "mortgage_int",
     "label": "Interessi ipotecari",
     "q": "Se proprietario: interessi annui?",
     "unit": "anno",
     "type": "F"
    },
    {
     "id": "condo",
     "label": "Spese accessorie",
     "q": "Spese condominiali, riscaldamento, acqua?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "electric",
     "label": "Elettricità",
     "q": "Bolletta media mensile?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "maintenance",
     "label": "Manutenzione",
     "q": "Stima annua riparazioni?",
     "unit": "anno",
     "type": "D"
    }
   ]
  },
  {
   "id": "debt",
   "icon": "💳",
   "name": "Prestiti",
   "items": [
    {
     "id": "loan",
     "label": "Rata prestito",
     "q": "Rata mensile prestiti?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "leasing_o",
     "label": "Leasing non auto",
     "q": "Rate leasing beni?",
     "unit": "mese",
     "type": "F"
    }
   ]
  },
  {
   "id": "prev",
   "icon": "🛡️",
   "name": "Previdenza",
   "items": [
    {
     "id": "p3a",
     "label": "Pilastro 3a",
     "q": "Versamento annuo? (max 7.258)",
     "unit": "anno",
     "type": "F"
    },
    {
     "id": "avs_vol",
     "label": "AVS volontari",
     "q": "Contributi AVS volontari annui?",
     "unit": "anno",
     "type": "F"
    }
   ]
  },
  {
   "id": "ins",
   "icon": "📋",
   "name": "Assicurazioni",
   "items": [
    {
     "id": "lamal",
     "label": "Cassa malati base",
     "q": "Premio LAMal mensile?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "lca",
     "label": "Complementare LCA",
     "q": "Premio mensile?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "rc",
     "label": "RC + mobilia",
     "q": "Premio annuo?",
     "unit": "anno",
     "type": "F"
    },
    {
     "id": "pg",
     "label": "Protezione giuridica",
     "q": "Premio annuo?",
     "unit": "anno",
     "type": "F"
    },
    {
     "id": "other_ins",
     "label": "Altre assicurazioni",
     "q": "Vita, viaggio, etc. annuo?",
     "unit": "anno",
     "type": "F"
    }
   ]
  },
  {
   "id": "health",
   "icon": "❤️",
   "name": "Sanitario",
   "items": [
    {
     "id": "franch",
     "label": "Franchigia effettiva",
     "q": "Quanto si paga di tasca propria in un anno prima che la cassa rimborsi (visite, esami, medicine)? Al massimo la franchigia scelta.",
     "unit": "anno",
     "type": "F"
    },
    {
     "id": "copay",
     "label": "Quota parte 10%",
     "q": "Superata la franchigia si paga il 10% di ogni fattura, al massimo 700 all'anno (350 per i figli): quanto in un anno?",
     "unit": "anno",
     "type": "F"
    },
    {
     "id": "dentist",
     "label": "Dentista",
     "q": "Quanto si spende dal dentista in un anno, igiene compresa?",
     "unit": "anno",
     "type": "D"
    },
    {
     "id": "meds",
     "label": "Medicinali / terapie",
     "q": "Medicine o terapie che nessuno rimborsa: quanto al mese?",
     "unit": "mese",
     "type": "D"
    }
   ]
  },
  {
   "id": "food",
   "icon": "🍽️",
   "name": "Cibo e piacere",
   "items": [
    {
     "id": "groceries",
     "label": "Spesa alimentare",
     "q": "Quanto a settimana?",
     "unit": "settimana",
     "type": "F"
    },
    {
     "id": "lunch",
     "label": "Pranzi fuori",
     "q": "Spesa settimanale pranzi lavoro?",
     "unit": "settimana",
     "type": "D"
    },
    {
     "id": "dinner",
     "label": "Cene ristorante",
     "q": "Spesa mensile?",
     "unit": "mese",
     "type": "D"
    },
    {
     "id": "drinks",
     "label": "Aperitivi / bar",
     "q": "Spesa mensile?",
     "unit": "mese",
     "type": "D"
    },
    {
     "id": "coffee",
     "label": "Caffè fuori",
     "q": "Spesa settimanale?",
     "unit": "settimana",
     "type": "D"
    },
    {
     "id": "delivery",
     "label": "Delivery",
     "q": "Spesa mensile?",
     "unit": "mese",
     "type": "D"
    }
   ]
  },
  {
   "id": "life",
   "icon": "✨",
   "name": "Stile di vita",
   "items": [
    {
     "id": "clothing",
     "label": "Abbigliamento",
     "q": "Spesa media mensile?",
     "unit": "mese",
     "type": "D"
    },
    {
     "id": "gym",
     "label": "Palestra / fitness",
     "q": "Abbonamento mensile?",
     "unit": "mese",
     "type": "D"
    },
    {
     "id": "hobby",
     "label": "Hobby",
     "q": "Spesa mensile hobby?",
     "unit": "mese",
     "type": "D"
    },
    {
     "id": "stream",
     "label": "Streaming / media",
     "q": "Tot. abbonamenti mensili?",
     "unit": "mese",
     "type": "D"
    },
    {
     "id": "gifts",
     "label": "Regali",
     "q": "Spesa annua?",
     "unit": "anno",
     "type": "D"
    }
   ]
  },
  {
   "id": "comm",
   "icon": "📱",
   "name": "Comunicazione",
   "items": [
    {
     "id": "phone",
     "label": "Telefono mobile",
     "q": "Abbonamento mensile?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "inet",
     "label": "Internet / TV",
     "q": "Abbonamento mensile?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "serafe",
     "label": "Canone Serafe",
     "q": "335 CHF/anno?",
     "unit": "anno",
     "type": "F"
    }
   ]
  },
  {
   "id": "mobility",
   "icon": "🚲",
   "name": "Mobilità",
   "items": [
    {
     "id": "transit",
     "label": "Mezzi pubblici",
     "q": "Abbonamento Arcobaleno, metà-prezzo o AG?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "bike",
     "label": "Bici / e-bike",
     "q": "Manutenzione, gomme, freni, quota batteria? (e-bike da pendolare: ~400–600/anno)",
     "unit": "anno",
     "type": "F"
    }
   ]
  },
  {
   "id": "vehicle",
   "icon": "🚗",
   "name": "Veicolo",
   "items": [
    {
     "id": "car_lease",
     "label": "Leasing auto",
     "q": "Rata mensile?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "car_ins",
     "label": "Assicurazione auto",
     "q": "Premio annuo?",
     "unit": "anno",
     "type": "F"
    },
    {
     "id": "car_tax",
     "label": "Tassa circolazione",
     "q": "Importo annuo?",
     "unit": "anno",
     "type": "F"
    },
    {
     "id": "fuel",
     "label": "Carburante",
     "q": "Spesa mensile?",
     "unit": "mese",
     "type": "D"
    },
    {
     "id": "car_maint",
     "label": "Manutenzione",
     "q": "Tagliandi annui?",
     "unit": "anno",
     "type": "D"
    },
    {
     "id": "parking",
     "label": "Parcheggio",
     "q": "Posto auto mensile?",
     "unit": "mese",
     "type": "F"
    }
   ]
  },
  {
   "id": "vacation",
   "icon": "✈️",
   "name": "Vacanze",
   "items": [
    {
     "id": "main_vac",
     "label": "Vacanza principale",
     "q": "Budget annuo?",
     "unit": "anno",
     "type": "D"
    },
    {
     "id": "weekends",
     "label": "Weekend / gite",
     "q": "Budget annuo?",
     "unit": "anno",
     "type": "D"
    }
   ]
  },
  {
   "id": "other",
   "icon": "📦",
   "name": "Altro",
   "items": [
    {
     "id": "alimony",
     "label": "Alimenti",
     "q": "Importo mensile?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "emerg",
     "label": "Fondo imprevisti",
     "q": "Quanto mette da parte/mese?",
     "unit": "mese",
     "type": "F"
    },
    {
     "id": "donations",
     "label": "Donazioni",
     "q": "Importo annuo?",
     "unit": "anno",
     "type": "D"
    },
    {
     "id": "educ",
     "label": "Formazione",
     "q": "Spesa annua?",
     "unit": "anno",
     "type": "D"
    },
    {
     "id": "misc",
     "label": "Altro",
     "q": "Altre spese ricorrenti?",
     "unit": "mese",
     "type": "D",
     "note": true
    }
   ]
  },
  {
   "id": "taxes",
   "icon": "🏛️",
   "name": "Imposte",
   "items": [
    {
     "id": "inc_tax",
     "label": "Imposta reddito",
     "q": "Stima o importo annuo?",
     "unit": "anno",
     "type": "F"
    },
    {
     "id": "wealth_tax",
     "label": "Imposta sostanza",
     "q": "Importo annuo?",
     "unit": "anno",
     "type": "F"
    }
   ]
  }
 ]
};
