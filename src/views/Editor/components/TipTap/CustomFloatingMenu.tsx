import { Editor, FloatingMenu } from "@tiptap/react";
import { FaBold, FaCode, FaHeading, FaList } from "react-icons/fa";
import { css } from "../../../../../styled-system/css";
import { square } from "../../../../../styled-system/patterns";

interface CustomFloatingMenuProps {
    editor: Editor | null
}

export function CustomFloatingMenu({editor}: CustomFloatingMenuProps){
    const floatingMenuClass = css({ padding: 0, borderRadius: 'md', backgroundColor: 'slate.500', display:'flex', gap:0, overflow: 'hidden'})

    const activeMenuItemClass = square({
        color: 'slate.200',
        cursor: 'pointer',
        backgroundColor: 'slate.500',
        padding: '2',
        _hover: {
            opacity: 0.9 
        }
    })
    const inactiveMenuItemClass = square({
        color: 'slate.100', 
        cursor: 'pointer',
        backgroundColor: 'slate.600', 
        padding: '2', 
        _hover: { 
            opacity: 0.9 
        }
    })
    

    return(
        <FloatingMenu editor={editor} tippyOptions={{duration: 100, placement: 'bottom-start'}} className={floatingMenuClass}>
            <button
                onClick={() => editor!.chain().focus().toggleBold().run()}
                className={editor!.isActive('bold') ? activeMenuItemClass : inactiveMenuItemClass }
            >
                <FaBold/>
            </button>
            <button
                onClick={() => editor!.chain().focus().toggleBulletList().run()}
                className={editor!.isActive('bulletlist') ? activeMenuItemClass : inactiveMenuItemClass }
            >
                <FaList/>
            </button>
            <button
                onClick={() => editor!.chain().focus().toggleHeading({level: 1}).run()}
                className={editor!.isActive('heading') ? activeMenuItemClass : inactiveMenuItemClass }
            >
                <FaHeading />
            </button>
            <button
                onClick={() => editor!.chain().focus().toggleCodeBlock().run()}
                className={editor!.isActive('codeblock') ? activeMenuItemClass : inactiveMenuItemClass }
            >
                <FaCode />
            </button>

        </FloatingMenu>
    )
}