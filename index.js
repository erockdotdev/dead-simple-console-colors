const ConsoleColors = {
    blue: "\x1b[36m%s\x1b[0m",
    red: "\x1b[31m%s\x1b[0m",
    green: "\x1b[32m%s\x1b[0m",
    yellow: "\x1b[33m%s\x1b[0m",
  };
  const Console = {
    info: (...message) => {
      return console.log(ConsoleColors.blue, ...message);
    },
    success: (...message) => {
      console.log(ConsoleColors.green, ...message);
    },
    warn: (...message) => {
      console.log(ConsoleColors.yellow, ...message);
    },
    error: (...message) => {
      console.error(ConsoleColors.red, ...message);
    },
  };
  
  module.exports = Console;
  