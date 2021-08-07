const port = 3000

const express = require('express')
const app = express()
const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const path = require('path')
const moment = require('moment')

morgan.token('moment', function (req) {
  return moment().format('YYYY-MM-DD HH:mm:ss.SSS');
})

const routes = require('./routes');

// create a rotating write stream
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(__dirname, 'public', 'logs')
})

// setup the logger
app.use(morgan(':moment :remote-addr :remote-user :method :url :status :res[content-length] - :response-time ms', {
	 stream: accessLogStream,
}))

app.use('/',routes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Elements app listening at http://localhost:${port}`)
})