import express from 'express'
import path from 'path'
import 'http'
import bodyParser from 'body-parser'
import Imap from 'imap'

const app = express()
const index = path.join(__dirname, '../index.html')

app.use(express.static('dist'))
app.use(bodyParser.json())

app.get('/*', (req, res) => {
  res.sendFile(index)
})

app.post('/user', (req, res) => {
  res.send(200)
})

app.listen(3000, () => console.log('server listening closely on port 3000'))

export default app
