import { EditorProvider, FloatingMenu, BubbleMenu, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TiptapElements from './elements';
import { css } from '../../../../../styled-system/css';
import { FaBold, FaHeading, FaList } from 'react-icons/fa';
import { CustomFloatingMenu } from './CustomFloatingMenu';

console.log(TiptapElements);


const extensions = [StarterKit.configure({
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



})];

const content = `
  <h1 data-level="1">Título de Nível 1</h1>
  <h2 data-level="2">Título de Nível 2</h2>
  <p>Parágrafo simples</p>
`;

export function TipTap() {

    const editor = useEditor({
        extensions,
        content,
        editorProps: {
            attributes: {
                class: css({
                    color: 'slate.200',
                    height: '100%',
                    outline: 'none',
                })
            }
        },
        
    })

    function handleClick(){
        console.log(JSON.stringify(editor?.getJSON(), null, 2));
        
    }
    

    return(
        <>
            <EditorContent editor={editor}  />
            <CustomFloatingMenu editor={editor} />
            <BubbleMenu editor={editor}>This is the bubble menu</BubbleMenu>
            <button onClick={handleClick}>teste</button>
        </>
    )
}