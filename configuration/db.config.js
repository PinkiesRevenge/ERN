module.exports = {
    host: "cscmysql.lemoyne.edu",
    user: "shawj",
    password: "csc411shawj",
    db: "f22_411_shawj",
    dialect: "mysql",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
};