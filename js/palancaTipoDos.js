function scrollAlCanvasDos()
{
    var canvasDos = $("#lienzoDos").offset().top;
    $("html, body").animate({scrollTop: canvasDos});
}

//Variables globales

var inputResistenciaDos;
var rangeResistenciaDos;

var inputPotenciaDos;
var rangePotenciaDos;

var inputBpDos;
var rangeBpDos;

var inputBrDos;
var rangeBrDos;


$(document).on("ready",function(){ //Cuando el documento esta ready osea cargado empieza esta funcion

    /* DIBUJO LA PALANCA */
    fulcroDos();
    palancaDosEquilibrio();
    flecha_pot_dos();
    flecha_res_dos();
    /* Fin dibujo de palanca*/

    /*-----------------------------RESISTENCIA-------------------------*/
    
/* Esta funcion cambia el valor que hay en el input cuando muevo la barra de range*/
    $("#range-resistencia-dos").change(function()
    {
        $("#input-resistencia-dos").removeClass("border-red");
        //SAco el rojo porque como esta moviendo el range es imposible que meta una letra
        document.getElementById("input-resistencia-dos").value= document.getElementById("range-resistencia-dos").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-resistencia-dos").keyup(function()
    {
     inputResistenciaDos=document.getElementById("input-resistencia-dos").value;
        if(isNaN(inputResistenciaDos)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-resistencia-dos").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-resistencia-dos").value= document.getElementById("input-resistencia-dos").value;
            $("#input-resistencia-dos").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*--------------------------FIN RESISTENCIA----------------------------*/

     /*---------------------------POTENCIA-------------------------------*/
    $("#range-potencia-dos").change(function()
    {
        $("#input-potencia-dos").removeClass("border-red");
        //Saco el rojo porque como estoy moviendo el range es imposible que meta una letra
        document.getElementById("input-potencia-dos").value= document.getElementById("range-potencia-dos").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-potencia-dos").keyup(function()
    {
     inputPotenciaDos=document.getElementById("input-potencia-dos").value;
        if(isNaN(inputPotenciaDos)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-potencia-dos").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-potencia-dos").value= document.getElementById("input-potencia-dos").value;
            $("#input-potencia-dos").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*---------------------------FIN POTENCIA---------------------------*/

     /*---------------------------BRAZO DE POTENCIA-------------------------------*/
    $("#range-bp-dos").change(function()
    {
        $("#input-bp-dos").removeClass("border-red");
        //Saco el rojo porque como estoy moviendo el range es imposible que meta una letra
        document.getElementById("input-bp-dos").value= document.getElementById("range-bp-dos").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-bp-dos").keyup(function()
    {
     inputBpDos=document.getElementById("input-bp-dos").value;
        if(isNaN(inputBpDos)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-bp-dos").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-bp-dos").value= document.getElementById("input-bp-dos").value;
            $("#input-bp-dos").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*---------------------------FIN BRAZO DE POTENCIA---------------------------*/

      /*---------------------------BRAZO DE RESISTENCIA-------------------------------*/
    $("#range-br-dos").change(function()
    {
        $("#input-br-dos").removeClass("border-red");
        //Saco el rojo porque como estoy moviendo el range es imposible que meta una letra
        document.getElementById("input-br-dos").value= document.getElementById("range-br-dos").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-br-dos").keyup(function()
    {
     inputBrDos=document.getElementById("input-br-dos").value;
        if(isNaN(inputBrDos)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-br-dos").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-br-dos").value= document.getElementById("input-br-dos").value;
            $("#input-br-dos").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*---------------------------FIN BRAZO DE RESISTENCIA---------------------------*/

    /*-------------------------------------------------AL HACER CLICK EN ENVIAR (palanca tipo 1)-------------------------------------------*/
    $('#enviar-dos').on("click", function(){

       var bp = document.getElementById("input-bp-dos").value;
       var br = document.getElementById("input-br-dos").value;
       var p = document.getElementById("input-potencia-dos").value;
       var r = document.getElementById("input-resistencia-dos").value;

        var selectBp = document.getElementById("select-bp-dos").value;
        var selectBr = document.getElementById("select-br-dos").value;
        var selectP = document.getElementById("select-potencia-dos").value;
        var selectR = document.getElementById("select-resistencia-dos").value;

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
                    borrarCanvasDos();
                    fulcroDos();
                    palancaDosIzq(); // Dibujo la palanca caida hacia la izquierda
                }

                if(p < (br*r)/bp)
                {
                    borrarCanvasDos();
                    fulcroDos();
                    palancaDosDer(); //Dibujo la palanca caida hacia la derecha
                }

                if((bp*p)==(br*r))
                {
                    borrarCanvasDos();
                    fulcroDos();
                    palancaDosEquilibrio(); //Dibujo la palanca en equilibrio
                }
                scrollAlCanvasDos(); //mando el scroll hasta el canvas asi se ve el dibujo
            
            var potNecesaria = (r*br)/bp;

                document.getElementById("pot-necesaria-dos").value=potNecesaria;
        }

    });
});





