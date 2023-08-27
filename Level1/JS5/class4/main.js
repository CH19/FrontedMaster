// @ts-check
'use strict';

// const { error } = require("jquery");

$(function(){
    const urlBase = 'https://core.kpimetro.com/desarrollo';
    const clientID = '3f7f8c73a542c5e3601e279682c6e5dafcef6f5a';
    const datos = {
        'email': 'jose@gmail.com',
        'username': 'Polly',
    }
    $('#paises').click(function(e){
        e.preventDefault();
        $(this)[0].innerHTML = '';
        fetch(urlBase+"/pais",{
            headers:{
             'content-type': 'aplication/json',
             "CLIENT_ID": clientID,
             }
         }).then(response => {
             if(response.ok) return response.json();
         }).then(paises => {
             let content = '';
             console.log(paises)
                 paises.data.forEach(pais => {
                     content += ` <option id="${pais?.id_pais}" value="${pais?.nombre}">${pais?.nombre}</option>`
                 })
                 $(this).append(content);
         })
         .catch(error => console.log(error))
    })
    $('#registrar').on('click',function(){
        console.log('Boton registrado');
        fetch(urlBase+'/register',{
            method: 'POST',
            headers:{
                'CLIENT_ID': clientID,
            },
            body: JSON.stringify(datos),
        }).then(result => console.log(result))
        .catch(error => console.log(error));
    
    })
});
let newProduct = {
    "name": "Depliador",
    "price": 4000,
    "manufacturer": "Cosita",
    "category": "Personal things",
    "description": "Un depilador para tus bolas y otras cosas personales",
    "tags": "depilador, cosita, asumir"
}
fetch('https://mystoreapi.com/#/catalog/product',{
 	method: 'post',
    mode: 'cors',
    body: JSON.stringify(newProduct),
})