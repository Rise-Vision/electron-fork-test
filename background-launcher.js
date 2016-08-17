updater = setInterval(()=>{
  console.log("background launcher running");
},1000);

setTimeout(()=>{
  console.log("launching prebuilt default app");
  clearInterval(updater);
  require("child_process").spawn(require("path").join(__dirname, "node_modules", "electron-prebuilt", "dist", "electron"), ["target-app.js"], {detached: true, stdio: "inherit", shell:true }).unref();
}, 5000);
