const navBar = document.querySelector('.navbar');

const lista = document.createElement('ul');

const urlPagina = ["./index.html", "./Pagina1.html", "./pagina2.html", "./receta3.html"];
const nombreLink = ["Inicio", "Pagina 1", "Pagina 2", "Pagina 3"];

for (let i = 1; i <= 4; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = urlPagina[i - 1];
    a.textContent = nombreLink[i - 1];
    li.appendChild(a);
    lista.appendChild(li);
}

navBar.appendChild(lista);