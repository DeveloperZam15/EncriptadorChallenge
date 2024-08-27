function encryptText() {
    let inputText = document.getElementById('inputText').value;

    // Verificar si el texto es solo minúsculas y no contiene caracteres especiales o acentos
    if (!/^[a-z\s]+$/.test(inputText)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    // Reemplazar las letras con las "llaves" de encriptación
    let encryptedText = inputText
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    // Mostrar el texto encriptado en el área de salida
    document.getElementById('outputText').value = encryptedText;

    // Limpiar el área de entrada
    document.getElementById('inputText').value = '';

    // Ocultar la imagen de placeholder y mostrar el área de resultado
    document.getElementById('outputPlaceholder').style.display = 'none';
    document.getElementById('outputContainer').style.display = 'block';
}

function decryptText() {
    let inputText = document.getElementById('inputText').value;

    // Verificar si el texto es solo minúsculas y no contiene caracteres especiales o acentos
    if (!/^[a-z\s]+$/.test(inputText)) {
        alert("Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales.");
        return;
    }

    // Reemplazar las "llaves" de encriptación por las letras originales
    let decryptedText = inputText
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    // Mostrar el texto desencriptado en el área de salida
    document.getElementById('outputText').value = decryptedText;

    // Limpiar el área de entrada
    document.getElementById('inputText').value = '';

    // Ocultar la imagen de placeholder y mostrar el área de resultado
    document.getElementById('outputPlaceholder').style.display = 'none';
    document.getElementById('outputContainer').style.display = 'block';
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    outputText.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand('copy');

    // Mostrar alerta de texto copiado
    alert("Texto copiado: " + outputText.value);

    // Limpiar el campo del resultado
    document.getElementById('outputText').value = '';

    // Volver a mostrar la imagen de placeholder y ocultar el área de resultado
    document.getElementById('outputPlaceholder').style.display = 'block';
    document.getElementById('outputContainer').style.display = 'none';
}
