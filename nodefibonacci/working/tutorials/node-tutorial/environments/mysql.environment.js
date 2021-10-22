module.exports ={
    url: process.env.MYSQL_URL || 'Localhost',
    port: (process.env.MYSQL_PORT && Number(process.env.MYSQL_PORT)) || 27017,
    user: process.env.MYSQL_USER || 'user', 
    password: process.env.MYSQL_PASSWORD || '123456',
    database: process.env.MYSQL_DATABASE || 'database',
    squema: process.env.MYSQL_SQUEMA || 'AJAJA'
}