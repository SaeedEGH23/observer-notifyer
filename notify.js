const net = require("net");
const logger = require("./logger");

const sendNotification = (serverName, inputText, port) => {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();
    // Connect to the listener server
    client.connect(port, serverName, () => {
      console.log(`Connected to server ${serverName}:${port}`);
      logger.log(`Connected to server ${serverName}:${port}`);
      client.write(inputText);
      logger.log(` CHANGE sent to ${serverName}`);
      resolve(true);
    });

    client.on("error", (err) => {
      console.log(`Error connecting to ${serverName}:${port}`, err);
      logger.log(
        `Error connecting to ${serverName}:${port} sending process failded`,
        err
      );
      reject(err);
    });
  });
};

module.exports = sendNotification;
