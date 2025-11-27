const http = require('http');
const app = require('./src/config/express.config');
require('dotenv').config();

const PORT = process.env.PORT || 8001;
const URL =  process.env.HOST_URL || `127.0.0.1`;

const httpServer = http.createServer(app);

httpServer.listen(PORT, URL, (error) => {
    if(!error) {
        console.log(`http://${URL}:${PORT}`)
    } else {
        console.log('Error hosting the backend.')
    }
})