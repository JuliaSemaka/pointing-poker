const chat = [];

module.exports = {
  addMessage: (ws, aWss, msg) => {
    broadcastConnection(aWss, msg);
  },
};

const broadcastConnection = (aWss, msg) => {
  aWss.clients.forEach((client) => {
    if (client.id === msg.id) {
      client.send(JSON.stringify(msg));
    }
  });
};
