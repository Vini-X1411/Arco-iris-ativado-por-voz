const coresDoArcoIris = [
  'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'
];


let intervalo = null;


function iniciarArcoIris() {
  let index = 0;
  if (intervalo) return;
  intervalo = setInterval(() => {
    document.body.style.backgroundColor = coresDoArcoIris[index];
    index = (index + 1) % coresDoArcoIris.length;
  }, 200);
  document.getElementById('status').textContent = 'Arco-íris ativado!';
}


window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;


if (window.SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'pt-BR';
  recognition.continuous = true;
  recognition.interimResults = false;


  recognition.onresult = (event) => {
    const comando = event.results[event.results.length - 1][0].transcript.trim().toLowerCase();
    console.log('Comando detectado:', comando);


    if (comando.includes('ativar arco-íris')) {
      iniciarArcoIris();
    }
  };


  recognition.onerror = (e) => {
    console.error('Erro no reconhecimento de voz:', e.error);
  };


  recognition.start();
} else {
  document.getElementById('status').textContent = 'Reconhecimento de voz não suportado neste navegador.';
}
