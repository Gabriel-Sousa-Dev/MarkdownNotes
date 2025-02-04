import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import TiptapElements from './elements';
import { css } from '../../../../../styled-system/css';
import { CustomFloatingMenu } from './CustomFloatingMenu';
import { CustomBubbleMenu } from './CustomBubbleMenu';
import { useParams } from 'react-router';
import { useEffect, useState } from 'react';

const extensions = [
    StarterKit.configure({
        code: {
            HTMLAttributes: {
                class: TiptapElements.codeStyle
            }
        },
        codeBlock: {
            HTMLAttributes: {
                class: TiptapElements.codeBlockStyle
            },
            defaultLanguage: 'js'
        },
        blockquote: {
            HTMLAttributes: {
                class: TiptapElements.blockquoteStyle
            }
        }
    }),
    Table.configure({
        allowTableNodeSelection: true,
        HTMLAttributes: {
            class: TiptapElements.tableStyle
        }
    }),
    TableHeader,
    TableRow,
    TableCell
];

const content = `
  <h1 data-level="1">Título de Nível 1</h1>
  <h2 data-level="2">Título de Nível 2</h2>
  <p>Parágrafo simples</p>
  <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
`;

export function TipTap() {
    
    const [loadingNote, setLoadingNote] = useState<boolean>(true)
    const { id } = useParams()

    useEffect(() => {
        setLoadingNote(true);
        console.log(id, 'nota tentando acessar');
        

        if(id === undefined){
            alert('ID não foi definido')
            return;
        }

        // Caso a nota seja nova
        if(parseInt(id) === 1){
            window.api?.saveNote({
                noteId: id.toString(),
                content: {}
            })
            return;
        }

        if(parseInt(id) !== 1){            
            window.api?.readNote(id).then( (content) => {
                console.log('content finalmente: ', content)
                setLoadingNote(false);
                
            } )
            return;
        }
        
        setLoadingNote(false)
    }, [])

    const editor = useEditor({
        extensions,
        content,
        editorProps: {
            attributes: {
                class: css({
                    color: 'slate.200',
                    height: '100%',
                    outline: 'none',
                }),
            }
        },
        
    })
    

    function handleClick(){
        const content = editor?.getJSON();

        if(window.api && id){
            window.api.saveNote({noteId: id, content})

        }else{
            
            
            console.warn('window.api não existe | Provalvemente você está rodando o Sistema na Web')
        }
        
    }
    async function handleClickRead(){
        if(window.api && id){
            console.log(await window.api.readNote(id));
        }
    }

    return(
        <>
            <EditorContent editor={editor} spellCheck={false} />
            <CustomFloatingMenu editor={editor} />
            <CustomBubbleMenu editor={editor} />
            <button onClick={handleClick}>enviar</button>
            <button onClick={handleClickRead}>ler</button>

            <h1>{loadingNote ? 'carregando' : 'carregado'}</h1>
        </>
    )
}