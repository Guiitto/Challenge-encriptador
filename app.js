//funcion que reemplaza el texto "Ningun texto procesado por el texto encriptado o desencriptado"
//El elemento es el la etiqueta "p" "h1" "h2", entre otros
/*
function remplazarTextoEncriptadoDesencriptado(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}*/

function remplazarTextoEncriptadoDesencriptado(id_lemento, texto) {
    let elementoHTML = document.getElementById(id_lemento);
    if (elementoHTML) {
        elementoHTML.innerHTML = texto;
    } else {
        console.error("Elemento no encontrado: " + id_lemento);
    }
}

//funcion que valida si el texto tiene mayusculas
function textoContieneMayusculas(texto) {
    return /[A-Z]/.test(texto);
}

//funcion que desintegra un texto
function desintegrarTexto(texto) {
    return texto.split("");
}

//funcion que toma el texto desintegrado y le agrega letras aleatorias cada 2 posiciones
function agregarCaracterAleatorioCadaDosPosiciones (array) {
    const letras = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 1; i < array.length; i += 2) { // Cambiado a i += 2
        // Generar una letra aleatoria
        let letraAleatoria = letras.charAt(Math.floor(Math.random() * letras.length));
        // Insertar la letra aleatoria en la posición actual
        array.splice(i, 0, letraAleatoria); // Cambiado a i, 0
    }
    return array;
}

//funcion que toma el texto desintegrado y le elimina las letras aleatorias cada 2 posiciones
function eliminarCaracterAleatorioCadaDosPosiciones(array) {
    return array.filter((char, index) => index % 2 === 0);
}


//funcion que valida si el texto fue dilienciado, si contiene mayusculas y posterior lo encripta
function encriptarTexto() {
    let textoAencriptar = document.getElementById("texto_a_encriptar_o_desencriptar").value;

    if (textoAencriptar === "") {
        alert("No ha registrado el texto a encriptar.");
    } else {
        if (textoContieneMayusculas(textoAencriptar) == true) {
            alert("El texto contiene letras mayusculas, por favor corregir.")
        } else {
            let textoDesintegrado = desintegrarTexto(textoAencriptar);
            console.log(textoDesintegrado);

            let textoConCaracteresCadaDosPosiciciones = agregarCaracterAleatorioCadaDosPosiciones(textoDesintegrado);
            console.log(textoConCaracteresCadaDosPosiciciones);

            let textoFinalEncriptado = textoConCaracteresCadaDosPosiciciones.join("");
            console.log(textoFinalEncriptado);

            remplazarTextoEncriptadoDesencriptado("h1_a_reemplazar", "El texto ha sido encriptado");
            remplazarTextoEncriptadoDesencriptado("parrafo_a_reemplazar", textoFinalEncriptado);
        }
    }
}

//funcion que valida si el texto fue dilienciado, si contiene mayusculas y posterior lo desencripta

function desencriptarTexto() {
    let textoAdesencriptar = document.getElementById("texto_a_encriptar_o_desencriptar").value;

    if (textoAdesencriptar === "") {
        alert("No ha registrado el texto a desencriptar.");
    } else {
        if (textoContieneMayusculas(textoAdesencriptar) == true) {
            alert("El texto contiene letras mayusculas, por favor corregir.")
        } else {
            let textoDesintegrado = desintegrarTexto(textoAdesencriptar);
            console.log(textoDesintegrado);

            let textoSinCaracteresCadaDosPosiciciones = eliminarCaracterAleatorioCadaDosPosiciones(textoDesintegrado);
            console.log(textoSinCaracteresCadaDosPosiciciones);

            let textoFinalDesencriptado = textoSinCaracteresCadaDosPosiciciones.join("");
            console.log(textoFinalDesencriptado);

            remplazarTextoEncriptadoDesencriptado("h1_a_reemplazar", "El texto ha sido desencriptado");
            remplazarTextoEncriptadoDesencriptado("parrafo_a_reemplazar", textoFinalDesencriptado);
        }
    }

}

//funcion copiar texto procesado
function copiarTextoProcesado(){
    const textoParaCopiar = document.getElementById("parrafo_a_reemplazar").innerText;
    // Usar la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        alert("Texto copiado en el portapapeles");
    }).catch(err => {
        // Error: Falló la operación de copiar
        console.error("Error al copiar el texto: ", err);
    });
}
