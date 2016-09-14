const { app, BrowserWindow } = require('electron');
require('../')({
  foo: 'Foo!',
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
