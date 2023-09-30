const questions = [
    {
        "pergunta": "O que é um firewall e qual é sua função principal na segurança de redes?",
        "respostas": ["a) Um firewall é um dispositivo de entrada de dados.", "b) Um firewall é um programa de processamento de texto.", "c) Um firewall é um sistema de segurança que controla o tráfego de rede."],
        "resposta_correta": "c"
    },
    {
        "pergunta": "O que é um sistema operacional e dê exemplos de sistemas operacionais amplamente utilizados.",
        "respostas": ["a)  Um sistema operacional é um tipo de software antivírus.", "b) Um sistema operacional é um programa de edição de imagens.", "c) Um sistema operacional é um software que gerencia hardware e software de um computador."],
        "resposta_correta": "c"
    },
    {
        "pergunta": "Qual é a diferença entre armazenamento em nuvem e armazenamento local, e quais são as vantagens de cada um?",
        "respostas": ["a) Não há diferença entre eles.", "b) O armazenamento em nuvem é remoto, enquanto o armazenamento local é físico.", "c) O armazenamento em nuvem é mais caro que o armazenamento local"],
        "resposta_correta": "b"
    },
    {
        "pergunta": "Descreva o que é um endereço IP e como ele é usado na Internet.",
        "respostas": ["a)  Um endereço IP é um número de telefone.", "b) Um endereço IP é uma identificação única para dispositivos em uma rede e é usado para rotear dados na Internet.", "c) IP são apenas numeros", "d) IP são dados diretamente ligado a memoria ram"],
        "resposta_correta": "b"
    },
    {
        "pergunta": "O que é o protocolo de Internet IPv6 e por que ele é importante?",
        "respostas": ["a)IPv6 é um protocolo de transmissão de rádio.", "b) IPv6 é a versão mais recente do protocolo de Internet e é importante devido à escassez de endereços IPv4 disponíveis. Ele fornece um número muito maior de endereços IP, essenciais para a expansão da Internet.", "c)  IPv6 é um protocolo de softwares da união internet"],
        "resposta_correta": "b"
    },
    {
        "pergunta": "O que é virtualização de servidores e como ela beneficia as empresas?",
        "respostas": ["a) Virtualização de servidores é a criação de servidores físicos personalizados.", "b) Virtualização de servidores é a técnica de criar múltas máquinas virtuais em um único servidor físico. Isso beneficia as empresas ao melhorar a utilização de recursos, reduzir custos de hardware e facilitar a escalabilidade."],
        "resposta_correta": "b"
    },
    {
        "pergunta": "O que é um servidor proxy e qual é sua finalidade?",
        "respostas": ["a) ) Um servidor proxy é um tipo de servidor de jogos online.", "b)  Um servidor proxy é um dispositivo de armazenamento externo.", "c) Um servidor proxy é um intermediário que atua entre um cliente e um servidor para melhorar o desempenho, fornecer anonimato, filtrar conteúdo ou permitir acesso a recursos restritos."],
        "resposta_correta": "c"
    },
    {
        "pergunta": "Os termos PS2, 750GB SATA2 7200RPM, 2GB DDR3 e 10/100Mbps dizem respeito, respectivamente, aos seguintes componentes:",
        "respostas": ["a) RAM, DVD, RAM e placa de rede. ", "b) teclado, DVD, PENDRIVE e placa de faxmodem. ", "c) teclado, HD, RAM e placa de rede. ", "d) mouse, HD, ROM e placa de faxmodem. "],
        "resposta_correta": "c"
    },
    {
        "pergunta": "o Hardaware 'PROCESSADOR', selecione a alternativa que corresponde a sua função:",
        "respostas": [
            "a) Sua função e de armazenar temporariamente as informações não necessitando que elas sejam armazenadas no disco rígido do computador ", 
                      "b) Sua função e de processar todas as informações do computador sendo este considerado o cérebro da máquina. ",
                      "c) Sua função e de receber informações de dispositivos USB.Sua função e armazenar informações temporárias que não chegam a ir no HD. "],
        "resposta_correta": "b"
    },
    {
        "pergunta": " cabo 'SATA', selecione a alternativa que corresponde a sua função:",
        "respostas": ["a) Sua função e de receber informações de dispositivos USB. ", "b) Sua função e transmitir dados do processador para a placa mãe.", "c) Sua função de transmitir dados lógicos do HD, CD/DVD ou disquete para os barramento físicos da placa mãe.", "d) Sua função e levar energia da fonte de alimentação para a placa mãe e seus componentes."],
        "resposta_correta": "c"
    },
    {
        "pergunta": "Como resultado da evolução tecnológica, o HD (Hard Disk) hoje possui diferentes padrões de interface com a placa mãe. São padrões de interfaces do HD",
        "respostas": ["a) IDE e SATA.", "b) VGA e AGP.", "c) IDE e AGP.", "d) VGA e SATA."],
        "resposta_correta": "a"
    },
    {
        "pergunta": "Os discos rígidos dos tipos IDE e ATA correspondem a padrões antigos que possuíam a controladora dentro do dispositivo. Atualmente, o disco do tipo IDE evoluiu para padrões cujas taxas de transmissão alcançam até 150 MBps.",
        "respostas": ["a) VERDADEIRO", "b) FALSO "],
        "resposta_correta": "b"
    },
    {
        "pergunta": "ATUAL GERAÇÃO DOS COMPUTADORES",
        "respostas": ["a) 4", "b) 5", "c) 6", "d) 2", ],
        "resposta_correta": "a"
    },
    {
        "pergunta": "monitor é dispositivo de saida ?",
        "respostas": ["a) FALSO", "b) VERDADEIRO"],
        "resposta_correta": "b"
    },
    {
        "pergunta": "para que serve o cooler ?",
        "respostas": ["a) limpar o computador", "b) resfriar o computador ", "c) para dar velocidade "],
        "resposta_correta": "b"
    },
    {
        "pergunta": "versão atual do HTML?",
        "respostas": ["a) 5 ", "b) 2  ", "c) x  ", "d) 3 "],
        "resposta_correta": "a"
    },
    {
        "pergunta": "como se chama a parte física do computador?",
        "respostas": ["a) hardware ", "b) software  ", "c) google chrome  ", "d) word "],
        "resposta_correta": "a"
    },
    {
        "pergunta": "Sistemas operacionais (Windows, Linux), é um Software ? ",
        "respostas": ["a) ERRADO ", "b) CERTO  "],
        "resposta_correta": "b"
    },
    {
        "pergunta": "São navegadores Web exceto:",
        "respostas": ["a) firefox ", "b) internet explorer  ", "c) google chrome  ", "d) windows "],
        "resposta_correta": "d"
    },
    {
        "pergunta": "Qual componente não faz parte do pacote Office?",
        "respostas": ["a) word", "b) blender  ", "c) excel  ", "d) powerpoint "],
        "resposta_correta": "b"
    },
    {
        "pergunta": "Qual componente do computador que tem uma função equivalente ao cérebro humano?",
        "respostas": ["a) cooler ", "b) processador  ", "c) HD  ", "d) placa vídeo"],
        "resposta_correta": "c"
    },
    {
        "pergunta": "Соm bаѕеѕ nоѕ ѕеuѕ соnhесіmеntоѕ ѕоbrе а рlаса dе vídео, mаrquе а аltеrnаtіvа ІNСОRRЕТА. ",
        "respostas":
            ["a) А рlаса dе vídео é um dіѕроѕіtіvо rеѕроnѕávеl роr еnvіаr аѕ іmаgеnѕ gеrаdаѕ nо соmрutаdоr раrа а tеlа dо mоnіtоr.",
             "b) Nеm tоdоѕ оѕ соmрutаdоrеѕ nесеѕѕіtаm dе umа рlаса dе vídеоѕ, роrém о рróрrіо НD trаnѕmіtе аѕ іmаgеnѕ ",
             "c) Аѕ іnfоrmаçõеѕ dо vídео ѕãо рrосеѕѕаdаѕ nо Сhірѕеt dе vídео. ",
             "d) É о іtеm mаіѕ іmроrtаntе dо mісrо dероіѕ dо рrосеѕѕаdоr, mеmórіа е dіѕсо rígіdо. "],
        "resposta_correta": "b"
    }
];

let currentQuestion = 0;
let score = 0;
const totalQuestions = questions.length; 
const tempoPorPergunta = 30; 
let tempoRestante = tempoPorPergunta;
let cronometro;

const perguntaElement = document.getElementById("pergunta");
const opcoesElement = document.getElementById("opcoes");
const verificarRespostaButton = document.getElementById("verificar-resposta");
const resultadoElement = document.getElementById("resultado");
const tenteNovamenteButton = document.getElementById("tente-novamente");
const cronometroElement = document.getElementById("cronometro");
const contadorPerguntasElement = document.getElementById("contador-perguntas");

function displayQuestion() {
    const question = questions[currentQuestion];
    perguntaElement.innerText = question.pergunta;
    opcoesElement.innerHTML = "";
    question.respostas.forEach((resposta, index) => {
        const optionButton = document.createElement("button");
        optionButton.className = "opcao-resposta";
        optionButton.innerText = resposta;
        optionButton.addEventListener("click", () => checkAnswer(String.fromCharCode(97 + index)));
        opcoesElement.appendChild(optionButton);
    });

    iniciarCronometro();
    atualizarContadorPerguntas();
}

function atualizarContadorPerguntas() {
    const numeroPerguntaAtual = currentQuestion + 1;
    contadorPerguntasElement.innerText = `Pergunta ${numeroPerguntaAtual} de ${totalQuestions}`;
}

function iniciarCronometro() {
    clearInterval(cronometro);
    tempoRestante = tempoPorPergunta;
    atualizarCronometro();

    cronometro = setInterval(() => {
        tempoRestante--;
        atualizarCronometro();

        if (tempoRestante === 0) {
            clearInterval(cronometro);
            checkAnswer(null); 
        }
    }, 1000);
}

function atualizarCronometro() {
    cronometroElement.innerText = `Tempo restante: ${tempoRestante} segundos`;
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];
    clearInterval(cronometro); 

    if (selectedAnswer === question.resposta_correta) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < totalQuestions) {
        displayQuestion();
    } else {
        showResult();
    }
}
function showResult() { 
    perguntaElement.innerText = "Como já dizia minha ex, TERMINAMOS!";
    opcoesElement.innerHTML = "BOA GUERREIRO, AGORA TEM SUA PRENDA, NÃO SE ESQUEÇA!!";
    tenteNovamenteButton.style.display = "block"; // Exibir o botão "Tente Novamente"
    resultadoElement.innerText = `Sua pontuação: ${score} de ${totalQuestions}`;
 
}

tenteNovamenteButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    tenteNovamenteButton.style.display = "none"; // Ocultar o botão "Tente Novamente"
    verificarRespostaButton.style.display = "block"; 
    resultadoElement.innerText = ""; //
});

function resetGame() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    tenteNovamenteButton.style.display = "none"; // Ocultar o botão "Tente Novamente"
    verificarRespostaButton.style.display = "block"; 
    resultadoElement.innerText = "none"; // Limpar a pontuação anterior
}

// ...

function showResult() { 
    perguntaElement.innerText = "Como já dizia minha ex, TERMINAMOS!";
    opcoesElement.innerHTML = "BOA GUERREIRO, AGORA TEM SUA PRENDA, NÃO SE ESQUEÇA!!";
    tenteNovamenteButton.style.display = "block"; // Exibir o botão "Tente Novamente"
    resultadoElement.innerText = `Sua pontuação: ${score} de ${totalQuestions}`;
}

// ...


displayQuestion();