var t=1;
var f=1;

function tamaño(){
    t+=1;
    document.getElementById('box').style.fontSize=t+'vw';
    document.getElementById('tamaño').value=t;
    if(t==4){
        t=0;
    }
}

function familia(){
    f+=1;
    switch(f){
        case 2:
            document.getElementById('box').style.fontFamily="'Times New Roman', Times, serif";
        break;
        case 3:
            document.getElementById('box').style.fontFamily="'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";
        break;
        case 4:
            document.getElementById('box').style.fontFamily="Arial, Helvetica, sans-serif";
        break;
        case 5:
            document.getElementById('box').style.fontFamily="Verdana, Geneva, Tahoma, sans-serif";
        break;
        default:
            document.getElementById('box').style.fontFamily="'Courier New', Courier, monospace";
            f=1;
        break;
    }
}