const express = require('express')

var app = express();



app.get('/', function (req, res) {
    res.send("start server")
})


const { MongoClient } = require('mongodb')
//should be changed 
var connection = "mongodb+srv://majdoleenshaderma7:9oh9uyESDwSpnpZB@cluster0.7pnk2ao.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(connection)

const mydb = client.db('majdoleen')

const collection = mydb.collection('users')
app.get("/users", async (req, res) => {
    //find  =>{}=>all
    const users = await collection.find({}).toArray()
    res.send(users)
})

app.get("/user/:username", async (req, res) => {
    //find  =>{}=>all
    const users = await collection.findOne({ 'username': req.params.username })
    res.send(users)
})

var server = app.listen(5000, function () {
    var host = server.address().address
    var port = server.address().port
})
