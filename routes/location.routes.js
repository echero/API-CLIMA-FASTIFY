const {getLocation} = require('../controllers/location.controller')

//MAPEA EL SCHEMA DEL JSON QUE DEVOLVEMOS DE LA API IP-API
const getLocationOpts =  {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: {
                    country: { type: 'string'},
                    countryCode: { type: 'string' },
                    regionName: { type: 'string' },
                    city: { type: 'string' }
                },
                required: [
                    'country', 
                    'countryCode', 
                    'regionName', 
                    'city'
                ],
                example: {
                    country: 'Argentina',
                    countryCode: 'AR',
                    regionName: 'Buenos Aires',
                    city: 'Tigre'
                }
            }
        }
    },
    handler: getLocation,
}

async function locationRoutes (fastify, options, done) {

    // TRAE LA UBICACION POR IP
    await fastify.get('/location', getLocationOpts)

    done()

}

module.exports = locationRoutes