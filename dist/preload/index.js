"use strict";
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('mainApi', {
    trafficsLightsAction: (action) => ipcRenderer.send('btn-event', action),
});
