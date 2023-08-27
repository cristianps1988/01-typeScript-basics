"use strict";
(() => {
    // numbers
    let avengers = 10;
    let villanos = 20;
    if (avengers < villanos) {
        console.log('Estamos en problemas');
    }
    else {
        console.log('Estamos bien');
    }
    // TS no es infalible
    avengers = Number('55'); // convierte este string en un number, bien
    avengers = Number('45A'); // arroja un NaN... Warning: NaN es considerado como un number!!!
})();
