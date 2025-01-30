// import { useParams } from "react-router"
import { css } from "../../../styled-system/css"
import { TipTap } from "./components/TipTap/TipTap"

export function Editor(){
    // const { id } = useParams()

    return(
        <div className={css({
            maxWidth: '5xl',
            marginX: 'auto',
            marginTop: '4',
            height: '100vh',
            backgroundColor: 'slate.700',
            borderRadius: 'md',
            paddingX: 3,
            paddingY: 1 
        })}>
            {/* <textarea 
                className={css({
                    outline: 'none',
                    height: '100%',
                    width: '100%',
                    color: 'slate.300'
                })}
            /> */}
            <TipTap />
        </div>
    )
}   