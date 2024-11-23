// Lista delle domande con categorie e colori
const questions = [
  { text: "A letto, preferisci dominare o essere dominato?", category: "sessualità" },
  { text: "C'è una persona che conosci, al di fuori di noi, con cui vorresti fare sesso?", category: "sessualità" },
  { text: "Che voto ti daresti come amante?", category: "sessualità" },
  { text: "Con chi faresti una cosa a tre?", category: "sessualità" },
  { text: "Con quale celebrità andresti a letto più di una volta?", category: "sessualità" },
  { text: "Con quale politico andresti a letto?", category: "sessualità" },
  { text: "Cosa ti piace di più dei preliminari?", category: "sessualità" },
  { text: "Da quanto non fai sesso?", category: "sessualità" },
  { text: "Da quanto non ti masturbi?", category: "sessualità" },
  { text: "Di che taglia sono i preservativi che compri?", category: "sessualità" },
  { text: "Faresti sesso con uno sconosciuto per 1000 euro?", category: "sessualità" },
  { text: "Faresti un account only fans?", category: "sessualità" },
  { text: "Faresti uno spogliarello per amici o partner?", category: "sessualità" },
  { text: "Hai concretizzato qualche fantasia sessuale?", category: "sessualità" },
  { text: "Hai mai avuto un orgasmo in sogno?", category: "sessualità" },
  { text: "Hai mai beccato qualcuno masturbarsi o fare sesso?", category: "sessualità" },
  { text: "Hai mai dubitato della tua sessualità?", category: "sessualità" },
  { text: "Hai mai fatto sesso anale?", category: "sessualità" },
  { text: "Hai mai prenotato un hotel solo per fare sesso?", category: "sessualità" },
  { text: "Invieresti foto intime per soldi?", category: "sessualità" },
  { text: "Hai mai finto un orgasmo?", category: "sessualità" },
  { text: "Hai mai fatto sesso con una celebrità?", category: "sessualità" },
  { text: "Hai mai fatto sesso in pubblico?", category: "sessualità" },
  { text: "Hai mai fatto sexting?", category: "sessualità" },
  { text: "Qual è il numero massimo di volte che hai fatto sesso in una notte?", category: "sessualità" },
  { text: "Qual è la tua zona erogena più sensibile?", category: "sessualità" },
  { text: "Ti depili le parti intime?", category: "sessualità" },
  { text: "Ti masturbi?", category: "sessualità" },
  { text: "Ti sei mai masturbato pensando a qualcuno che conosci?", category: "sessualità" },
  { text: "Ti si è mai rotto un preservativo?", category: "sessualità" },
  { text: "Qual è la tua posizione preferita?", category: "sessualità" },
  { text: "Sei mai uscito senza mutande?", category: "sessualità" },
  { text: "Hai mai fatto una cosa a 3?", category: "sessualità" },
  { text: "Usi sex toys?", category: "sessualità" },
  { text: "Ti sei mai registrato mentre facevi sesso?", category: "sessualità" },
  { text: "Qual è stato il tempo più lungo in cui sei stato senza fare sesso?", category: "sessualità" },
  { text: "Quando è stato il tuo primo bacio?", category: "sessualità" },
  { text: "Hai mai praticato sadomaso?", category: "sessualità" },
  { text: "Qual è il posto più strano in cui hai fatto sesso?", category: "sessualità" },
  { text: "Qual è la tua migliore abilità a letto?", category: "sessualità" },
  { text: "Qual è la tua più grande fantasia sessuale?", category: "sessualità" },
  { text: "Tu guardi i porno?", category: "sessualità" },
  { text: "Quante volte hai fatto sesso in un giorno?", category: "sessualità" },
  { text: "Pensi che le dimensioni siano importanti?", category: "sessualità" },
  { text: "Hai mai fatto una videochiamata hot?", category: "sessualità" },
  { text: "Ti sei mai eccitato in pubblico?", category: "sessualità" },
  { text: "Sei mai stato beccato mentre facevi sesso o ti masturbavi?", category: "sessualità" },
  { text: "Hai mai mandato dei nudi?", category: "sessualità" },
];

// Funzione per mescolare l'array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Mescola le domande
const shuffledQuestions = shuffle(questions);

// Applica le domande e le categorie alle tessere
const cards = document.querySelectorAll('.card');
cards.forEach((card, index) => {
  const back = card.querySelector('.back');
  const front = card.querySelector('.front');

  if (shuffledQuestions[index]) {
    const question = shuffledQuestions[index];
    back.textContent = question.text; // Testo della domanda
    back.setAttribute('data-category', question.category); // Categoria
    card.dataset.categoryColor = getComputedStyle(back).backgroundColor; // Salva il colore della categoria
  }

  // Aggiungi il numero iniziale sul lato frontale
  front.textContent = index + 1;
});

// Gestione del click per girare le tessere
cards.forEach(card => {
  const inner = card.querySelector('.inner');
  const front = card.querySelector('.front');
  const back = card.querySelector('.back');

  card.addEventListener('click', () => {
    if (inner.classList.contains('flipped')) {
      // Se la tessera è già girata, torna a mostrare il lato frontale con il colore della categoria
      inner.classList.remove('flipped');
      front.style.backgroundColor = card.dataset.categoryColor; // Applica il colore della categoria
      front.style.color = "white"; // Assicura che il testo sia visibile
    } else {
      // Altrimenti, gira la tessera e mostra il retro
      inner.classList.add('flipped');
      back.style.backgroundColor = card.dataset.categoryColor; // Mantiene il colore della categoria
    }
  });
});
