/* INICIO: CARGA INICIAL DE LA PAGINA */
window.onload = cargarPagina;

function cargarPagina(){
    ocultarSeccionesMenu();
    mostrarSeccionMenu('home', 'flex');
}
/* FIN: CARGA INICIAL DE LA PAGINA */


function ocultarSeccionesMenu(){
    document.getElementById('home').style.display = 'none'
    document.getElementById('projects').style.display = 'none'
    document.getElementById('skills').style.display = 'none'
}

function mostrarSeccionMenu(element, tipoDisplay){
    ocultarSeccionesMenu();
    document.getElementById(element).style.display = tipoDisplay;
}

function borrarActiveClassMenu(){
    var elements = document.getElementsByClassName('active');

    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
    }
}

function setActiveClassMenu(element){
    borrarActiveClassMenu();
    element.parentElement.classList.add('active');
}

