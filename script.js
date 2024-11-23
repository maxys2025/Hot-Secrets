// Lista delle domande con categorie e colori
const questions = [
  { text: "Qual è lo sport più praticato al mondo?", category: "sport" },
  { text: "Chi ha scoperto la gravità?", category: "scienza" },
  { text: "Quando è stata scoperta l'America?", category: "storia" },
  { text: "Quanti giocatori ci sono in una squadra di calcio?", category: "sport" },
  { text: "Qual è il pianeta più vicino al sole?", category: "scienza" },
  { text: "Chi era Napoleone?", category: "storia" },
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
