const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('api', {
    saveNote: (data) => { 
        console.log('chegamos aq');
        console.log(data);
        
        
        ipcRenderer.send('save-note', data)
    },
    readNote: async (noteId) => {
        console.log('chegamos aq read');
        console.log(noteId);

        const content = await ipcRenderer.invoke('read-note', noteId)
        return content;
        
    }
})