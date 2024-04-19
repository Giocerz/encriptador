let cipherState = false;

function cifrar(texto, desplazamiento) {
    var textoCifrado = "";
    for (var i = 0; i < texto.length; i++) {
      var char = texto[i];
      if (char.match(/[a-z]/)) {
        var code = texto.charCodeAt(i);
        var codigoCifrado = ((code - 97 + desplazamiento) % 26) + 97;
        textoCifrado += String.fromCharCode(codigoCifrado);
      } else if (char === " ") {
        textoCifrado += " ";
      } else {
        textoCifrado += char;
      }
    }
    return textoCifrado;
}

function descifrar(textoCifrado, desplazamiento) {
  return cifrar(textoCifrado, (26 - desplazamiento) % 26);
}

function btnEncriptarCallback() {
    const textArea = document.getElementById("enter-text");
    const cipherResultP = document.getElementById("cipher-result");
    if (textArea.value === '' && cipherResultP.textContent === '') return;
    if(textArea.value !== '' && cipherState) {
      changeState();
    }
    if(cipherState) return;
    const text = textArea.value === '' ? cipherResultP.textContent : textArea.value;  
    const cipherText = cifrar(text, 5);
    cipherResultP.textContent = cipherText;
    textArea.value = '';
    modifyStyleContainer();
    removeElement("no-message-1");
    removeElement("no-message-2");
    removeElement("no-message-avatar");
    showElement("btn-copiar");
    changeState();
}

function btnDesencriptarCallback() {
  if(!cipherState) return;
  const cipherResultP = document.getElementById("cipher-result");
  let texto = cipherResultP.textContent;
  texto = descifrar(texto, 5);
  cipherResultP.textContent = texto;

  changeState();
}

function changeState() {
  cipherState = !cipherState;
}

async function copy() {
  const cipherResultP = document.getElementById("cipher-result");
  const texto = cipherResultP.textContent;
  try {
    await navigator.clipboard.writeText(texto);
    console.log('Contenido copiado al portapapeles');
  } catch (err) {
    console.error('Error al copiar: ', err);
  }
}

function removeElement(id) {
    const element = document.getElementById(id);
    if (element == null) return;
    element.remove();
}

function modifyStyleContainer() {
  const container = document.getElementById("result-container");
  container.style.justifyContent = "space-between"
}

function showElement(id) {
  const element = document.getElementById(id);
  element.style.display = "block";
}