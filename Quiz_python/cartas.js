let currentRuleIndex = 0;
let canFlip = true;
const cardContents = [
    "prenda : beije um amigo(a) !",
    "prenda :  fale quem você nao goste da sala !",
    "prenda : faça um pix de 5 reais para o dono do jogo !",
    "prenda : corra no corredor igual o naruto!",
    "prenda :  entre em alguma sala e ver com o professor se ele tem ferro de passar roupa !",
    "prenda : Ligar para o ex ou para a ex e dizer “Oi, sumido(a)!",
    "prenda : fique 10 minutos fazendo live NPC, para todos da sala !",
    "prenda : vire duas cartas !",
    "prenda : troque de tenis com um colega até o fim da aula !",
    "prenda : carta coringa escolha uma pessoa para fazer alguma coisa no seu lugar (qualquer coisa)!",
    "prenda : cante uma musica da pablo vittar para todos nós!",
    "prenda : Diga o alfabeto de trás para frente!",
    "prenda : Dê um abraço em alguém!",
    "prenda : Faça uma dança maluca!",
    "prenda : escolha mais três cartas !",
    "prenda : Conte uma verdade engraçada sobre você!",
    "prenda : carta coringa! (bote alguém para trocar de camisa com outra pessoa) ",
    "prenda : Cante racionais",
    "prenda : Faça uma mímica de um body !",
    "prenda : Faça uma declaração de amor a um objeto inanimado!",
    "prenda : ligue para alguém pra passar trote !",
    "prenda : nada se livrou!"
];


const cards = document.querySelectorAll('.card');
const resetButton = document.getElementById('resetButton'); // Botão de reinício

cards.forEach((card) => {
    card.addEventListener('click', () => toggleCard(card));
    createCardStructure(card);
});

// Adicionar um ouvinte de evento ao botão de reinício
resetButton.addEventListener('click', () => {
    resetGame();
});

function createCardStructure(card) {
    const cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    const cardFront = document.createElement('div');
    cardFront.classList.add('card-front');
    cardFront.innerText = 'prenda';

    const cardBack = document.createElement('div');
    cardBack.classList.add('card-back');
    cardBack.style.display = 'none'; // Oculta o conteúdo inicialmente

    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
}

function toggleCard(card) {
    if (!canFlip || card.classList.contains('flipped')) {
        return;
    }

    const cardBack = card.querySelector('.card-back');

    const randomIndex = Math.floor(Math.random() * cardContents.length);
    cardBack.textContent = cardContents[randomIndex];

    cardBack.style.display = 'block';
    card.classList.add('flipped');
    cardContents.splice(randomIndex, 1);

    if (cardContents.length === 0) {
        canFlip = false;
    }
}

function resetGame() {
    canFlip = true;
    currentRuleIndex = 0;
    
    // Crie uma cópia embaralhada do array original de cartas
    const shuffledCardContents = shuffleArray([...CardContents]);
    
    // Distribua as cartas recriando sua estrutura e conteúdo
    cards.forEach((card) => {
        const cardBack = card.querySelector('.card-back');
        cardBack.style.display = 'none';
        card.classList.remove('flipped');
        
        // Remova o último item de shuffledCardContents e defina-o como o conteúdo da carta
        const rule = shuffledCardContents.pop();
        cardContents.push(rule);
        cardBack.textContent = rule;
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Copie o array original de cartas
const CardContents = [
    "prenda : beije (SELINHO) de lingua um amigo(a) !!",
    "prenda :  fale quem você nao goste da sala !",
    "prenda : faça um pix de 5 reais para o dono do jogo !",
    "prenda : corra no corredor igual o naruto!",
    "prenda :  entre em alguma sala e ver com o professor se ele tem ferro de passar roupa !",
    "prenda : Ligar para o ex ou para a ex e dizer “Oi, sumido(a)!",
    "prenda : fique 10 minutos fazendo live NPC, para todos da sala !",
    "prenda : Tire suas meias com a boca !",
    "prenda : troque de tenis com um colega até o fim da aula !",
    "prenda : carta coringa escolha uma pessoa para fazer alguma coisa no seu lugar (qualquer coisa)!",
    "prenda : cante uma musica da pablo vittar para todos nós!",
    "prenda : Diga o alfabeto de trás para frente!",
    "prenda : Dê um abraço em alguém!",
    "prenda : Faça uma dança maluca!",
    "prenda : escolha mais três cartas !",
    "prenda : Conte uma verdade engraçada sobre você!",
    "prenda : carta coringa! (bote alguém para trocar de camisa com outra pessoa) ",
    "prenda : Cante a racionais",
    "prenda : Faça uma mímica de um body !",
    "prenda : Faça uma declaração de amor a um objeto inanimado!",
    "prenda : ligue para alguém pra passar trote !",
    "prenda : nada se livrou!"
];

// Inicialize o jogo
resetGame();
