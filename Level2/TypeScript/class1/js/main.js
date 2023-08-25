"use strict";
var _a;
let nameUser = 'Christian';
let aviso = 'Ustes esta siendo avisado';
(_a = document.getElementById('app')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
    if (nameUser == 'Christian') {
        aviso = 'Hola amor bello';
    }
    window.alert(aviso + nameUser);
});
