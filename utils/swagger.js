const swagger = {
    exposeRoute: true,
    routePrefix: '/docs',
    swagger: {
        info: {
            title: 'API CLIMA',
            description: 'Api Clima - Fastify swagger API',
            version: '0.1.0',
        },
        externalDocs: {
            url: 'https://openweathermap.org/api',
            description: 'Documentacion - Weather API',
        },
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
    }
}

module.exports = {
    swagger
}