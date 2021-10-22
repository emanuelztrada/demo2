module.exports ={
    url: process.env.MONGO_URL || 'Localhost',
    port: (process.env.MONGO_PORT && Number(process.env.MONGO_PORT)) || 27017,
    user: process.env.MONGO_USER || 'user', 
    password: process.env.MONGO_PASSWORD || '123456',
    database: process.env.MONGO_DATABASE || 'database'
}