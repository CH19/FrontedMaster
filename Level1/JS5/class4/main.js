'use strict';
$(function(){
    const urlBase = 'https://core.kpimetro.com/desarrollo';
    $('#paises').click(function(e){
        e.preventDefault();
        $(this)[0].innerHTML = '';
        fetch(urlBase+"/pais",{
            headers:{
             "CLIENT_ID":"3f7f8c73a542c5e3601e279682c6e5dafcef6f5a"
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
 
})