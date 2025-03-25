// import the json-server
const jsonserver = require('json-server')

// create a server
const  media_server = jsonserver.create()

//create a middleware
const middleware = jsonserver.defaults()

// path for data to store
const routes = jsonserver.router('database.json')

media_server.use(middleware)
media_server.use(routes)

// create a server port
let PORT = 3001 || process.env.PORT  // deploy the server

media_server.listen(PORT , ()=> {
    console.log(`Server Running successfully at PORT ${PORT}....`)
})


