function alertaPorCaracter()
        {
          var alerta = alertify.alert().setting('alerta');
        alertify.alert()
          .setting({
            'label':'Aceptar', //boton de aceptar
            'message': 'Solo se pueden ingresar números!!! ' , //texto de la alerta
            'onok': function(){  //funcion que se ejecuta al precionar aceptar
              alertify.error('Corregir campo marcado en rojo',4); //tira un mensaje abajo a la derecha que dice corregilo
              //error hace que el mensaje sea con fondo rojo, sino tambien podriamos poner succes (verde) warning (amarillo)
              //4 es el delay
            }

             
          }).show();  

}
function alertaPerfecto()
{
  var notification = alertify.notify('Perfecto!', 'success', 4);
  //Creo una notificacion que dice perfecto en modo succes osea en fondo verde, 4 es el delay
}