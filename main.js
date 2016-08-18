console.log("started");
setTimeout(()=>{
  console.log("forking the background launcher");
  background = require("child_process").fork("./background-launcher.js", [], {detached: true});
  background.unref();
  background.disconnect();
  require("electron").app.exit(0);
}, 2000);
