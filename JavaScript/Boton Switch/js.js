/*---------------------------------------------------------------------*/
var i=0;
var toggle1 = document.getElementById('toggle1');
var toggle2 = document.getElementById('toggle2');
var toggle3 = document.getElementById('toggle3');
var indicador2 = document.getElementById('indicador2');
var indicador3 = document.getElementById('indicador3');

var modo;
var LocalStorage2 = localStorage.getItem('toggle2');
/*---------------------------------------------------------------------*/
toggle1.onclick=function(){
    if(i==0){
        toggle1.style.justifyContent='flex-end';
        document.body.style.backgroundColor='var(--color2)';
        document.div.style.backgroundColor='var(--color2)';
        i+=1;
    }
    else{
        toggle1.style.justifyContent='flex-start';
        document.body.style.backgroundColor='var(--color1)';
        document.div.style.backgroundColor='var(--color1)';
        i-=1;
    }
}//LA PEOR MANERA
/*---------------------------------------------------------------------*/
toggle2.addEventListener('click', function(){
    modo = toggle2.classList.toggle('active');
    document.body.classList.toggle('dark');
    localStorage.setItem('mode', modo);
});//BUENA MANERA
/*---------------------------------------------------------------------*/
toggle3.onclick=function(){
    toggle3.classList.toggle('active');
    document.body.classList.toggle('dark');
}//BUENA MANERA
/*---------------------------------------------------------------------*/