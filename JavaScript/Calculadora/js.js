/*----------------------------------------------------------------------------------*/
function Eval(){//Esta función simplemente calcula casi cualquier calculo
    return eval(document.calculator.ans.value);
}
/*----------------------------------------------------------------------------------*/
function borrar(){
    document.calculator.ans.value = document.calculator.ans.value;
    return document.calculator.ans.value;
}
/*----------------------------------------------------------------------------------*/