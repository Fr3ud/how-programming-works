'use strict';

const net = require('net');

const onData = data => {
    console.log('🏔 ' + data);
};

net.createServer(socket => {
    console.dir(socket.address());
    
    socket.write('❄️');
    socket.on('data', onData);
}).listen(8848);
