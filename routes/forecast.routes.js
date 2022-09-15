// const fetch = require('cross-fetch')
// const API_KEY = 'caa63e0e356fcbc235c450586473100d'
const {getForecastIpApi, getForecastLocationCity} = require('../controllers/forecast.controller')

//PROPERTIES SCHEMA
const Properties = {
    list:{
        type: 'array',
        items: {
            type: 'object',
            properties: {
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
                visibility: { type: 'string'},
                dt_txt: { type: 'string' }
            }
        }
    },
    city: { 
        type: 'object', 
        properties: {
            name: { type: 'string'},
            country: { type: 'string' }
        },
    }             
}

//REQUIRED SCHEMA
const Required = [
    'list',
    'city',
]

//MAPEA EL SCHEMA DEL JSON QUE DEVOLVEMOS DE LA API OPEN WEATHER MAP
//OBTIENE LA UNICACION CON LA API IP API
//TAMBIEN CONTIENE EL CONTROLLER EN EL HANDLER
const getforecastIpApiOpts =   {
    schema: {
        response: {
            200: {
                type: 'object',
                properties: Properties,
                required: Required,
            }
        }   
    },
    handler: getForecastIpApi      
}

//MAPEA EL SCHEMA DEL JSON QUE DEVOLVEMOS DE LA API OPEN WEATHER MAP
//SE PASA POR PARAMETRO LA CIUDAD
//TAMBIEN CONTIENE EL CONTROLLER EN EL HANDLER
const getforecastLocationCityOpts =   {
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
            }
        }   
    },
    handler: getForecastLocationCity
}

async function forecasteRoutes (fastify, options, done) {

    //TRAE LA INFO DEL CLIMA ACTUAL Y DE LOS 5 DIAS SIGUIENTE CON LA UBICACION DE LA IP
    await fastify.get('/forecast', getforecastIpApiOpts)

    //TRAE LA INFO DEL CLIMA ACTUAL Y DE LOS 5 DIAS SIGUIENTE CON LA UBICACION POR PARAMS
    await fastify.get('/forecast/:city', getforecastLocationCityOpts)

    done()

}

module.exports = forecasteRoutes