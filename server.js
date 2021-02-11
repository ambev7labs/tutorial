const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userController = require('./app/controllers/userController');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const db = require("./app/models");
db.sequelize.sync();

app.get('/',function (req,res){
    res.json({msg: "Olaa"});
})


app.post('/create',userController.create);
app.get('/list',userController.findAll);
app.get('/user/:area',userController.findByArea);
app.put('/update/:userId',userController.update);
app.delete('/delete/:userId',userController.delete);

app.listen(3000,()=>{
    console.log('rodando');
})