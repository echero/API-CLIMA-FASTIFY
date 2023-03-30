const fetch = require('cross-fetch')

const getLocation = async (req, reply) => {
    const ip = req.params.ip ? req.params.ip : req.ip
    const response = await fetch(`http://ip-api.com/json/${ip}`)
    const info = await response.json()
    reply.send(info)
}

module.exports = {
    getLocation
}