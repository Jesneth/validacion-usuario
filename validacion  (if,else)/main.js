const UsuarioA="Natalia";
let UsuarioB= prompt("Ingres su usuario");
let procesoU= validarU(UsuarioA, UsuarioB);
const ClaveA="Yosoy";
let ClaveB= prompt("Ingrese su clave");
let procesoC= validarC(ClaveA,ClaveB);

function validarU (Ua,Ub){
    if (Ua === Ub){
        document.write ("su usuario es correcto y " );

    } else if (Ua !== Ub) { 
        alert("su usuario es incorrecto " )
    }  

}


function validarC (Ca,Cb){
    if (Ca === Cb){
        document.write("su clave es correcta");
        
    } else {
        alert("su clave es incorrecta"); 
    }


}




