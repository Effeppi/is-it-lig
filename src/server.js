const express = require('express')
const app = express()
var port = process.env.PORT || 3000;

app.use(express.static("src/public"));


app.all('*', (req,res) => {
  res.setHeader('Location', '/')
  res.sendStatus(303)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})