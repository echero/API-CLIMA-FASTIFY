const fetch = require('cross-fetch')
const API_KEY = 'caa63e0e356fcbc235c450586473100d'

const getCurrentLocationIpApi = async (req, reply) => {
    const responseGetLocation = await fetch(new URL('http://localhost:5000/location'))
        const json = await responseGetLocation.json()

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${json.city},${json.countryCode}&lang=sp&appid=${API_KEY}&units=metric`)
        
        return response.json()
}

const getCurrentLocationCity =  async (req, reply) => {
    const city = req.params.city

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=sp&appid=${API_KEY}&units=metric`)
    
    
    return response.json()
}

module.exports = {
    getCurrentLocationIpApi,
    getCurrentLocationCity
}