const connectToMongo = require('./db');
connectToMongo();

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());


// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.get('/', (req, res) => {
  res.send('Hello Hasnain!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

