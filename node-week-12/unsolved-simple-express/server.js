
/*
    Let's create our Express server!
    Please remember to add comments to help you understand what is happening!
*/

// I am bringing in the Express module in my server.js file in order for me to use.
const express = require('express')

// Creating a new Express app for server.
const app = express()

// Creating a variable that will set the port of my server to 5000.
const PORT = process.env.PORT || 5000

const userdata = require('./public/userdata.json')

// Telling Express app to use expess.static() method in order to stage my client folder.
app.use(express.static("public"))

// API that will getting all of my users in my userdata.json.
app.get("/api/users", (req, res) => {
    if (!userdata) {
        return res.status(404).send("Resource was not found. Please try again.")
    }

    res.send(userdata)
})

// App is running on port 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})