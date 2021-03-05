const { Person } = require('../models/index')

class Controller {
    static async allPerson(req, res, next){
        try {
            const people = await Person.findAll()
            res.status(200).json(people)
        }
        catch(err) {
            next(err)
        }
    }

    static async addPerson(req, res, next) {
        try {
            const { name, alamat } = req.body
            const newPerson = await Person.create({name, alamat})
            res.status(201).json(newPerson)
        }
        catch(err) {
            next(err)
        }
    }
}

module.exports = Controller