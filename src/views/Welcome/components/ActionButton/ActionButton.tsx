import { useNavigate } from "react-router";
import { sva } from "../../../../../styled-system/css";

interface ActionButtonProps {
    Icon: React.ElementType,
    label: string,
    to?: string,
    onClickCallback?: () => void
}

const actionButtonRecipe = sva({
    className: 'action_button',
    slots: ['root', 'icon', 'label'],
    base: {
        root: {
            height: 'full',
            width: 'full',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: 'slate.800',
            padding: "2",
            borderRadius: "md",
            m: '5px',
            transition: '0.20s',
            gap: '2',
            cursor: 'pointer',
            userSelect: 'none',
            _hover: {
                opacity: '0.9'
            }
        },
        label: {
            color: 'slate.300',
            fontWeight: 'bold'
        },
        icon: {
            fontWeight:"light",
            color: 'slate.300',
            fontSize: "3xl"
        }
    }
});


export function ActionButton({Icon, label, onClickCallback, to}: ActionButtonProps ){
    const actionButtonClasses = actionButtonRecipe()

    const navigate = useNavigate();

    

    return(
        <div className={actionButtonClasses.root} onClick={to ? ()=>navigate(to) : onClickCallback}>
            <Icon className={actionButtonClasses.icon}/>
            <span className={actionButtonClasses.label}>{label}</span>
        </div>
    )
}