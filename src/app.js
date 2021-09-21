const express = require('express');
const app = express();
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const { addUser, connectionHandler, delUser } = require('./game/index');
const { addMessage } = require('./chat/index');

const staticFiles = path.resolve(__dirname, '../static');

app.use(json({ limit: '50mb' }));
app.use(cors());
app.use(/^(?!\/api\/)/, express.static(staticFiles));

app.ws('/', (ws, req) => {
  console.log('Подключилось');
  ws.on('message', (msg) => {
    msg = JSON.parse(msg);
    console.log(msg);
    switch (msg.method) {
      case 'connection':
        connectionHandler(ws, msg);
        break;
      case 'add-user':
        addUser(ws, aWss, msg);
        break;
      case 'del-user':
        delUser(ws, aWss, msg);
        break;
      case 'access-del-user':
        accessDelUser(ws, aWss, msg);
        break;
      case 'add-message':
        addMessage(ws, aWss, msg);
        break;
    }
  });
});

// app.ws('/chat', (ws, req) => {
//   ws.on('message', (msg) => {
//     msg = JSON.parse(msg);
//     switch (msg.method) {

//     }
//   });
// });

app.listen(PORT, () => console.log('Start server'));
