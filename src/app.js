const express = require('express');
const app = express();
const WSServer = require('express-ws')(app);
const aWss = WSServer.getWss();
const cors = require('cors');
const PORT = process.env.PORT || 5000;
const { addUser, connectionHandler, delUser } = require('./game/index');
const { addMessage } = require('./chat/index');

app.use(cors());
app.use(express.json({ limit: '15mb' }));

// {
//   id: number,
//   idDiller: number,
//   isStartGame: true/false,
//   method: "connection"/"add-user"/"del-user"
//   users:=[{id,firstName,lastName,job,image,player(игрок,наблюд.,дилер)},..],
//   settings: {asPlayer,changingCard,isTimer,scoreType,scoreTypeShort,roundTime:}
//   time: number
//   cards: [{currency,value},{}..],
//   tasks: [{id,value,mark},..]
// }

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
