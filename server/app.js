const express = require("express")
const app = express()
const cors = require("cors")
const { fetchUrlContent } = require("./fetch-url-content")
const { clean } = require("./clean")
const { count } = require("./count")

app.use(cors())
app.use(express.urlencoded(({ extended: true })))

app.post("/", async function (req, res) {
  const url = req.body.url
  const content = await fetchUrlContent(url)
  const cleanedContent = clean(content)
  const result = count(cleanedContent)
  res.send(result)
})

module.exports = app