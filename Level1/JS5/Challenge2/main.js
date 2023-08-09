 'use strict'
 const xhtr = new XMLHttpRequest;
$(function(){
    // se busca la url de la api 
    let url = 'https://reqres.in/api/users?page=1';
    // Se obtine  si usa el metodo open 
    xhtr.open('get', url);
    xhtr.send();
    xhtr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.response);
            
            cargarLista(response);
 
        }
    }

    $('#loading').hide()
    $('#listado2').on('click', cargarAjax);
    $('#listado3').on('click', cargarGETJSON);
   
    $(document).ajaxError(function(){
        alert('Error de solicitud pruebe nuevamente');
    })

})


function cargarLista(response){
    let content = '';
    response.data.forEach(respdata =>{
        
        content += `
        <div class="user">
            <img src="${respdata.avatar}">
            <p>${respdata.first_name}</p>
        </div>`;
    })
    $('#personas1').append(content);
}


function cargarAjax(){

    let url2 = 'https://reqres.in/api/users?page=2';
    $(document)
    .ajaxStart(function(){ $('#loading').show() })
    .ajaxStop(function(){ $('#loading').hide() });

    $.ajax({
        url: url2,
        type: 'GET',
        dataType: 'json',
        success: function(response){
            
            for (let e = 0; e < response.data.length; e++){
     
                let content = `
                    <img src="${response.data[e].avatar}">
                    <p>${response.data[e].email}</p>
                `;
                
                $('#personas2').append(`<li class="user">${content}</li>`);
            }

        }
    })
}

let url3;
function cargarGETJSON(){

    $(document)
    .ajaxStart(function(){ $('#loading').show() })
    .ajaxStop(function(){ $('#loading').hide() });
    url3 = 'https://reqres.in/api/users/10';
    $.getJSON(url3, function(response){
        console.log(response)

        let content = `
        <img src="${response.data.avatar}">
        <p>${response.data.first_name} ${response.data.last_name}</p>
        `;
        $('#individuo').append(content);
    })

}
