var boton=document.getElementsByTagName("button")[0];
var contenedor=document.getElementsByTagName("div");
var turno=true;
var puntoX=0;
var punto0=0;


boton.onclick=ocultar;

function ocultar(){
    boton.onclick=ocultar;
    var modal=document.getElementsByClassName("modal")[0];
    modal.className+=" oculto ";
    for(i=0;i<contenedor.length;i++){
        contenedor[i].innerHTML="";
        contenedor[i].setAttribute("onclick","escribir("+i+")");
        contenedor[i].className="";
    }
    turno=true;
    ///modal.className= "modal oculto";
}


function mostrar(){
    var modal=document.getElementsByClassName("modal")[0];
    modal.className="modal";
}
/*
contenedor[0].setAttribute("onclick","escribir(0)");
contenedor[1].setAttribute("onclick","escribir(1)");
contenedor[2].setAttribute("onclick","escribir(2)");
contenedor[3].setAttribute("onclick","escribir(3)");
contenedor[4].setAttribute("onclick","escribir(4)");
contenedor[5].setAttribute("onclick","escribir(5)");
contenedor[6].setAttribute("onclick","escribir(6)");
contenedor[7].setAttribute("onclick","escribir(7)");
contenedor[8].setAttribute("onclick","escribir(8)");*/

function escribir(num){
    var h2= document.createElement("h2");
    if(turno==true){
        h2.innerHTML="X";
        h2.className="X";
        turno=false;
    }
    else{
        h2.innerHTML="0";
        h2.className="0";
        turno=true;
    }
    contenedor[num].appendChild(h2);
    contenedor[num].className="elegido";
    //contenedor[num].setAttribute("onclick","");
    //esta linea hace lo mismo que la de abajo
    contenedor[num].removeAttribute("onclick");
    ganar();
}

function ganar(){
    if(contenedor[0].innerHTML!="" && contenedor[1].innerHTML!="" && contenedor[2].innerHTML!="" 
    && contenedor[3].innerHTML!="" && contenedor[4].innerHTML!="" && contenedor[5].innerHTML!="" 
    && contenedor[6].innerHTML!="" && contenedor[7].innerHTML!="" && contenedor[8].innerHTML!="")
     {
         var modal=document.getElementsByTagName("section")[0];
         modal.childNodes[0].innerHTML="EMPATE";
         modal.childNodes[2].innerHTML="Jugar Otra";
         mostrar();
     }

    if (contenedor[0].innerHTML!=""  && contenedor[0].innerHTML==contenedor[1].innerHTML && contenedor[0].innerHTML==contenedor[2].innerHTML){
        var vencedor= contenedor[0].firstChild.innerHTML;
        punto(vencedor);
        
    }

    if (contenedor[3].innerHTML!=""  && contenedor[3].innerHTML==contenedor[4].innerHTML && contenedor[3].innerHTML==contenedor[5].innerHTML){
        
        var vencedor= contenedor[3].firstChild.innerHTML;
        punto(vencedor);
        
    }

    if (contenedor[6].innerHTML!=""  && contenedor[6].innerHTML==contenedor[7].innerHTML && contenedor[6].innerHTML==contenedor[8].innerHTML){
        
        var vencedor= contenedor[6].firstChild.innerHTML;
        punto(vencedor);
        
    }

    if (contenedor[0].innerHTML!=""  && contenedor[0].innerHTML==contenedor[3].innerHTML && contenedor[0].innerHTML==contenedor[6].innerHTML){
        
        var vencedor= contenedor[0].firstChild.innerHTML;
        punto(vencedor);
        
    }

    if (contenedor[1].innerHTML!=""  && contenedor[1].innerHTML==contenedor[4].innerHTML && contenedor[1].innerHTML==contenedor[7].innerHTML){
        
        var vencedor= contenedor[1].firstChild.innerHTML;
        punto(vencedor);
        
    }

    if (contenedor[2].innerHTML!=""  && contenedor[2].innerHTML==contenedor[5].innerHTML && contenedor[2].innerHTML==contenedor[8].innerHTML){

        var vencedor= contenedor[2].firstChild.innerHTML;
        punto(vencedor);
        
    }

    if (contenedor[0].innerHTML!=""  && contenedor[0].innerHTML==contenedor[4].innerHTML && contenedor[0].innerHTML==contenedor[8].innerHTML){

        var vencedor= contenedor[0].firstChild.innerHTML;
        punto(vencedor);
        
    }

    if (contenedor[2].innerHTML!=""  && contenedor[2].innerHTML==contenedor[4].innerHTML && contenedor[2].innerHTML==contenedor[6].innerHTML){

        var vencedor= contenedor[2].firstChild.innerHTML;
        punto(vencedor);
        
    }
    
    
}

function punto(anotar){
    h1=document.getElementsByTagName("h1");// con esto creo una coleccion bajo el nomnbre h1 y llamo y guardo a todos los 
                                  //elementos del html bajo la etiqueta h1
    if(anotar=="X"){
        puntoX++;
        h1[0].innerHTML="J1: "+puntoX;
    }
    else{
        punto0++;
        h1[1].innerHTML="J2: "+punto0;
    }

    var modal=document.getElementsByTagName("section")[0];
    if(puntoX<5 && punto0<5){
        
        modal.childNodes[0].innerHTML="Ganó "+anotar+"!!!";
        modal.childNodes[2].innerHTML="Jugar Otra";
    }
    else{
        modal.childNodes[0].innerHTML="Campeon Definitivo "+anotar+"!!!";
        modal.childNodes[1].innerHTML="FELICIDADES!!!";
        modal.childNodes[2].innerHTML="Reiniciar Juego!";
        modal.childNodes[2].setAttribute("onclick","reiniciar()");
    }
    mostrar();
}

function reiniciar(){
    puntoX=0;
    punto0=0;
    h1=document.getElementsByTagName("h1");
    h1[0].innerHTML="X: ";
    h1[1].innerHTML="0: ";
    ocultar();
}