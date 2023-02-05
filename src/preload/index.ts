const { contextBridge, ipcRenderer } = require('electron');


contextBridge.exposeInMainWorld('mainApi', {
  trafficsLightsAction: (action: string) => ipcRenderer.send('btn-event', action),
})
