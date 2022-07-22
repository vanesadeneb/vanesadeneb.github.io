import validator from './validator.js';

document.getElementById("validar").addEventListener("click", function(e){
    e.preventDefault();

    const creditCardNumber = document.getElementById("cardNumber").value;
    console.log(creditCardNumber);
    const regex = new RegExp('^\\d+$');
    let pNode = document.getElementById("mensaje");

    if(!regex.test(creditCardNumber)){
        alert("¡Ingresa el número de tu tarjeta de cŕedito!");
        document.getElementById("cardNumber").value = "";
    }else if(validator.isValid(creditCardNumber) === true){
        pNode.textContent += "Tarjeta de cŕedito válida";
        pNode.style.color = '#008000';
    }else{
        pNode.textContent += "Tarjeta de cŕedito inválida";
        pNode.style.color = '#d00000';
    }
    
    document.getElementById("cardNumber").value = validator.maskify(creditCardNumber);
    
    const buttonLimpiar = document.getElementById("limpiar");
    const buttonValidar = document.getElementById("validar");
    if (buttonLimpiar.style.display !== "none") {
        buttonLimpiar.style.display = "block";
        buttonValidar.style.display = "none";
    } else {
        buttonLimpiar.style.display = "none";
        buttonValidar.style.display = "block";
    }
        
});

document.getElementById("limpiar").addEventListener("click", function(e){
    e.preventDefault();
    window.location.href='index.html';
});
