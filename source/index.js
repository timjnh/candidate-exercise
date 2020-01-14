'use strict';

const { Server } = require('./server');

(async () => {
    const server = new Server();

    await server.start();
})();