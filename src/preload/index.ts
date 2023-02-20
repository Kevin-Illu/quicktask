type IactionSystemButton = 'close' | 'maximize' | 'resize' | 'minimize'

const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('mainApi', {
  trafficsLightsAction: (action: IactionSystemButton) =>
    ipcRenderer.send('btn-event', action),
})
