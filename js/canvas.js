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


}

function palancaUnoEquilibrio()
{
    /*Aca dibujo el rectanculo que va arriba del trianguo*/
    context.fillStyle="black";
    context.fillRect(160,210,180,10);
}

function palancaUnoIzq()
{
    context.fillStyle="black";
    context.beginPath();

    context.moveTo(155,240);
    context.lineTo(355,210);
    context.lineTo(350,200);
    context.lineTo(150,230);

    context.closePath();

    context.fill();
    context.stroke();
}

function palancaUnoDer()
{
    context.fillStyle="black";
    context.beginPath();

    context.moveTo(355,230);
    context.lineTo(155,210);
    context.lineTo(158,200);
    context.lineTo(355,220);
    
    context.closePath();

    context.fill();
    context.stroke();
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
}
function palancaDosIzq()
{
    contextDos.moveTo(350,215);
    contextDos.moveTo(160,170);

    contextDos.lineWidth=6;

    contextDos.stroke();
}
function palancaDosDer()
{
    contextDos.moveTo(345,210);
    contextDos.lineTo(160,250);

    contextDos.lineWidth=6;

    contextDos.stroke();
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
    contextTres.moveTo(350,215);
    contextTres.lineTo(160,170);

    contextTres.lineWidth=6;

    contextTres.stroke();
}
function palancaTresIzq()
{
    contextTres.moveTo(345,210);
    contextTres.lineTo(160,250);

    contextTres.lineWidth=6;

    contextTres.stroke();
}
function palancaTresEquilibrio()
{
    /*Aca dibujo el rectanculo que va arriba del trianguo*/
    contextTres.fillStyle="black";
    contextTres.fillRect(160,210,180,10);
}
/*-------------------------FIN DIBUJO DE CANVAS------------------*/

