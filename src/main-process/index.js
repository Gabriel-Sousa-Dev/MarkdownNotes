import { app, BrowserWindow } from 'electron';
import path from 'node:path';

function createWindow(){
    const mainWindow = new BrowserWindow({
        height: 500,
        width: 500
    })

    mainWindow.loadFile(path.join(app.getAppPath(), "dist-react/index.html"))
    // mainWindow.webContents.openDevTools()
}

app.whenReady().then( () => {
    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows.length === 0) createWindow()
    })
} )

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})