console.log("--INICIANDO--");

const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
	console.log("Aplicacao iniciada");
	let mainWindow = new BrowserWindow({
		width: 800, 
		height: 400
	});

	console.log(__dirname);
	mainWindow.loadURL(`file://${__dirname}/app/index.html`);
	//mainWindow.loadURL('http://www.theuselessweb.com');

	app.on('window-all-closed', () => {
		app.quit();
	});
});