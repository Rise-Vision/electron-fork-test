console.log("started");
setTimeout(()=>{
  console.log("forking the background launcher");
  background = require("child_process").fork("./background-launcher.js", [], {detached: true, detach: true});
  background.unref();
  background.disconnect();
  setTimeout(()=>{
    console.log("quitting main");
    //require("electron").app.quit();
    process.exit(0);
  }, 2000);
}, 2000);
