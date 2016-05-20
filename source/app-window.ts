import {remote} from 'electron';

export class AppWindow
{     
  constructor()
  {   
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
    var window: Electron.BrowserWindow = remote.getCurrentWindow();
    
    window.close();    
  }
  
  showHelp()
  {
    remote.getCurrentWindow().webContents.openDevTools();
  }
}