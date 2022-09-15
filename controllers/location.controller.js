const fetch = require('cross-fetch')

const getLocation = async (req, reply) => {
    const response = await fetch('http://ip-api.com/json')
        const info = await response.json()
        
        reply.send(info)
}

module.exports = {
    getLocation
}