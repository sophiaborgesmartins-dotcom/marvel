// Array contendo frases marcantes de personagens da Marvel
const frasesMarcantes = [
    "“Avante, Vingadores!” — Os Vingadores 🛡️",
    "“Eu consigo fazer isso o dia todo.” — Capitão América ⭐",
    "“Eu te amo três mil.” — Homem de Ferro ❤️",
    "“Grandes poderes trazem grandes responsabilidades.” — Homem-Aranha 🕸️",
    "“Wakanda para sempre!” — Pantera Negra 🐾",
    "“Eu sou o Groot!” — Groot 🌱"
];

// Captura os elementos necessários do HTML através dos IDs
const botao = document.getElementById('botao-interativo');
const caixaMensagem = document.getElementById('caixa-mensagem');

// Adiciona o evento de escuta de clique ao botão
botao.addEventListener('click', () => {
    // Escolhe um índice aleatório baseado no tamanho da lista de frases
    const indiceAleatorio = Math.floor(Math.random() * frasesMarcantes.length);
    const fraseSelecionada = frasesMarcantes[indiceAleatorio];

    // Atualiza o texto da caixa de mensagem
    caixaMensagem.textContent = fraseSelecionada;

    // Remove a classe oculta para aplicar o efeito visual de transição suave
    caixaMensagem.classList.remove('mensagem-oculta');

    // Cria um efeito rápido de pulso ao trocar as frases repetidamente
    caixaMensagem.style.transform = 'scale(1.05)';
    setTimeout(() => {
        caixaMensagem.style.transform = 'scale(1)';
    }, 150);
});
