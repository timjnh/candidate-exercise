'use strict';

const Hapi = require('@hapi/hapi'),
    Inert = require('@hapi/inert'),
    Vision = require('@hapi/vision'),
    HapiSwagger = require('hapi-swagger'),
    Joi = require('@hapi/joi');

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
            path: '/calculateArea/{edgeLength}',
            options: {
                tags: ['api'],
                validate: {
                    params: {
                         edgeLength: Joi.number().required().description('The length of one edge')
                    }
                }
            },
            handler: async (request) => {

                return { hello: 'world' };
            }
        }]);

        await this.server.start();

        console.info(`HTTP server started at ${this.server.info.uri}`);
    }
}

module.exports = { Server };
