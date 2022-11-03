// Turing.com/kb/mysql-connection-with-node-js-using-sequelize-and-express
//testing

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const dbConfig = require("./configuration/db.config");
const Sequelize = require("sequelize");
const Sequelize = new Sequelize(dbConfig.db,dbConfig.user,dbConfig.password,{
    host:dbConfig.host,
    dialect:dbConfig.dialect,
    operationAliases:false,
    pool:{
        max:dbConfig.pool.max,
        min:dbConfig.pool.min,
        acquire:dbConfig.pool.acquire,
        idle:dbConfig.pool.idle
    }
});

const app = express();


var corsOptions = {
    origin: 'http://localhost:42069/'
};

app.use(cors(corsOptions));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
}));

app.get('/', (req,res) =>{
    res.json({
        message : "To Do List"
    });
});
app.get('/hello', (req,res) =>{
    res.json({
        message : "To Do List",
        some: "body"
    });
});

const port = process.env.PORT || 42069
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`);
})


