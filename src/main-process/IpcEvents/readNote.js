import { app } from 'electron'
import fs from 'node:fs/promises'
import path from 'node:path'

export async function readNote(noteId){
    const filePath = path.join(app.getAppPath(), "notes", `${noteId}.json`)
    console.log('leitura process' + noteId, 'caminho: ' + filePath);
    
    const content = await fs.readFile(filePath, 'utf-8')

    console.log('process conteudo lido: ',content);
    
    return content

}