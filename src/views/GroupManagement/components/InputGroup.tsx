import { HiClipboard } from "react-icons/hi";
import { sva } from "../../../../styled-system/css";

const inputGroupRecipe = sva({
    slots: ['root', 'input', 'button'],
    className: 'input-group',
    base: {
        root: {
            display: 'flex',
            alignItems: 'stretch',
            gap: '1',
            padding: '1',
            borderRadius: 'md'
        },
        input: {
            color:  'slate.300',
            flex: '1',
            paddingX: '3',
            paddingY: '1',
            borderRadius: 'sm',
            outline: 'none',
            backgroundColor: 'slate.600'

        },
        button: {
            padding: '3',
            fontSize: '3xl',
            color: 'slate.300',
            borderRadius: 'md',
            backgroundColor: 'slate.800',
            _hover: {
                opacity: 0.9    
            }
        }
    }

})

export function InputGroup(){
    const inputGroupClasses = inputGroupRecipe()
    return(
        <div className={inputGroupClasses.root}>
            <input type="text" placeholder="Digite o nome do Grupo..." className={inputGroupClasses.input}/>
            <button type="button" className={inputGroupClasses.button}>
                <HiClipboard />
            </button>
        </div>
    )
}