let order = []; //ordens aleatórias do jogo
let clickedOrder = [];//ordem dos nossos cliques.
let score = 0;

//cada cor vai ter um número diferente:
// verde = 0
// vermelho = 1
// amarelo = 2
// azul = 3
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');

//criar ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);//pq ele precisa sortear um número entre 0 e 3.
    order[order.length] = colorOrder;
    clickedOrder = [];

    //para acender a cor que corresponde ao número sorteado:
    for(let i in order) {
        let elementColor = createColorElement(order[i]);//qdp chamar a função vou passar o que guardar na variável i;
        lightColor(elementColor, Number(i) + 1);//faz que ele traga o número + 1;
    }
}
//acender a próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}


//checar se os botões clicados são os mesmos da ordem gerada no jogo.
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        } 
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação:' ${score}\n Você acertou! Iniciando próximo nível...`)
        nextLevel();
    }
}

//função para o clique do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);
}
//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2)  {
        return yellow;
    } else if(color == 3) {
        return blue;
    }
}
//função para próximo level do jogo
let nextLevel = () => {
    score++;
    shuffleOrder();
}
// função para gameover
let gameOver = () => {
    alert(`Pontuação: ${score}! \n Fim de jogo! \n Clique em OK para iniciar um novo jogo`);
    order = [];
    clickedOrder = [];
    playGame();
}
//função de início do jogo
let playGame = () => {
    alert("Bem vindo ao Gêneseis! Iniciando novo jogo!");
    score = 0;
    nextLevel();
}
/*green.addEventListener('click', click(0));
red.addEventListener('click', click(1));
yellow.addEventListener('click', click(2));
blue.addEventListener('click', click(3));*/

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);
//inicio do jogo
playGame();