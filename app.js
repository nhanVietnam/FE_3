const express = require('express')
const app = express()
const path = require("path")

const PORT = 8001

app.use("/assets", express.static(path.resolve(__dirname, "public_html")));
app.use("/assets", express.static(path.resolve(__dirname, "dist")));
app.use("/assets", express.static(path.resolve(__dirname, "assets")));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, "assets/index.html"))
})

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`)
})