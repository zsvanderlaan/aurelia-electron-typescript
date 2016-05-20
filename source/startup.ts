import * as electron from 'electron';
const BrowserWindow = electron.BrowserWindow;

require('electron-reload')(__dirname);

class Startup {
  constructor() {

    const app = electron.app

    app.on('window-all-closed', function () {
      if (process.platform != 'darwin')
        app.quit();
    });         

    app.on('ready', function () {
      var main_width: number = 800;
      var main_height: number = 600;

      var mainWindow: Electron.BrowserWindow = new BrowserWindow({ 
        width: main_width, 
        height: main_height,
        frame:false });

      mainWindow.loadURL('file://' + __dirname + '/app-window.html');

      mainWindow.on('closed', function () {
        mainWindow = null;
      });
    });
  }
}

var startup: Startup = new Startup();