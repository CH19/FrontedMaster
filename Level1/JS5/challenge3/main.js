'use strict';
$(function(){
    $('.loading').hide();
    $(document).on('ajaxStart', function(){
        $('.loading').show();
    }).on('ajaxStop', function(){
        $('.loading').hide();
    })
    // $('#cargar').on('click', function(){
    const menuOptions = ['La academia', 'certificacion', 'empleos', 'contacto', 'iniciar sesión'];
    let contenido = '';
    menuOptions.forEach(option => {
        contenido += `<div class="nav-options"><a class="nav-option-a" href="#">${option.toUpperCase()}</a></div>`
    });
    $('.nav-options-container').append(contenido);
    fetch('https://api.cadif1.com/areadeestudio')
    .then(response =>{
        if(response.ok) return response.json();
    }).then(json => {
        cargarAreas(json?.areas);
    })
    .catch(error => {
        alert('Solicitud no ingresada');
        alert(error)

    })
    $('#cargar').on('click', function(){
    })
    fetch('https://api.cadif1.com/carrera')
    .then(resp => {if(resp.ok) return resp.json()})
    .then(carreras => cargarCarreras(carreras.carreras,'#carreras'));
});
// Funcion para cargar las areas de estudio del requerimiento 1 
function cargarAreas(arr){
  
    cargarCodigo(arr, '#areas',)
    arr.forEach(element => {
        $('#container'+element?.id).on('click', function(){
            const idActual = element?.id
            // console.log(idActual);
            areasEstudio(idActual);
            $('#areasEstudioTitle').text(`${element?.nombre}`)
        })
    })
    
}
// Funcion para cargar las diversas areas de estudio 
function areasEstudio(e){
    //havía un error en colocar el e.id dos veces se tomara nota 
    let url = `https://api.cadif1.com/curso/de_un_area/${e}`;
    // console.log(url)
    fetch(url)
    .then(response => {if(response.ok) return response.json()})
    .then(json => {
        console.log(json?.cursos)
        cargarCodigo(json?.cursos, '#areasEstudio')
        
        json?.cursos.forEach(element => {
            $(`#container${element.id}`).on('click', function(){
                cargarCurso(element.id);
            })
        })
    })
}

// funcion para generar codigo html, un div con el nombre del curso y la id 
function cargarCodigo(arr, container){
    let content = '';
    $(container)[0].innerHTML = '';
    $('#datosCurso')[0].innerHTML = '';
    arr.forEach(element =>{
        content += `<div id="container${element?.id}" class="materia-container"><p class="materia-text">${element?.nombre}<p></div>`;
    })
    $(container).append(content);
}
// Funcion para cargar los datos de un curso determinado segun su id 
function cargarCurso(id){
    console.log(id);
    fetch(`https://api.cadif1.com/curso/${id}`)
    .then(resp => resp.json())
    .then(curso => cargarDatosCurso(curso.curso))
    .catch(error => alert('Error al cargar datos del curso' + error));
}
// Funcion para cargar los datos del curso particular 
function cargarDatosCurso(data){
    let content = '';
    let content2 = '';
    $('#datosCurso')[0].innerHTML = '';
    content +=  `<div class="curso-container">
    <h2 class="curso-nombre"><div class="curso-codigo">${data.codigo}</div> ${data.nombre}</h2>
    <p>Objetivo: ${data.objetivogeneral}</p>
    <p>Este curso cuenta con ${data.niveles.length} niveles</p> 
    </div>
    `;
    $('#datosCurso').append(content);
    data.niveles.forEach((element, index) => {
         content2 += `<span>${element.nombre}</span>
    <p>Objetivo principal: <b>${element.objetivosespecificos}</b></p>
    <p> precio: ${element.precio} </p>
    `;
    $('#datosCurso').append(content2);

    })
}
function cargarCarreras(carreras, container){
    let content = '';
    $(container)[0].innerHTML = '';
    carreras.forEach(element =>{
     if(element.activa == '1'){  
        content += `<div id="container${element?.id}" class="materia-container"><p class="materia-text">${element?.nombre}<p></div>`;
    }
    })
    $(container).append(content);
    carreras.forEach(carrera => {
        $(`#container${carrera?.id}`).on('click', function(){
            cargarDataCarrera(carrera?.id);
        })
    })
}
function cargarDataCarrera(id){
    //funcion para documentar y buscar la data de la carrera 
    fetch(`https://api.cadif1.com/carrera/${id}`)
    .then(response => {if(response.ok) return response.json()})
    .then(dataCarrera => MostrarDataCarrera(dataCarrera.carrera))
    .catch(error => alert(error));
}
function MostrarDataCarrera(carrera){
    // funcion para mostrar los datos de la carrera 
    $('#descripccionCarreras')[0].innerHTML = '';
    let content = `
    <h1><div class="curso-codigo">${carrera.codigo}</div>${carrera.nombre}</h1>
    <p><b>${carrera.descripcion}</b></p>
    <p><b>Objetivo:</b>${carrera.objetivo}<p>
    <p><b>Título:</b>${carrera.titulo}<p>
    `
    $('#descripccionCarreras').append(content);
}