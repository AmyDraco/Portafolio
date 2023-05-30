// Obtener elementos del DOM
const textTransform = document.getElementById('textTransform');
const encryptButton = document.getElementById('encrypt');
const decryptButton = document.getElementById('decrypt');
const copyTextButton = document.getElementById('copyText');
const emptyMessage = document.getElementById('emptyMessage');
const processMessage = document.getElementById('processMessage');
const outputParameters = document.getElementById('outputParameters');

// Función para encriptar una palabra
function encryptWord(word) {
  let encryptedWord = word;
  encryptedWord = encryptedWord.replace(/e/g, 'enter');
  encryptedWord = encryptedWord.replace(/i/g, 'imes');
  encryptedWord = encryptedWord.replace(/a/g, 'ai');
  encryptedWord = encryptedWord.replace(/o/g, 'ober');
  encryptedWord = encryptedWord.replace(/u/g, 'ufat');
  return encryptedWord;
}

// Función para desencriptar una palabra
function decryptWord(word) {
  let decryptedWord = word;
  decryptedWord = decryptedWord.replace(/enter/g, 'e');
  decryptedWord = decryptedWord.replace(/imes/g, 'i');
  decryptedWord = decryptedWord.replace(/ai/g, 'a');
  decryptedWord = decryptedWord.replace(/ober/g, 'o');
  decryptedWord = decryptedWord.replace(/ufat/g, 'u');
  return decryptedWord;
}

// Función para manejar el evento de encriptar
function handleEncrypt() {
  const inputText = textTransform.value.toLowerCase();
  if (inputText) {
    const encryptedText = encryptWord(inputText);
    showResult(encryptedText);
  } else {
    showEmptyMessage();
  }
}

// Función para manejar el evento de desencriptar
function handleDecrypt() {
  const inputText = textTransform.value.toLowerCase();
  if (inputText) {
    const decryptedText = decryptWord(inputText);
    showResult(decryptedText);
  } else {
    showEmptyMessage();
  }
}

function showResult(result) {
  emptyMessage.style.visibility = 'hidden';
  processMessage.style.visibility = 'visible';
  outputParameters.textContent = result;
}

// Función para mostrar el mensaje de texto vacío
function showEmptyMessage() {
  emptyMessage.style.visibility = 'visible';
  processMessage.style.visibility = 'hidden';
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copyText() {
  const resultText = outputParameters.textContent;
  if (resultText) {
    navigator.clipboard.writeText(resultText)
      .then(() => {
        alert('Texto copiado al portapapeles');
      })
      .catch((error) => {
        console.error('Error al copiar el texto:', error);
      });
  }
}

// Asignar los manejadores de eventos a los botones
encryptButton.addEventListener('click', handleEncrypt);
decryptButton.addEventListener('click', handleDecrypt);
copyTextButton.addEventListener('click', copyText);