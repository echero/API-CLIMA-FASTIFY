const fastify = require('fastify');
const fastifyEnv = require('@fastify/env')
const fastifyPlugin = require('fastify-plugin');

const schema = {
    type: 'object',
    required: [ 'PORT', 'API_KEY_OPEN_WEATHER' ],
    properties: {
      PORT: {
        type: 'number',
        default: 5000
      },
      API_KEY_OPEN_WEATHER: {
        type: 'string',
        default: 'caa63e0e356fcbc235c450586473100d'
      }
    }
}

const options = {
    confKey: 'config', // optional, default: 'config'
    schema: schema,
    data: process.env // optional, default: process.env
  }

async function envConnector (fastify) {
  fastify.register(fastifyEnv, options)
}

module.exports =  fastifyPlugin(envConnector);