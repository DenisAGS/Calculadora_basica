let boton = document.getElementById('sumar');
let botonRes = document.getElementById('resta');
let botonMul = document.getElementById('multiplicacion');
let botonDiv = document.getElementById('division');
let respuesta = document.getElementById('respuesta');

boton.addEventListener('click',hacersuma);
botonRes.addEventListener('click',hacerresta);
botonMul.addEventListener('click',hacermultiplicacion);
botonDiv.addEventListener('click',hacerdivision);

function hacersuma(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1+n2;
    respuesta.innerHTML=`El resultado de la suma es: ${n3}`;
}

function hacerresta(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1-n2;
    respuesta.innerHTML=`El resultado de la resta es: ${n3}`;
}

function hacermultiplicacion(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1*n2;
    respuesta.innerHTML=`El resultado de la multiplicacion es: ${n3}`;
}

function hacerdivision(){
    let n1 =parseFloat(document.getElementById('n1').value);
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1/n2;
    respuesta.innerHTML=`El resultado de la division es: ${n3}`;
}