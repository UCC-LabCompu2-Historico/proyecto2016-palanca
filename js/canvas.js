/*--------------------------DIBUJO DE CANVAS------------------------*/

var myCanvas = document.getElementById("lienzo");
var context = myCanvas.getContext("2d");

function borrarCanvas()
{
    context.clearRect(0,0,500,300);
}

function fulcro()
{


    /* Aca dibujo el triangulo */
    context.beginPath();

    context.moveTo(255,250);
    context.lineTo(285,250);
    context.lineTo(270,220);
    context.lineTo(255,250);
    context.closePath();

    context.lineWidth=2;
    context.fillStyle="black";
    context.fill();
    context.strokeStyle="black";
    context.stroke();

    // INDICAMOS CUANTO VALE P Y R
    context.font="30px Lato";
    context.fillText("Potencia:"+document.getElementById("input-potencia-uno").value,50,50);
    context.fillText("Resistencia:"+document.getElementById("input-resistencia-uno").value,50,100);
}

function palancaUnoEquilibrio()
{
    /*Aca dibujo el rectanculo que va arriba del trianguo*/
    context.fillStyle="black";
    context.fillRect(160,210,180,10);
}

function palancaUnoIzq()
{
    

    var a = 220;
    var b = 220;

    setInterval(function() {
    borrarCanvas();
    fulcro();
    
    
   if(a<240 && b>200)
    {
       a++;
       b--;
    }
    context.beginPath();
    context.fillStyle="black";
    context.lineWidth=12;
    context.moveTo(160,a);
    context.lineTo(340,b);
    context.stroke();

    context.closePath();
    }, 2000 / 24); 
}

function palancaUnoDer()
{
    var a = 210;
    var b = 210;

    setInterval(function() {
    borrarCanvas();
    fulcro();
    
    
   if(a<250 && b>190)
    {
       a++;
       b--;
    }
    context.beginPath();
    context.fillStyle="black";
    context.lineWidth=12;
    context.moveTo(160,b);
    context.lineTo(340,a);
    context.stroke();

    context.closePath();
    }, 2000 / 24); 
}

function flecha_pot()
{
    context.fillStyle="red";
    context.strokeStyle="red";
    /* Flecha de potencia */

    context.fillRect(180,160,10,30);

    context.beginPath();
    context.moveTo(170,190);
    context.lineTo(200,190);
    context.lineTo(185,210);
    context.lineTo(170,190);

    context.closePath();

    context.lineWidth=2;
    context.fillStyle="red";
    context.fill();
    context.strokeStyle="red";
    context.stroke();

}

function flecha_res()
{
    context.fillStyle="blue";
    context.strokeStyle="blue";
    /* Flecha de resistencia */
    context.beginPath();
    context.fillRect(310,160,10,30);
    context.moveTo(300,190);
    context.lineTo(330,190);
    context.lineTo(315,210);
    context.lineTo(300,190);
    context.closePath();

    context.lineWidth=2;
    context.fillStyle="blue";
    context.fill();
    context.strokeStyle="blue";
    context.stroke();

}


/* DIBUJOS DEL CANVAS 2*/
var myCanvasDos = document.getElementById("lienzoDos");
var contextDos = myCanvasDos.getContext("2d");

function borrarCanvasDos()
{
    contextDos.clearRect(0,0,500,300);
}
function fulcroDos()
{
    /* Aca dibujo el triangulo */
    contextDos.beginPath();

    contextDos.moveTo(315,250);
    contextDos.lineTo(345,250);
    contextDos.lineTo(330,220);
    contextDos.lineTo(315,250);
    contextDos.closePath();

    contextDos.lineWidth=2;
    contextDos.fillStyle="black";
    contextDos.fill();
    contextDos.strokeStyle="black";
    contextDos.stroke();

    // INDICAMOS CUANTO VALE P Y R
    contextDos.font="30px Lato";
    contextDos.fillText("Potencia:"+document.getElementById("input-potencia-dos").value,50,50);
    contextDos.fillText("Resistencia:"+document.getElementById("input-resistencia-dos").value,50,100);
}
function palancaDosIzq()
{
   /*contextDos.moveTo(350,215);
    contextDos.lineTo(160,170);

    contextDos.lineWidth=6;

    contextDos.stroke();

    equilibrio:

    contextDos.fillRect(160,210,180,10);
*/
    
    var a = 210;
    var b = 210;

    setInterval(function() {
    borrarCanvasDos();
    fulcroDos();
    
    
   if(a<235 && b>195)
    {
       a++;
       b--;
    }
    contextDos.beginPath();
    contextDos.fillStyle="black";
    contextDos.lineWidth=12;
    contextDos.moveTo(160,b);
    contextDos.lineTo(350,a);
    contextDos.stroke();

    contextDos.closePath();
    }, 2000 / 24); 


}
function palancaDosDer()
{
   /* contextDos.moveTo(345,210);
    contextDos.lineTo(160,250);

    contextDos.lineWidth=6;

    contextDos.stroke();*/

    var a = 230;
    var b = 215;

    setInterval(function() {
    borrarCanvasDos();
    fulcroDos();
    
    
   if(a<255 && b>210)
    {
       a++;
       b--;
    }
    contextDos.beginPath();
    contextDos.fillStyle="black";
    contextDos.lineWidth=12;
    contextDos.moveTo(160,a);
    contextDos.lineTo(350,b);
    contextDos.stroke();

    contextDos.closePath();
    }, 2000 / 24); 
}
function palancaDosEquilibrio()
{
    /*Aca dibujo el rectanculo que va arriba del trianguo*/
    contextDos.fillStyle="black";
    contextDos.fillRect(160,210,180,10);
}
function flecha_pot_dos()
{
    contextDos.fillStyle="red";
    contextDos.strokeStyle="red";
    /* Flecha de potencia */

    contextDos.fillRect(180,180,10,30);

    contextDos.beginPath();
    contextDos.moveTo(170,180);
    contextDos.lineTo(200,180);
    contextDos.lineTo(185,160);
    contextDos.lineTo(170,180);

    contextDos.closePath();

    contextDos.lineWidth=2;
    contextDos.fillStyle="red";
    contextDos.fill();
    contextDos.strokeStyle="red";
    contextDos.stroke();
}

function flecha_res_dos()
{
    contextDos.fillStyle="blue";
    contextDos.strokeStyle="blue";
    /* Flecha de resistencia */
    contextDos.beginPath();
    contextDos.fillRect(290,160,10,30);
    contextDos.moveTo(280,190);
    contextDos.lineTo(310,190);
    contextDos.lineTo(295,210);
    contextDos.lineTo(280,190);
    contextDos.closePath();

    contextDos.lineWidth=2;
    contextDos.fillStyle="blue";
    contextDos.fill();
    contextDos.strokeStyle="blue";
    contextDos.stroke();
}
/* DIBUJOS DEL CANVAS 3*/
var myCanvasTres = document.getElementById("lienzoTres");
var contextTres = myCanvasTres.getContext("2d");
function borrarCanvasTres()
{
    contextTres.clearRect(0,0,500,300);
}

function fulcroTres()
{
    /* Aca dibujo el triangulo */
    contextTres.beginPath();

    contextTres.moveTo(315,250);
    contextTres.lineTo(345,250);
    contextTres.lineTo(330,220);
    contextTres.lineTo(315,250);
    contextTres.closePath();

    contextTres.lineWidth=2;
    contextTres.fillStyle="black";
    contextTres.fill();
    contextTres.strokeStyle="black";
    contextTres.stroke();

     contextTres.font="30px Lato";
    contextTres.fillText("Potencia:"+document.getElementById("input-potencia-tres").value,50,50);
    contextTres.fillText("Resistencia:"+document.getElementById("input-resistencia-tres").value,50,100);
}
function flecha_res_tres()
{
    contextTres.fillStyle="blue";
    contextTres.strokeStyle="blue";
    /* Flecha de potencia */

    contextTres.fillRect(180,180,10,30);

    contextTres.beginPath();
    contextTres.moveTo(170,180);
    contextTres.lineTo(200,180);
    contextTres.lineTo(185,160);
    contextTres.lineTo(170,180);

    contextTres.closePath();

    contextTres.lineWidth=2;
    contextTres.fillStyle="blue";
    contextTres.fill();
    contextTres.strokeStyle="blue";
    contextTres.stroke();
}
function flecha_pot_tres()
{
    contextTres.fillStyle="red";
    contextTres.strokeStyle="red";
    /* Flecha de resistencia */
    contextTres.beginPath();
    contextTres.fillRect(290,160,10,30);
    contextTres.moveTo(280,190);
    contextTres.lineTo(310,190);
    contextTres.lineTo(295,210);
    contextTres.lineTo(280,190);
    contextTres.closePath();

    contextTres.lineWidth=2;
    contextTres.fillStyle="red";
    contextTres.fill();
    contextTres.strokeStyle="red";
    contextTres.stroke();
}
function palancaTresDer()
{

    var a = 210;
    var b = 210;

    setInterval(function() {
    borrarCanvasTres();
    fulcroTres();
    
    
   if(a<250 && b>200)
    {
       a++;
       b--;
    }
    contextTres.beginPath();
    contextTres.fillStyle="black";
    contextTres.lineWidth=12;
    contextTres.moveTo(160,b);
    contextTres.lineTo(350,a);
    contextTres.stroke();

    contextTres.closePath();
    }, 2000 / 24); 
}
function palancaTresIzq()
{
    var a = 220;
    var b = 230;

    setInterval(function() {
    borrarCanvasTres();
    fulcroTres();
    
    
   if(a<240 && b>210)
    {
       a++;
       b--;
    }
    contextTres.beginPath();
    contextTres.fillStyle="black";
    contextTres.lineWidth=12;
    contextTres.moveTo(160,a);
    contextTres.lineTo(350,b);
    contextTres.stroke();

    contextTres.closePath();
    }, 1000 / 24); 
}
function palancaTresEquilibrio()
{
    /*Aca dibujo el rectanculo que va arriba del trianguo*/
    contextTres.fillStyle="black";
    contextTres.fillRect(160,210,180,10);
}
/*-------------------------FIN DIBUJO DE CANVAS------------------*/

