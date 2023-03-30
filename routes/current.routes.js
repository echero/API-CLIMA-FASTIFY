const {getCurrentLocationIpApi, getCurrentLocationCity} = require('../controllers/current.controller')

//PROPERTIES SCHEMA
const Properties = {
    weather: { 
        type: 'array',
        items: {
            type: 'object',
            properties: {
                main: { type: 'string' },
                description: { type: 'string' },   
            }   
        }
    },
    main: { 
        type: 'object', 
        properties: {
            temp: { type: 'string' },
            feels_like: { type: 'string' },
            temp_min: { type: 'string' },
            temp_max: { type: 'string' },
            pressure: { type: 'string' },
            humidity: { type: 'string' },
        },
    },
    wind: { 
        type: 'object', 
        properties: {
            speed: { type: 'string' },
            deg: { type: 'string' },
            gust: { type: 'string' },
        },
    },
    sys: { 
        type: 'object', 
        properties: {
            country: { type: 'string' },
        },
    },
    name: { type: 'string'},            
}

//REQUIRED SCHEMA
const Required = [
    'weather',
    'main', 
    'wind',
    'sys',
    'name'
]

//EXAMPLE SCHEMA
const Example = {
    weather: {
        main: 'Clear',
        description: 'cielo claro'
    },
    main: {
        temp: '18.17',
        feels_like: '17.27',
        temp_min: '18.17',
        temp_max: '17.27',
        pressure: '1023',
        humidity: '0',
    },
    wind: {
        speed: '4.12',
        deg: '60',
    },
    sys: {
        country: 'AR',
    },
    name: 'Tigre'
}


//MAPEA EL SCHEMA DEL JSON QUE DEVOLVEMOS DE LA API OPEN WEATHER MAP
//OBTIENE LA UNICACION CON LA API IP API
//TAMBIEN CONTIENE EL CONTROLLER EN EL HANDLER
const getCurrentLocationIpApiOpts =   {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: Properties,
                required: Required,
                example: Example,
            }
        }
    }
}

//MAPEA EL SCHEMA DEL JSON QUE DEVOLVEMOS DE LA API OPEN WEATHER MAP
//SE PASA POR PARAMETRO LA CIUDAD
//TAMBIEN CONTIENE EL CONTROLLER EN EL HANDLER
const getCurrentLocationCityOpts =   {
    schema: {
        params: {
            type: 'object',
            properties: { 
               city: { type: 'string' } 
            },
        },
        response: {
            200: {
                type: 'object',
                properties: Properties,
                required: Required,
                example: Example,
            }
        }   
    }
}

async function currentnRoutes (fastify, options, done) {

    const {getCurrentLocationIpApi, getCurrentLocationCity} = require('../controllers/current.controller')(fastify)

    //TRAE LA INFO DEL CLIMA ACTUAL CON LA UBICACION DE LA IP
    await fastify.get('/current', getCurrentLocationIpApiOpts, getCurrentLocationIpApi) 

    //TRAE LA INFO DEL CLIMA ACTUAL CON LA UBICACION PASADA POR PARAMS
    await fastify.get('/current/:city', getCurrentLocationCityOpts, getCurrentLocationCity)

    done()

}

module.exports = currentnRoutes