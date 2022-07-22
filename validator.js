const validator = {
  isValid: function(creditCardNumber){
    const reverseNumber = creditCardNumber.split("").reverse().join("");
    const validationCardNumber = [];

    //Algoritmo Luhn
    //Guardando los números invertidos en el array validationCardNumber
    for(let i=0; i < creditCardNumber.length; i++){
      validationCardNumber.push(parseInt(reverseNumber[i]));
    }

    //Operacion de duplicar los números pares
    for(let j=1; j < validationCardNumber.length; j+=2 ){
        let doubled = validationCardNumber[j]*2;
        validationCardNumber[j] = doubled;
        let stringDoubled = doubled.toString();

        //Sumar los números que sean mayor a un dígito
        if(stringDoubled.length > 1){
            let newNumber = parseInt(stringDoubled.charAt(0)) + parseInt(stringDoubled.charAt(1));
            validationCardNumber[j] = newNumber;          
        }
    }
    
    //Sumar todos los dígitos
    const sum = validationCardNumber.reduce((acumulador,valorActual) => acumulador + valorActual, 0);
    
    //Checar si la tarjeta es válida o invalida
    
    if(sum % 10 === 0){
	    console.log("valida");
      return true;
    }else{
	    console.log("invalida");
      return false;
    }
  },
    maskify: function(creditCardNumber){
    let numertoReplace = creditCardNumber.slice(0, -4);
    let transformNumber = creditCardNumber.replace(numertoReplace, "#".repeat(numertoReplace.length));
    console.log(transformNumber);
    return transformNumber;
    }
};
export default validator;
