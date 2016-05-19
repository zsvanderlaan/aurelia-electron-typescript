export class AppWindow
{  
  constructor()
  {
    var remote = require('electron').remote;

    document.getElementById("min-btn").addEventListener("click", function (e) {
      var window: Electron.BrowserWindow = remote.getCurrentWindow();
      window.minimize();
    });

    document.getElementById("max-btn").addEventListener("click", function (e) {
      var window: Electron.BrowserWindow = remote.getCurrentWindow();
      if(window.isMaximized())
        window.unmaximize();
      else
        window.maximize();
    });

    document.getElementById("close-btn").addEventListener("click", function (e) {
      var window: Electron.BrowserWindow = remote.getCurrentWindow();
      window.close();
    });
    
    document.getElementById("help-btn").addEventListener("click", function (e) {
      var window: Electron.BrowserWindow = remote.getCurrentWindow();
      window.webContents.openDevTools();
    });
  }
}
var appWindow:AppWindow = new AppWindow()