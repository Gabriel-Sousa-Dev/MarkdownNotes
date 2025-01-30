import { app } from 'electron';
import fs from 'node:fs'
import path from 'node:path';

export function saveNote( noteId, content ){
    console.log('chegou no processo final' , noteId, content);

    fs.writeFile(path.resolve(app.getAppPath(), `notes/${noteId}.json`), JSON.stringify(content, null, 2), (err)=>{
        err && console.log(err);
        
    })
}