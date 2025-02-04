import { app, BrowserWindow, Menu } from 'electron';
import { ipcMain } from 'electron/main';
import path from 'node:path';
import { saveNote } from './IpcEvents/saveNote.js';
import { readNote } from './IpcEvents/readNote.js';

function createWindow(){

    const mainWindow = new BrowserWindow({
        height: 500,
        width: 500,
        webPreferences: {
            preload: path.join(app.getAppPath(), "src/main-process/preload.mjs")
        }
    });

    // const customMenu = Menu.buildFromTemplate([
    //     { label: 'ola', type: 'checkbox' },
    //     { label: 'oie', type: 'submenu', submenu: [
    //         {label: 'oie2', type: 'checkbox', accelerator: 'Ctrl+Space', acceleratorWorksWhenHidden: true },
    //         { label: 'oie3', type: 'normal', click: ()=>console.log('oie') },
    //         { label: 'Recarregar', role: 'reload', accelerator: 'F5' }
    //     ]}


    // ]);

    // mainWindow.setMenu(customMenu);

    mainWindow.loadFile(path.join(app.getAppPath(), "dist-react/index.html"))

    // mainWindow.webContents.openDevTools()
}

app.whenReady().then( () => {
    ipcMain.on('save-note', (event, { noteId, content }) => {

        console.log('ipcMain:save-note | param: ', noteId, content);
        
        saveNote(noteId, content);
    })

    ipcMain.handle('read-note', async (event, noteId) => {
        console.log('ipcMain:read-note | param: ' + noteId);
        const noteContent = await readNote(noteId)
        
        console.log('conteudo da nota ', noteContent);
        
        return noteContent
    })

    createWindow()

    app.on('activate', () => {
        if(BrowserWindow.getAllWindows.length === 0) createWindow()
    })

} )

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})