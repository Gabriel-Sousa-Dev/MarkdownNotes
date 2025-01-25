// import { useParams } from "react-router"
import { css } from "../../../styled-system/css"

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
            padding: 1
        })}>
            <textarea 
                className={css({
                    outline: 'none',
                    height: '100%',
                    width: '100%',
                    color: 'slate.300'
                })}
            />
        </div>
    )
}   