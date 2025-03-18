// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener('DOMContentLoaded', () => {
    const inputAmigo = document.getElementById('amigo');
    const botonAgregar = document.querySelector('.button-add');
    const listaAmigos = document.getElementById('listaAmigos');
    const botonSortear = document.querySelector('.button-draw');
    const resultadoDiv = document.getElementById('resultado');
    let amigos = [];

    botonAgregar.addEventListener('click', agregarAmigo);
    botonSortear.addEventListener('click', sortearAmigo);

    function agregarAmigo() {
        const nombreAmigo = inputAmigo.value.trim();

        if (nombreAmigo === '') {
            alert('Debes agregar un nombre');
            return;
        }

        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        inputAmigo.value = ''; // Limpiar el input
    }

    function actualizarListaAmigos() {
        listaAmigos.innerHTML = ''; // Limpiar la lista anterior
        amigos.forEach(amigo => {
            const nuevoLi = document.createElement('li');
            nuevoLi.textContent = amigo;
            listaAmigos.appendChild(nuevoLi);
        });
    }
        // esto al igual que no colocar ningun nombre es para que el boton de sortear arroje una alerta
    function sortearAmigo() {
        if (amigos.length === 0) {
            alert('Debes agregar al menos un amigo para sortear.');
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

        // Limpiar resultado anterior
        resultadoDiv.innerHTML = '';
        const resultadoLi = document.createElement('li');
        resultadoLi.textContent = `¡Tu amigo secreto es: ${amigoSecreto}!`;
        resultadoDiv.appendChild(resultadoLi);

        //Ocultar la lista de amigos después del sorteo
        listaAmigos.style.display = 'none';
    }
});
