import * as electron from 'electron';
const BrowserWindow = electron.BrowserWindow;

class Main {
  constructor() {

    const app = electron.app

    app.on('window-all-closed', function () {
      if (process.platform != 'darwin')
        app.quit();
    });

    app.on('ready', function () {
      var main_width: number = 800;
      var main_height: number = 600;

      var mainWindow: Electron.BrowserWindow = new BrowserWindow({ width: main_width, height: main_height });
      
      mainWindow.loadURL('file://' + __dirname + '/index.html');

      mainWindow.on('closed', function () {
        mainWindow = null;
      });
    });
  }
}

var main: Main = new Main();