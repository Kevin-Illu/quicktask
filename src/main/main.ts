const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

try {
  require('electron-reloader')(module)
} catch {
  /* empty */
}

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.js'),
    },
  })

  ipcMain.on('btn-event', (event: any, action: string) => {
    const actions: any = {
      maximize: () => win.maximize(),
      minimize: () => win.minimize(),
      close: () => win.close(),
      rezise: () => win.unmaximize(),
    }

    actions[action]()
  })

  win.loadFile('../../index.html')
  win.webContents.openDevTools({ mode: 'detach' })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
