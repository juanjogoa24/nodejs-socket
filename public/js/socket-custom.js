var socket = io();
// los on son para escuchar
socket.on('connect', function() {
    console.log('Conctado al Servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el Servidor');
});
//los emit son para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Juanjo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('resp server::', resp);
});

//escuchar informacion
//Escuchar el cliente
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});