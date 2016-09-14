# electron-handlebars

Use [Handlebars] instead of plain HTML for your [Electron] app!

## Usage

In your main process JavaScript:

```js
const { app, BrowserWindow } = require('electron');

require('electron-handlebars')({
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
```

And in `index.hbs` (or whatever other file you are loading with `loadURL`):

```hbs
<html>
<head>
  <title>{{ title }}</title>
</head>
<body>
  <h1>{{ title }}</h>
  <p>{{ body }}</p>
</body>
</html>
```

## Example App

There is a complete (albeit small) working example app in the `example`
directory. You can run it from *root* directory with the following:

```sh
npm i
npm start
```

## Similar Projects

This library was inspired by the following:

* [`electron-pug`]
* [`electron-ejs`]

## License

**MIT**

[Electron]: http://electron.atom.io/ "Electron"
[Handlebars]: http://handlebarsjs.com/ "Handlebars.js"
[`electron-ejs`]: https://github.com/jmjuanes/electron-ejs "electron-ejs"
[`electron-pug`]: https://github.com/yan-foto/electron-pug "electron-pug"
