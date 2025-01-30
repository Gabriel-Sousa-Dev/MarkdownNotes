import { BubbleMenu, Editor } from "@tiptap/react";
import { FaBold, FaCode, FaHeading, FaList, FaStrikethrough } from "react-icons/fa";
import { css } from "../../../../../styled-system/css";
import { square } from "../../../../../styled-system/patterns";

interface CustomBubbleMenuProps {
    editor: Editor | null
}

export function CustomBubbleMenu({editor}: CustomBubbleMenuProps){
    const bubbleMenuClass = css({ padding: 0, borderRadius: 'md', backgroundColor: 'slate.500', display:'flex', gap:0, overflow: 'hidden'})

    const activeMenuItemClass = square({
        color: 'slate.200',
        cursor: 'pointer',
        backgroundColor: 'slate.500',
        padding: '2',
        transition: '0.25s ease-in-out',
        _hover: {
            opacity: 0.85 
        }
    })
    const inactiveMenuItemClass = square({
        color: 'slate.100', 
        cursor: 'pointer',
        backgroundColor: 'slate.600', 
        padding: '2',
        transition: '0.25s ease-in-out', 
        _hover: { 
            opacity: 0.75
        }
    })
    

    return(
        <BubbleMenu editor={editor} tippyOptions={{duration: 100, placement: 'top'}} className={bubbleMenuClass}>
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
                onClick={() => editor!.chain().focus().toggleCode().run()}
                className={editor!.isActive('code') ? activeMenuItemClass : inactiveMenuItemClass }
            >
                <FaCode />
            </button>

            <button
                onClick={() => editor!.chain().focus().toggleStrike().run()}
                className={editor!.isActive('strike') ? activeMenuItemClass : inactiveMenuItemClass }
            >
                <FaStrikethrough />
            </button>

        </BubbleMenu>
    )
}