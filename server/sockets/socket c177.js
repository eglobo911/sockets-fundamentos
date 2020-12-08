const { io } = require("../server");

io.on("connection", (client) => {
  console.log("Cliente se conecto al servidor");

  // Emitir msg
  client.emit("enviarMensaje", {
    usuario: "Administrador",
    mensaje: "Bienvenido a esta aplicacion",
  });

  client.on("disconnect", () => {
    console.log("Cliente se desconecto del servidor");
  });

  // Escuchar al cliente
  client.on("enviarMensaje", (mensaje, callback) => {
    //console.log(mensaje);
    if (mensaje.usuario) {
      callback({
        resp: "SI Se recibio el usuario",
      });
    } else {
      callback({
        resp: "NO se recibio el usuario",
      });
    }
  });
});
