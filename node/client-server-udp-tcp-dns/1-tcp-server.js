'use strict';

const net = require('net');

const onData = data => {
    console.log('🏔 ' + data);
};

const server = net.createServer(socket => {
    console.dir(socket.address());
    
    socket.write('❄️');
    socket.on('data', onData);
    socket.on('error', err => {
        console.log('Socket error', err);
    });
}).listen(8848);


server.on('error', err => {
    console.log('Server error', err);
});
