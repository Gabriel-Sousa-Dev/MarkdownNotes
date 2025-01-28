// import { IconButton } from "@Components/IconButton";
// import { HiArrowNarrowLeft } from "react-icons/hi"; 
import { CategoryRow } from "./components/CategoryRow";
import { InputGroup } from "./components/InputGroup";
import { css } from "../../../styled-system/css";
import { divider, grid } from "../../../styled-system/patterns";

const mock = [
    {
        label: 'diario',
        number: 4
    },
    {
        label: 'pesquisar',
        number: 86
    },
    {
        label: 'duviddas',
        number: 1010
    }
]

export function GroupManagement(){
    
    const notesClassname = css({
        aspectRatio: 'square',
        backgroundColor: 'slate.700',
        borderRadius: 'md',
        padding: 1,
        color: 'slate.300'
    });
    

    return(
        <div className={css({
            display: 'flex',
            alignItems: 'stretch',
            gap: '3',
            maxWidth: '6xl',
            mx: 'auto',
            marginTop: '4',
            paddingX: '2',
            height: '100%'
        })}>
            <div className={css({
                display: 'flex',
                flexDirection: 'column',
                gap: '2',
                flexGrow: 1,
                flexShrink: 0
            })}>
                {/* <IconButton Icon={HiArrowNarrowLeft} /> */}

                <InputGroup />

                {
                    mock.map((group, ind) => <CategoryRow key={ind} number={group.number} label={group.label} />)
                }
            </div>
            

            <div className={grid({
                backgroundColor: 'slate.800',
                flexGrow: 5,
                gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
                borderRadius: 'md',
                padding: 2,
                overflowY: 'scroll',
                scrollbar: 'hidden'
            })}>
                <div className={notesClassname}>
                    lorem ipsuj
                </div>
                <div className={notesClassname}>
                    lorem ipsuj
                </div>
                <div className={notesClassname}>
                    lorem ipsuj
                </div>
                <div className={notesClassname}>
                    lorem ipsuj
                </div>
                <div className={notesClassname}>
                    lorem ipsuj
                </div>
                <div className={notesClassname}>
                    lorem ipsuj
                </div>



            </div>
            
        </div>
    )
}