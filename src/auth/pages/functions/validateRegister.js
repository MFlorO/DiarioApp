

const expresionEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;


//VALIDACION DEL FORMULARIO
const validateRegister = (input) => {

    let errores = {};
  
    if((input.name.length < 3)){   
    errores.name = "The name must have more than 3 characters"
    }

    if((!expresionEmail.test(input.email))){   
      errores.email = "Error in email format"
      }  
    
    return errores
  }

export default validateRegister