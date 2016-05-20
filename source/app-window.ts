export class AppWindow
{   
  remote:Electron.Remote;
  
  constructor()
  {   
    var remote = require('electron').remote;  
    var self = this;
    
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
      self.tryCloseWindow();
    });
    
    document.getElementById("help-btn").addEventListener("click", function (e) {
      self.showHelp();
    });
  }
  
  tryCloseWindow(){
    this.closeWindow();
  }
  
  closeWindow(){
    var remote = require('electron').remote;  
    var window: Electron.BrowserWindow = remote.getCurrentWindow();
    
    window.close();    
  }
  
  showHelp()
  {
    var window = require('electron').remote.getCurrentWindow();
    window.webContents.openDevTools();
  }
}