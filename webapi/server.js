const http = require('http')
const port = process.env.port || 9999
const app = require('./app')
const mongodb = require('mongoose')

const serverUri = 'http://localhost:' + port
const mongoUri = 'mongodb+srv://elvin:elvin123@cluster0-zzuof.mongodb.net/webapi?retryWrites=true&w=majority'
//på något sätt min mongodb krånglar, det händer vanligtvis antal produkter i cart som nan,
// jag tror att det borde lösas om du ändrar din egen mongodb

http.createServer(app).listen(port, () => console.log('Webserver:' + serverUri))

mongodb
.set('useCreateIndex', true)
.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Mongodb: Running'))
.catch((error) => console.log(error))