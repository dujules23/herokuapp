// declare dotenv with the config method

const dotenv = require("dotenv").config()
const express = require("express")

const cors = require("cors")
const app = express()
// gives access to heroku's port
const port = process.env.PORT || 9000

// Makes it so only one website can access api data
app.use(cors())
// allows you to grab json and use it through out the app
app.use(express.json())


// use _ if you don't want to use the req object
app.use("/api/*", (_, res) =>{
  res.json({
    data: "The API is working!"
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

console.log("It's alive")
// gives the name of the directory on the server
console.log(__dirname)

// Directory to the file name
console.log(__filename)

// you can store sensitive info in "environment variables", hidden on the server side
console.log(process.env.USER)

console.log(process.env.PORT)

console.log(process.env.GREET)
console.log(process.env.FOOD)
console.log(process.env.REALLY)