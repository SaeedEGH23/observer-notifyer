const fs = require("fs");
const sendNotify = require("./notify");
const servers = ["127.0.0.1"];
const port = 3001;
const filePath =
  "/Users/saeed/Documents/observer/notifier-socket/notifyer/serv.txt";
// Function to notify servers of changes
const notifyServers = (changes) => {
  let bb = 0;
  console.log(changes);
  servers.forEach((server) => {
    // Send the changes to each server
    // (assuming a function called "sendChanges" exists to handle this)
    sendNotify(server, "changes", port)
      .then(() => console.log("Notification was sent"))
      .catch((err) => console.log("Error sending notification", err));

    console.log(++bb, server);
  });
};

fs.watchFile(filePath, (eventType, filename) => {
  notifyServers(filename);
  console.log("changed");
});
