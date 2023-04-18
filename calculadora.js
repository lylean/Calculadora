function IngresarNum(Num){
    document.getElementById('display').value += Num;
}

function Borrar(){
    document.getElementById('display').value = '';

}

function BorrarUltimo(){
    var BUltimo = document.getElementById('display');
    var value = BUltimo.value;
    BUltimo.value = value.substring(0, value.length -1);
}


function Igual(){
    var resultado = eval(document.getElementById('display').value);
    document.getElementById('display').value = resultado;
}