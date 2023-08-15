'use strict';
$(function(){
    // $('#cargar').on('click', function(){
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
})
function cargarAreas(arr){
    // let content = '';
    // arr.forEach(element =>{
    //     content += `<div id="container${element?.id}"><p>${element?.nombre}<p></div>`;
    // })
    // $('#areas').append(content);
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
                alert('hola');
                const idActualCursos = element?.id;
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
        content += `<div id="container${element?.id}"><p>${element?.nombre}<p></div>`;
    })
    $(container).append(content);
}
// Funcion para cargar los datos de un curso determinado segun su id 
function cargarCurso(id){
    debugger
    console.log(id);
    fetch(`https://api.cadif1.com/curso/${id}`)
    .then(resp => resp.json())
    .then(curso => cargarDatosCurso(curso.curso))
    .catch(error => alert('Error al cargar datos del curso' + error));
}
function cargarDatosCurso(data){
    let content = '';
    debugger
    $('#datosCurso')[0].innerHTML = '';
    content +=  `<h2><div class="tag">${data.codigo}</div> ${data.nombre}</h2>
    <p>Objetivo: ${data.objetivogeneral}</p>
    <p>Este curso cuenta con ${data.niveles.length} niveles</p> 
    `;
    $('#datosCurso').append(content);
}
