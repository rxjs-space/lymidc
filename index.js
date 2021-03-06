
const app = require('express')();
const server = require('http').Server(app);
// const WebSocket = require('ws');
const WebSocketClient = require('./ws-client').WebSocketClient;
const exec = require('child_process').exec;

const port = process.env.PORT || 3006;
console.log('here\'s the WS_URL:', process.env.WS_URL);
const lymidUrl = process.env.WS_URL || 'ws://localhost:3005';
// WS_URL=ws://10.0.2.2:3005 node index
// let ws = new WebSocket(lymidUrl);
var wsc = new WebSocketClient();

const doSomething = () => {
  // const addX = exec('/bin/chmod 774 start.bash', (err, stdout, stderr) => {
  //   if (err) {console.log(err); }
  //   console.log(stdout);
  // });
  const runX = exec('./start.bash', (err, stdout, stderr) => {
    if (err) {console.log(err); }
    console.log(stdout);
  });
  runX.on('exit', (code) => {
    console.log(code);
  });
  // const dir = exec("ls -la", function(err, stdout, stderr) {
  //   if (err) {
  //     // should have err.code here?  
  //   }
  //   console.log(stdout);
  // });
  
  // dir.on('exit', function (code) {
  //   console.log(code);
  //   // exit code is code
  // });
};


wsc.open(lymidUrl);
wsc.onopen = function(e){
	console.log("WebSocketClient connected.");
	this.send("Hello World !");
}
wsc.onmessage = function(data,flags,number){
  console.log(`WebSocketClient message #${number}: `,data);
  switch(true) {
    case data === 'do something':
      doSomething();
      break;
  }
}



app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

server.listen(port, function(){
  console.log(`listening on *:${port}`);
});