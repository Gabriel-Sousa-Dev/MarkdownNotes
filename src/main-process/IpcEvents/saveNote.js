import { app } from 'electron';
import fs from 'node:fs'
import path from 'node:path';

export function saveNote( noteId, content ){
    console.log('SaveNote.js acessado | params: ' , noteId, content);

    const directoryPath = path.resolve(app.getAppPath(), `notes/`)

    // Nova nota
    if(noteId === "1"){
        const newNoteName = crypto.randomUUID();
        const filePath = path.resolve(directoryPath, newNoteName + ".json")

        console.log('é nova nota | salva em: '+ filePath);
        fs.writeFile(filePath, JSON.stringify(content, null, 2), (err)=>{
            err && console.log(err);
        })
        return;
    }
    

    fs.access(path.resolve(directoryPath + `${noteId}.json`), (err)=>{
        if(err){
            console.warn("Erro ao acessar a nota para Salvamento");
            return;
        }
    })

    fs.writeFile(path.resolve(directoryPath + `${noteId}.json`), JSON.stringify(content, null, 2), (err)=>{
        err && console.log(err);
    })
}