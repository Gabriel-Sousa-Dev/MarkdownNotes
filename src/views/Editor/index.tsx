import { useParams } from "react-router"

export function Editor(){
    const {id} = useParams()

    return(
        <p>editor {id}</p>
    )
}   