import * as electron from 'electron';
const remote = require('electron').remote;


let init = () => {

  document.getElementById("min-btn").addEventListener("click", function (e) {
    var window:Electron.BrowserWindow = remote.getCurrentWindow();
    window.minimize();
  });

  document.getElementById("max-btn").addEventListener("click", function (e) {
    var window:Electron.BrowserWindow = remote.getCurrentWindow();
    window.maximize();
  });

  document.getElementById("close-btn").addEventListener("click", function (e) {
    var window:Electron.BrowserWindow = remote.getCurrentWindow();
    window.close();
  });
};

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    init();
  }
};