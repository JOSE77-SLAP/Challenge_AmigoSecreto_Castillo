// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escriba un nombre válido.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = ""; // Limpiar el input después de añadir el nombre

    mostrarLista(); // Llamar a la función para actualizar la lista en pantalla
}

// Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    // Mostrar el resultado en la lista "resultado"
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li><strong> El amigo secreto sorteado es:</strong> ${amigoSorteado}</li>`;
}



 

