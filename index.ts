const server = require("./server/server");

const startup = async () => {
  console.log("Starting application...");

  try {
    console.log("Starting webserver..");
    await server.start();
  } catch (err) {
    console.log("Unable to start webserver", err);
    process.exit(1);
  }
};

startup();