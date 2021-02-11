const db = require("../models");
const User = db.users;

/*
create = post
destroy = delete
findAll = get
*/


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
                        err.message
                });
            });
        }
        catch (err) {
            res.status(500).send({
                msg: "erro"
            })
        }
    },
    async findByArea(req, res) {
        const area = req.params.area;
        try {
            await User.findAll({where: {area: area}}).then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message:
                        err.message
                });
            });
        }
        catch (err) {
            res.status(500).send({
                msg: "erro"
            })
        }
    },
    async update(req, res) {
        try {
            const userId = req.params.userId;
            await User.update(req.body, { where: { id: userId } }).then(num => {
                if (num == 1) {
                    res.send({
                        message: "Usuário excluido!"
                    });
                } else {
                    res.send({
                        message: "Usuário nao encontrado"
                    });
                }
            })
        }
        catch (err) {
            res.status(500).send({
                msg: "erro"
            })
        }
    },
    async delete(req, res) {
        const userId = req.params.userId;
        try {
            await User.destroy({ where: { id: userId } }).then(num => {
                if (num == 1) {
                    res.send({
                        message: "Usuário excluido!"
                    });
                } else {
                    res.send({
                        message: "Usuário nao encontrado"
                    });
                }
            })
        }
        catch (err) {
            res.status(500).send({
                msg: "erro"
            })
        }
    },
    async findById(req, res) {
        try {
            const {id} = req.params.id;
            await User.findByPk(id).then(data => {
                res.send(data);
            }).catch(err => {
                res.status(500).send({
                    message:
                        err.message
                });
            });
        }
        catch (err) {
            res.status(500).send({
                msg: "erro"
            })
        }
    }
}
