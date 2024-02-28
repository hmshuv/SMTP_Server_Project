const { error } = require("console");

const SMTPServer  = require("smtp-server").SMTPServer;

const server = new SMTPServer({
   onConnect(session, cb){
      // cb(new error('Cannot accept connection'))
      console.log(`onConnect`, session.id);
      cb()//accept the connection
   },
   onMailFrom(address, session, cb){
      console.log(`onMailFrom`, address.address, session.id);
      cb();
   },
   onRcptTo(address, session, cb){
      console.log(`OnRcptTo`, address.address, session.id);
      cb();
   },
   
});

server.listen(25, ()=> console.log("Server running on port 25"));