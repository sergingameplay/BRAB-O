const areaJogo = document.querySelector('#game-area');
const pontosdisplay = document.querySelector('#pontos');
const listaHistorico = document.querySelector('#lista-historico');

let pontos = 0;
const emojis = ['😝','☺️','🤪','💀','😏','😁'];
const mensagensZoeiras = [
    'waza 😝' 

 ];

// Função para adicionar historico
function adicionarHistorico(texto){
    const li = document.createElement('li');
    const horario = new Date().toLocaleTimeString('pt-BR');
    li.textContent = `${horario} - ${texto}`;
    li.classList.add('zoeiro');
    listaHistorico.appendChild(li);
    
    if (listaHistorico.children.length > 10) {
        listaHistorico.removeChild(listaHistorico.firstChild);
    }
}

// Função para criar um emoji 
function criarEmoji(){
    const emoji = document.createElement('div');
    emoji.classList.add('emoji');

    const indiceAleatorio = Math.floor(Match.radom() * emoji.length);
    emoji.textContent = emojis[indiceAleatorio];
    
    const maxX = areaJogo.offsetWidth - 50;
    const maxY = areaJogo.offsetWidth - 50;
    
    emoji.style.left = `${Math.random() * maxX}px`; 
    emoji.style.left = `${Math.random() * maxY}px`; 

}

