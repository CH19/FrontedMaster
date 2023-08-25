let nameUser = 'Christian';
let aviso = 'Ustes esta siendo avisado';

document.getElementById('app')?.addEventListener('click', ()=>{
    if(nameUser == 'Christian'){
        aviso = 'Hola amor bello';
    }
    window.alert(aviso + nameUser);
});

