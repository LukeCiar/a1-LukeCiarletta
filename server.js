const http = require('http'),
      fs   = require('fs'),
      port = 3000

const server = http.createServer( function( request,response ) {
  if(request.url != '/') {
    sendFile(response, request.url.slice(1))
  }
  else {
    sendFile(response, 'index.html')
  }
  /**
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/index.css':
      sendFile( response, 'index.css' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
  */
})

const usedPort = process.env.PORT || port
server.listen( usedPort )
console.log("Listening on port " + usedPort)

const sendFile = function( response, filename ) {
  if(filename == 'index.css') {
    response.setHeader('Content-Type', 'text/css')
  }
   fs.readFile( filename, function( err, content ) {
     response.end( content, 'utf-8' )
   })
}
