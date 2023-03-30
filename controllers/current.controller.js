const fetch = require('cross-fetch')

module.exports = (fastify) => {

    async function getCurrentLocationIpApi(req, reply) {
        const ip = req.ip
        // const responseGetLocation = await fetch(new URL('http://localhost:5000/location'))
        const responseGetLocation = await fetch(`https://sideways-wave-forger.glitch.me/location/${ip}`)
        const json = await responseGetLocation.json()

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${json.city},${json.countryCode}&lang=sp&appid=${fastify.config.API_KEY_OPEN_WEATHER}&units=metric`)

        return response.json()
    }

    async function getCurrentLocationCity(req, reply) {
        const city = req.params.city

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sp&appid=${fastify.config.API_KEY_OPEN_WEATHER}&units=metric`)


        return response.json()
    }

    return {
        getCurrentLocationIpApi,
        getCurrentLocationCity
    }
}