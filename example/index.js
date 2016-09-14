const { app, BrowserWindow } = require('electron');

require('../')({
  // Template bindings go here!
  title: 'Hello, World!',
  body: 'The quick brown fox jumps over the lazy dog.',
});

let mainWindow = null;

app.on('window-all-closed', () => app.quit());

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    show: false,
    width: 400,
    height: 300,
  });
  mainWindow.loadURL(`file://${__dirname}/index.hbs`);
  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show();
    mainWindow.focus();
  });
});
