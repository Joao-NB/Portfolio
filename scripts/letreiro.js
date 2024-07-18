const messages = [
    "Reactjs",
    "TailwindCSS",
    "JavaScript",
    "TypeScript",
    "Java",
    "Python"
];

const marqueeContent = document.querySelector('.marquee-content');
let messageString = '';

// Repetir as mensagens para preencher a largura da marquee
for (let i = 0; i < 20; i++) {
    messageString += messages.join(' / ') + ' / ';
}

marqueeContent.innerHTML = `<span>${messageString}</span>`;