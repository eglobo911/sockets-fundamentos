var socket = io();

// escuchar - los 'on' son para escuchar
socket.on("connect", function () {
  console.log("Se hizo conexion con el servidor");
});

socket.on("disconnect", function () {
  console.log("Se perdio conexion con el servidor");
});

// Enviar informacion - los 'emit' son para enviar
socket.emit(
  "enviarMensaje",
  {
    usuario: "Lobo",
    mensaje: "Hola Mundo",
  },
  function (resp) {
    console.log("El servidor respondio: ", resp);
  }
);

// Escuchar Informacion
socket.on("enviarMensaje", function (mensaje) {
  console.log("Se recibio del Servidor: ", mensaje);
});
