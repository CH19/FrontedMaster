const xhr = new XMLHttpRequest;

$(document).ready(function(){

    let url = 'https://reqres.in/api/users?page=1';
    xhr.open('get', url);
    xhr.send();

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.response);
            
            loadContent(response);

        }
    }

    //REQUERIMIENTO 4
    $('#loading').hide()
    $(document)
        .ajaxStart(function(){ $('#loading').show() })
        .ajaxStop(function(){ $('#loading').hide() });

    //REQUERIMIENTO 5
    $(document).ajaxError(function(){
        window.alert('Mi pana la solicitud AJAX no anda, esto es un error.')
    })

})

//REQUERIMIENTO 1
function loadContent(response){
    for (let e = 0; e < response.data.length; e++){

        let content = `
        <div class="user">
            <img src="${response.data[e].avatar}">
            <p>${response.data[e].first_name}</p>
        </div>`;

        $('main#people-1').append(content);
    }
}


//REQUERIMIENTO 2
let url2;
function loadAJAX(){

    url2 = 'https://reqres.in/api/users?page=2';

    $.ajax({
        url: url2,
        type: 'GET',
        dataType: 'json',
        success: function(response){
            for (let e = 0; e < response.data.length; e++){
     
                let content = `
                <li class="user">
                    <img src="${response.data[e].avatar}">
                    <p>${response.data[e].email}</p>
                </li>`;
                
                $('ol#people-2').append(content);
            }

        }
    })
}

//REQUERIMIENTO 3
let url3;
function loadGETJSON(){

    url3 = 'https://reqres.in/api/users/10';
    $.getJSON(url3, function(response){
        console.log(response)

        let content = `
        <img src="${response.data.avatar}">
        <p>${response.data.first_name} ${response.data.last_name}</p>
        `;
        $('#guy-div').append(content);
    })

}