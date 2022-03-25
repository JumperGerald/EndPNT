export default function handler(req, res) {
    const { endpoint } = req.query
    console.log()
    try {
        var JsonData = require('../json/' + endpoint + '.json')
        res.json(JsonData)
    } catch {
        res.end('Error: No endpoint found')
    }
}
