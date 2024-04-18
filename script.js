function cifrarCesar(texto, desplazamiento) {
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
  

function btnEncriptarAction() {
    const textArea = document.getElementById("enter-text");
    const cipherResultP = document.getElementById("cipher-result");
    const text = textArea.value;
    
    if (text === '') return;

    const cipherText = cifrarCesar(text, 5);
    cipherResultP.textContent = cipherText;
    textArea.value = '';
    removeItems()

}

function removeItems() {
    const avatar = document.getElementById("no-message-avatar");
    const noMessageInfo1 = document.getElementById("no-message-1");
    const noMessageInfo2 = document.getElementById("no-message-2");

    avatar.remove();
    noMessageInfo1.remove();
    noMessageInfo2.remove();
}