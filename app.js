const express = require('express')
const app = express()
const port = 3000

const testData = {
  firstName: 'Homer',
  lastName: 'Simpson'
}

app.get('/', (req, res) => res.send(testData))

app.listen(port, () => console.log(`Server listening on port ${port}`))