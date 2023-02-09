const fs = require("fs");

const today = new Date();
const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

const log_file = "./logs/" + "log" + date + ".txt";

module.exports = {
  log: (server, error) => {
    let err = error ? error : "";
    fs.appendFile(log_file, `${time} - ${server} - ${err}\n`, (err) => {
      if (err) throw err;
    });
  },
};
