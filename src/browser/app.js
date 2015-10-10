import app from 'app';
import BrowserWindow from 'browser-window';

export default class App {
  constructor() {
    this.mainWindow = null;
    this.callbackRegister();
    this.windowSize = {
      width: 800,
      height: 600,
    };
  }

  callbackRegister() {
    app.on('window-all-closed', this.onWindowAllClosed.bind(this));
    app.on('ready', this.onReady.bind(this));
  }

  onWindowAllClosed() {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  }

  onReady() {
    this.mainWindow = new BrowserWindow(this.windowSize);
    this.mainWindow.loadUrl(`file://${__dirname}/../renderer/index.html`);
    this.mainWindow.on('closed', this.onClosed.bind(this));
  }

  onClosed() {
    this.mainWindow = null;
  }

  start() {
    // this.mainWindow.loadUrl(`file://${__dirname}/index.html`);
  }

  debug() {
    require('electron-debug')();
  }
}
