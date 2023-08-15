'use stict'
$(function(){
    $('#loading').hide();
    $(document).on('ajaxStart', function(){
        $('#loading').show();
    }).on('ajaxStop', function(){
        $('#loading').hide()
    }).on('ajaxError', function(){
        alert('solicitud imposible de procesar');
    })
    const xhtr = new XMLHttpRequest();
    const resultado = document.getElementById('resultado');
    const url2 = 'https://reqres.in/api/users?page=2';
    const userSearch = document.getElementById('userSearch');
    request.onclick = function(){
        const url = 'https://reqres.in/api/users?page=1';
        xhtr.open('get', url);
        xhtr.send();
    }
    xhtr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            const result = JSON.parse(this.response);
            let contenido = cargarUsuarios(result.data, 'avatar', 'first_name');
           
            $('#resultado').append(contenido);
        }
    }
    $('#Requerimento2').click(function(){
        cargarAjax(url2)
    })
});

$('#buscar').click(function(){
    $.getJSON('https://reqres.in/api/users/'+userSearch.value, function(json, status){
        console.log(json)
    const content = `
    <div class="container"><figure>   
    <img src="${json.data.avatar}" width="100px" height="100px">
   </fiugre>
   <p>${json.data.first_name}</p> 
   </div>
    `
    $('#reusldado3').append(content)
})
})

function cargarUsuarios(array, img, name){
    let content
    array.forEach(user => {
        content += `
            <div class="container"><figure>   
             <img src="${user[img]}" width="100px" height="100px">
            </fiugre>
            <p>${user[name]}</p> 
            </div>
        `;
    });
        return content;
};

function cargarAjax(url){
    $.ajax({
        url: url,
        type: 'get',
        success: function(json){
           let content = cargarUsuarios(json.data, 'avatar', 'email');
            $('#resultado2').append(content);
     }
    })
}