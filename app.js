// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validación
    if (!nombre) {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Agregar al array y limpiar input
    amigos.push(nombre);
    input.value = '';
    
    // Actualizar lista y limpiar resultados
    mostrarAmigos();
    document.getElementById('resultado').innerHTML = '';
}

function mostrarAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpiar lista

    // Crear elementos de lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Necesitas al menos 2 amigos para sortear!');
        return;
    }

    let listaShuffle = shuffleArray([...amigos]);
    
    // Verificar que nadie tenga su propio nombre
    while (listaShuffle.some((amigo, index) => amigo === amigos[index])) {
        listaShuffle = shuffleArray(listaShuffle);
    }

    // Mostrar resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${amigo} → ${listaShuffle[index]}`;
        resultado.appendChild(li);
    });
}

// Función para mezclar array (Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}