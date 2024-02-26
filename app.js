const SMTPServer  = require("smtp-server").SMTPServer;

const server = new SMTPServer({

});

server.listen(25, ()=> console.log("server running on port 25"));