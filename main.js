"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (texto) => {
        return (texto.length > 3) ? true : false;
    };
    Validations.validateDate = (myDate) => {
        return (isNaN(myDate.valueOf())) ? true : false;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Cristian'));
//# sourceMappingURL=main.js.map