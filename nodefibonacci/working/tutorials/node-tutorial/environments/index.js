require("dotenv").config({});

module.exports = {
    ApiEnvironment: require("./api.environment"),
    MongoEnviroment: require("./mongo.environment"),
    MysqlEnviroment: require("./mysql.environment")
}