const express = require("express")
const app = express()
const port = 3000
app.use(express.static('public'))
//console.dir(app)

// Any time we get an incomming request this code will run
// app.use((req,res)=>{
//     console.log("We have got a new request")
//     res.send(`<h1> This is my web page</h1>`)
// })

// app.get('/',(req,res)=>{
//     res.send('Hello world, this server is running with nodemon')
// })

// Cat greeting   path : /cat

app.get('/cat',(req,res)=>{
    res.send("MEOW!!!")
})

// Dog greeting  path : /dog
app.get('/dog',(req,res)=>{
    res.send("WOOF!!!")
})

// data in array that I want to pass
const WEEKLY_TEMPERATURE = [ 20,18,11,17,19,23]
// create a route /data  that would return temprature array

// app.get('/data',(req,res)=>{
//     console.log(req)
//     let query = JSON.stringify(req.query)
//     let params = JSON.stringify(req.params)
//     let hostname = req.hostname
//     let path = req.path
//      //res.send(WEEKLY_TEMPERATURE)

//      res.send(`<h2>Contents</h2> Query:${query}<br>
//      Params:${params}<br>Host:${hostname}<br>
//      Path:${path}`)
// })

// app.get('/users/:username/:course', (req,res)=>{
//     //let username = req.params.username
//     //console.log(username)

//     const {username,course} = req.params
//     res.send(`<h2> The username : ${username} is on course
//     :${course} </h2>`)
// })

// function add(a,b){
//     return a+b
// }

// app.get('/compute',(req,res)=>{
//     const a = Number(req.query.a)
//     const b = Number(req.query.b)
//     res.send({result:add(a,b)})
// })


// genetate error

app.get('/badrequest',(req,res)=>{
    const name = req.query.firstname
    res.send({name:firstname})
})


app.get('/greet',(req,res)=>{
    let name = req.query.name
    res.send(`<h2>Hello ${name}</h2>`)
})

// post request

app.post('/cats',(req,res)=>{
    res.send(' POST request to cats!!! This is different forma a get request')
})


// app.get('*', (req,res)=>{
//     res.send(`I dont know this path`)
// })




app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
})