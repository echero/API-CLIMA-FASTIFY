async function v1Routes (fastify, options, done) {

  await fastify.get('/v1', (request, reply) => {
 
    reply.send({message: 'Esta es la API-CLIMA'})
  })

  done()
}

module.exports = v1Routes