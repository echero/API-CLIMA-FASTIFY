const fastify = require('fastify')({logger: true})

fastify.register(require('./utils/envs'))
const {swagger} = require('./utils/swagger')
fastify.register(require('@fastify/swagger'), swagger)
fastify.register(require('./routes/v1.routes'))
fastify.register(require('./routes/location.routes'))
fastify.register(require('./routes/current.routes'))
fastify.register(require('./routes/forecast.routes'))


const start = async () => {
    await fastify.after()
    try {
        await fastify.listen(fastify.config.PORT)
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()