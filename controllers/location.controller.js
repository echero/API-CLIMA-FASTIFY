const fetch = require('cross-fetch')

const getLocation = async (req, reply) => {
    const ip = req.ip
    const response = await fetch('http://ip-api.com/json')
        const info = await response.json()
        reply.send(ip)
        // reply.send(info)
}

module.exports = {
    getLocation
}