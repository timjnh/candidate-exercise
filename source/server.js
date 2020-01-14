'use strict';

const Hapi = require('@hapi/hapi'),
    Inert = require('@hapi/inert'),
    Vision = require('@hapi/vision'),
    HapiSwagger = require('hapi-swagger');

class Server {
    constructor() {
        this.server = null;
    }

    async start() {
        this.server = new Hapi.Server({
            port: 8080
        });

        await this.server.register([
            Inert,
            Vision,
            HapiSwagger
        ]);

        this.server.route([{
            method: 'GET',
            path: '/hello',
            config: { tags: ['api'] },
            handler: async () => {
                return { hello: 'world' };
            }
        }]);

        await this.server.start();

        console.info(`HTTP server started at ${this.server.info.uri}`);
    }
}

module.exports = { Server };