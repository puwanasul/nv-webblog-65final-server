const { Noodle } = require('../models')
module.exports = {
    // get all Noodle
    async index(req, res) {
        try {
            const noodles = await Noodle.findAll()
            res.send(noodles)
        } catch (err) {
            res.status(500).send({
                error: 'The Noodles information was incorrect'
            })
        }
    },
    // create Noodle
    async create(req, res) {
        console.log(JSON.stringify(req.body))
        try {
            const noodle = await Noodle.create(req.body)
            res.send(noodle.toJSON())
        } catch (err) {
            res.status(500).send({
                error: 'Create blog incorrect'
            })
        }
    },
    // edit Noodle, suspend, active
    async put(req, res) {
        try {
            await noodle.update(req.body, {
                where: {
                    id: req.params.noodleId
                }
            })
            res.send(req.body)
        } catch (err) {
            res.status(500).send({
                error: 'Update Noodle incorrect'
            })
        }
    },
    
// delete Noodle
async remove(req, res) {
        try {
            const noodle = await Noodle.findOne({
                where: {
                    id: req.params.noodleId
                }
            })
            if (!noodle) {
                return res.status(403).send({
                    error: 'The Noodle information was incorrect'
                })
            }
            await noodle.destroy()
            res.send(noodle)
        } catch (err) {
            res.status(500).send({
                error: 'The Noodle information was incorrect'
            })
        }
    },
    // get Noodle by id
    async show(req, res) {
        try {
            const noodle = await Noodle.findByPk(req.params.noodleId)
            res.send(noodle)
        } catch (err) {
            console.log(err)
            res.status(500).send({
                error: 'The Noodle information was incorrect'
            })
        }
    }
}
