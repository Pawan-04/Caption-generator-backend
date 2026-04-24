require('dotenv').config()
const app = require('./src/app.js')
const dbConnection = require('./src/db/db.js')

dbConnection()

app.listen(4001,()=>{
    console.log('server is running')
})