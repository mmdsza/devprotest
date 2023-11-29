const fs = require('fs');

function log_message(file, message, level) {
  const timestamp = new Date().toISOString().replace('T', ' ').substr(0, 19);
  const logEntry = `[${timestamp}] [${level}] ${message}\n`;

  fs.appendFileSync(file, logEntry);
}

module.exports = log_message;