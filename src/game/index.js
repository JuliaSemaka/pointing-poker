let idUser = 1;
let agreeUsers = [];
const games = {};

module.exports = {
  connectionHandler: (ws, msg) => {
    ws.id = (+new Date()).toString(16);
    games[ws.id] = {
      id: ws.id,
      dillerId: idUser,
      gameStatus: 'created',
      users: [
        {
          id: idUser++,
          firstName: msg.firstName,
          lastName: msg.lastName,
          jobTitle: msg.jobTitle,
          image: msg.image,
          role: 'diller',
        },
      ],
      settings: {
        isPlayer: false,
        cardsSet: 'fb',
        letAuto: true,
        turnAuto: true,
        isChangeEnable: false,
        isTimerEnable: false,
        roundTime: null,
        scoreType: '',
      },
      cards: [],
      tasks: [],
      delUser: null,
    };
    ws.send(JSON.stringify({ ...games[ws.id], method: msg.method }));
  },
  addUser: (ws, aWss, msg) => {
    console.log('addUser');
    if (games[msg.id]) {
      ws.id = msg.id;
      games[msg.id].users.push({
        id: idUser++,
        firstName: msg.firstName,
        lastName: msg.lastName,
        jobTitle: msg.jobTitle,
        image: msg.image,
        role: 'diller',
      });
      broadcastConnection(aWss, msg);
    } else {
      ws.send(JSON.stringify({ id: msg.id, error: 'Нету такого id' }));
    }
  },
  delUser: (ws, aWss, msg) => {
    if (games[msg.id] && msg.delUserId === games[msg.id].idDiller) {
      ws.send(JSON.stringify({ id: msg.id, error: 'Диллера убрать нельзя' }));
    } else if (games[msg.id]) {
      const ind = games[msg.id].users.findIndex(
        (item) => item.id === msg.delUserId
      );
      if (ind !== -1) {
        games[msg.id].delUser = msg.delUserId;
        agreeUsers.push(msg.userId);
        broadcastConnection(aWss, msg);
      } else {
        ws.send(
          JSON.stringify({ id: msg.id, error: 'Такого игрока не существует' })
        );
      }
    } else {
      ws.send(JSON.stringify({ id: msg.id, error: 'Нету такого id' }));
    }
  },
  accessDelUser: (ws, aWss, msg) => {
    if (!agreeUsers.includes(msg.userId)) {
      agreeUsers.push(msg.userId);
      if (agreeUsers.length / games[msg.id].users.length > 0.5) {
        games[msg.id].users.splice(ind, 1);
        games[msg.id].delUser = null;
        broadcastConnection(aWss, msg);
      } else {
        broadcastConnection(aWss, msg);
      }
    }
  },
};

const broadcastConnection = (aWss, msg) => {
  aWss.clients.forEach((client) => {
    if (client.id === msg.id) {
      client.send(JSON.stringify({ ...games[msg.id], method: msg.method }));
    }
  });
};
