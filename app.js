const express = require("express");
const app = express();
const { error } = require("console");

const SMTPServer  = require("smtp-server").SMTPServer;
const PORT = 25;

const server = new SMTPServer({
   allowInsecureAuth: true,
   authOptional: true,

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
   onData(stream, session, cb){
      stream.on('data', (data) => console.log(`onData ${data.toString()}`));
      stream.on('end', cb)
   }

});

server.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));

