const { io } = require('../server')

//para saber que un usuario se conecta
io.on('connection', (client) => {

    console.log('Usuario conectado');

    //para enviar un mensaje al cliente desde el servidor
    client.emit('enviarMensaje', {
        usuario: 'Administardor',
        mensaje: 'bienvenido a esta app'
    });

    // para mostrar que un usuario se ha desconectado
    client.on('disconnect', () => {
        console.log('suario desconectado');
    })

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        //con esto solo el mismo cliente lo recibe
        //client.emit('enviarMensaje', data);

        //para que lo reciban todos los clientes se debe de adicionar:
        client.broadcast.emit('enviarMensaje', data);


        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo slio bien'
        //     })

        // } else {

        //     callback({
        //         resp: 'Todo slio Mal'
        //     })
        // }



    })

});