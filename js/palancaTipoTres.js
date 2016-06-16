function scrollAlCanvasTres()
{
    var canvasTres = $("#lienzoTres").offset().top;
    $("html, body").animate({scrollTop: canvasTres});
}

//Variables globales

var inputResistenciaTres;
var rangeResistenciaTres;

var inputPotenciaTres;
var rangePotenciaTres;

var inputBpTres;
var rangeBpTres;

var inputBrTres;
var rangeBrTres;


$(document).on("ready",function(){ //Cuando el documento esta ready osea cargado empieza esta funcion

    /* DIBUJO LA PALANCA */
    fulcroTres();
    flecha_res_tres();
    flecha_pot_tres();
    palancaTresEquilibrio();
    /* Fin dibujo de palanca*/

    /*-----------------------------RESISTENCIA-------------------------*/
    
/* Esta funcion cambia el valor que hay en el input cuando muevo la barra de range*/
    $("#range-resistencia-tres").change(function()
    {
        $("#input-resistencia-tres").removeClass("border-red");
        //SAco el rojo porque como esta moviendo el range es imposible que meta una letra
        document.getElementById("input-resistencia-tres").value= document.getElementById("range-resistencia-tres").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-resistencia-tres").keyup(function()
    {
     inputResistenciaTres=document.getElementById("input-resistencia-tres").value;
        if(isNaN(inputResistenciaTres)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-resistencia-tres").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-resistencia-tres").value= document.getElementById("input-resistencia-tres").value;
            $("#input-resistencia-tres").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*--------------------------FIN RESISTENCIA----------------------------*/

     /*---------------------------POTENCIA-------------------------------*/
    $("#range-potencia-tres").change(function()
    {
        $("#input-potencia-tres").removeClass("border-red");
        //Saco el rojo porque como estoy moviendo el range es imposible que meta una letra
        document.getElementById("input-potencia-tres").value= document.getElementById("range-potencia-tres").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-potencia-tres").keyup(function()
    {
     inputPotenciaTres=document.getElementById("input-potencia-tres").value;
        if(isNaN(inputPotenciaTres)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-potencia-tres").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-potencia-tres").value= document.getElementById("input-potencia-tres").value;
            $("#input-potencia-tres").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*---------------------------FIN POTENCIA---------------------------*/

     /*---------------------------BRAZO DE POTENCIA-------------------------------*/
    $("#range-bp-tres").change(function()
    {
        $("#input-bp-tres").removeClass("border-red");
        //Saco el rojo porque como estoy moviendo el range es imposible que meta una letra
        document.getElementById("input-bp-tres").value= document.getElementById("range-bp-tres").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-bp-tres").keyup(function()
    {
     inputBpTres=document.getElementById("input-bp-tres").value;
        if(isNaN(inputBpTres)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-bp-tres").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-bp-tres").value= document.getElementById("input-bp-tres").value;
            $("#input-bp-tres").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*---------------------------FIN BRAZO DE POTENCIA---------------------------*/

      /*---------------------------BRAZO DE RESISTENCIA-------------------------------*/
    $("#range-br-tres").change(function()
    {
        $("#input-br-tres").removeClass("border-red");
        //Saco el rojo porque como estoy moviendo el range es imposible que meta una letra
        document.getElementById("input-br-tres").value= document.getElementById("range-br-tres").value;
    });

/* Esta funcion mueve el range mientras escribo en el input y si en el input hay letras le pone borde rojo*/
     $("#input-br-tres").keyup(function()
    {
     inputBrTres=document.getElementById("input-br-tres").value;
        if(isNaN(inputBrTres)) //controlo que este metiendo un numero y no otra cosa
        {
            $("#input-br-tres").addClass("border-red"); //borde rojo si pone letra
        }
        else
        {
            document.getElementById("range-br-tres").value= document.getElementById("input-br-tres").value;
            $("#input-br-tres").removeClass("border-red"); //saco borde rojo si es que lo tenia sino no hace nada esto
        }
    });

     /*---------------------------FIN BRAZO DE RESISTENCIA---------------------------*/

    /*-------------------------------------------------AL HACER CLICK EN ENVIAR (palanca tipo 1)-------------------------------------------*/
    $('#enviar-tres').on("click", function(){

       var bp = document.getElementById("input-bp-tres").value;
       var br = document.getElementById("input-br-tres").value;
       var p = document.getElementById("input-potencia-tres").value;
       var r = document.getElementById("input-resistencia-tres").value;

        var selectBp = document.getElementById("select-bp-tres").value;
        var selectBr = document.getElementById("select-br-tres").value;
        var selectP = document.getElementById("select-potencia-tres").value;
        var selectR = document.getElementById("select-resistencia-tres").value;

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
                    borrarCanvasTres();
                    fulcroTres();
                    palancaTresIzq(); // Dibujo la palanca caida hacia la izquierda
                }

                if(p < (br*r)/bp)
                {
                    borrarCanvasTres();
                    fulcroTres();
                    palancaTresDer(); //Dibujo la palanca caida hacia la derecha
                }

                if((bp*p)==(br*r))
                {
                    borrarCanvasTres();
                    fulcroTres();
                    palancaTresEquilibrio(); //Dibujo la palanca en equilibrio
                }
                scrollAlCanvasTres(); //mando el scroll hasta el canvas asi se ve el dibujo
            
            
        }

    });
});





