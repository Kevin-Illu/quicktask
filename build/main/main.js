"use strict";
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
try {
    require('electron-reloader')(module);
}
catch { }
function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, '../preload/index.js')
        }
    });
    ipcMain.on('btn-event', (event, action) => {
        if (action === "maximize")
            win.maximize();
        if (action === "minimize")
            win.minimize();
        if (action === "close")
            win.close();
        if (action === "rezise")
            win.unmaximize();
    });
    win.loadFile('../../index.html');
    win.webContents.openDevTools({ mode: 'detach' });
}
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
