const http = require('http')

http.createServer((request, response)=>{

    response.writeHead(200)

    response.write('hola mundo')
    response.end
})
.listen(8080)

console.log('escuchando el puerto', 8080)