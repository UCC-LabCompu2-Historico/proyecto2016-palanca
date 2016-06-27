/* Usamos alertas personalizadas con una libreria javascript (alertify.js) 
    las funciones de alerta estan creadas en el archivo alertas.js para que quede separado
*/
/* 
alertify.alert('Alert Title', 'Alert Message!'); alerta con titulo 
alertify.alert('Alert Message!'); alerta normal

*/
/* FORMULA PALANCA: P x Bp = R x Br  */


/* esta es una funcion que manda el scroll a la posicion donde esta el canvas
la uso para que cuando haga click en enviar, si esta todo bien me mande el scroll
hasta el elemento canvas asi veo el dibujo*/
function scrollAlCanvas()
{
    var canvas = $("#lienzo").offset().top;
    $("html, body").animate({scrollTop: canvas});
}

//Variables globales

var inputResistenciaUno;
var rangeResistenciaUno;

var inputPotenciaUno;
var rangePotenciaUno;

var inputBpUno;
var rangeBpUno;

var inputBrUno;
var rangeBrUno;

$(document).on("ready",function(){ //Cuando el documento esta ready osea cargado empieza esta funcion

    /* DIBUJO LA PALANCA */
    

    fulcro();
    palancaUnoEquilibrio();
    flecha_pot();
    flecha_res();

    /* Fin dibujo de palanca*/

    /*-----------------------------RESISTENCIA-------------------------*/
    
/* Esta funcion cambia el valor que hay en el input cuando muevo la barra de range*/
    $("#range-resistencia-uno").change(function()
    {
        $("#input-resistencia-uno").removeClass("border-red");
        //SAco el rojo porque como esta moviendo el range es imposible que meta una letra
        document.getElementById("input-resistencia-uno").value= document.getElementById("range-resistencia-uno").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-resistencia-uno").keyup(function()
    {
     inputResistenciaUno=document.getElementById("input-resistencia-uno").value;
        if(isNaN(inputResistenciaUno)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-resistencia-uno").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-resistencia-uno").value= document.getElementById("input-resistencia-uno").value;
            $("#input-resistencia-uno").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*--------------------------FIN RESISTENCIA----------------------------*/

     /*---------------------------POTENCIA-------------------------------*/
    $("#range-potencia-uno").change(function()
    {
        $("#input-potencia-uno").removeClass("border-red");
        //Saco el rojo porque como estoy moviendo el range es imposible que meta una letra
        document.getElementById("input-potencia-uno").value= document.getElementById("range-potencia-uno").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-potencia-uno").keyup(function()
    {
     inputPotenciaUno=document.getElementById("input-potencia-uno").value;
        if(isNaN(inputPotenciaUno)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-potencia-uno").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-potencia-uno").value= document.getElementById("input-potencia-uno").value;
            $("#input-potencia-uno").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*---------------------------FIN POTENCIA---------------------------*/

     /*---------------------------BRAZO DE POTENCIA-------------------------------*/
    $("#range-bp-uno").change(function()
    {
        $("#input-bp-uno").removeClass("border-red");
        //Saco el rojo porque como estoy moviendo el range es imposible que meta una letra
        document.getElementById("input-bp-uno").value= document.getElementById("range-bp-uno").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-bp-uno").keyup(function()
    {
     inputBpUno=document.getElementById("input-bp-uno").value;
        if(isNaN(inputBpUno)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-bp-uno").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-bp-uno").value= document.getElementById("input-bp-uno").value;
            $("#input-bp-uno").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*---------------------------FIN BRAZO DE POTENCIA---------------------------*/

      /*---------------------------BRAZO DE RESISTENCIA-------------------------------*/
    $("#range-br-uno").change(function()
    {
        $("#input-br-uno").removeClass("border-red");
        //Saco el rojo porque como estoy moviendo el range es imposible que meta una letra
        document.getElementById("input-br-uno").value= document.getElementById("range-br-uno").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-br-uno").keyup(function()
    {
     inputBrUno=document.getElementById("input-br-uno").value;
        if(isNaN(inputBrUno)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-br-uno").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-br-uno").value= document.getElementById("input-br-uno").value;
            $("#input-br-uno").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*---------------------------FIN BRAZO DE RESISTENCIA---------------------------*/

    /*-------------------------------------------------AL HACER CLICK EN ENVIAR (palanca tipo 1)-------------------------------------------*/
    $('#enviar-uno').on("click", function(){

       var bp = document.getElementById("input-bp-uno").value;
       var br = document.getElementById("input-br-uno").value;
       var p = document.getElementById("input-potencia-uno").value;
       var r = document.getElementById("input-resistencia-uno").value;

        var selectBp = document.getElementById("select-bp-uno").value;
        var selectBr = document.getElementById("select-br-uno").value;
        var selectP = document.getElementById("select-potencia-uno").value;
        var selectR = document.getElementById("select-resistencia-uno").value;

        // 1 kgf = 9.8067 newton
        /* Si las medidas estan en kgf o pies las paso a newton y metros */
        if(selectR==2) //si vale 2 esta en kgf y lo paso a newton
        {
            selectR = selectR*9.8067;
        }
        if(selectP==2)
        {
            selectP = selectP*9.8067;
        }

        //1 pie = 0.3048 metro
        if(selectBr==2) //si esta en 2 esta en pies y lo paso a metros
        {
            selectBr = selectBr*0.3048;
        }
        if(selectBp==2)
        {
            selectBp = selectBp*0.3048;
        }


       if(isNaN(bp)||isNaN(br)||isNaN(p)||isNaN(r))
        /* este if es para que si en algun campo metio algo que no sea un numero
        ( if is not a number) entre y ejecute la funcion alertaPorCaracter, que tira una
        alerta que dice que solo se pueden poner numeros y cuando le das okay
        da una notificacion que dice corregir*/
       {
        alertaPorCaracter();
       }

       if(!isNaN(bp)&!isNaN(br)&!isNaN(p)&!isNaN(r))
        /*A este if entra si esta todo okay*/
       {
                alertaPerfecto(); //Notificacion que dice perfecto si esta todo ok

                    // Ahora veo para que lado va a quedar la palanca o si queda en equilibrio
                if(p > (br*r)/bp)
                {
                    borrarCanvas();
                    fulcro();
                    palancaUnoIzq(); // Dibujo la palanca caida hacia la izquierda
                }

                if(p < (br*r)/bp)
                {
                    borrarCanvas();
                    fulcro();
                    palancaUnoDer(); //Dibujo la palanca caida hacia la derecha
                }

                if((bp*p)==(br*r))
                {
                    borrarCanvas();
                    fulcro();
                    palancaUnoEquilibrio(); //Dibujo la palanca en equilibrio
                }
                scrollAlCanvas(); //mando el scroll hasta el canvas asi se ve el dibujo
                var potNecesaria = (r*br)/bp;
                document.getElementById("pot-necesaria-uno").value=potNecesaria;

            
        }

    });
});





