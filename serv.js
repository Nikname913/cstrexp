const http = require("http");
const fs = require("fs");
   
http.createServer((request, response) => {
       
    let filePath = "index.html";
    
    if ( request.url !== "/" ) {
        
        filePath = request.url.substr(1);
    
    }

    fs.readFile(filePath, (error, data) => {
               
        if ( error ) {
                   
            response.statusCode = 404;
            response.end("Resourse not found!");
        
        } else {
            
            response.end(data);
        
        }

    });
     
}).listen(3000, () => {
    
    console.log("Server started at 3000");

});