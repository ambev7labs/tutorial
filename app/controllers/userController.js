const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

module.exports = {
    async create(req, res) {
        try {
            const { ambevId, name, area } = req.body;
            await User.create({
                ambevId: ambevId,
                name: name,
                area: area
            }).then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    msg: "erro"
                })
            })
        }
        catch (err) {
            res.status(500).send({
                msg: "erro"
            })
        }
    },
    async findAll(req, res) {
        try {
            await User.findAll().then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving tutorials."
                });
            });
        }
        catch (err) {
            res.status(500).send({
                msg: "erro"
            })
        }
    },
    findOne(req, res) {

    },
    update(req, res) {

    },
    delete(req, res) {

    },
    deleteAll(req, res) {

    }
}
