import { HiDocument } from "react-icons/hi";
import { sva } from "../../../../styled-system/css";

interface CategoryRowProps {
    label: string,
    number: number
}

const categoryRowRecipe = sva({
    slots: ['root', 'label', 'indicator-root', 'icon', 'number'],
    className: 'category-row',
    base: {
        root: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'slate.300',
            padding: '3',
            borderRadius: 'md',
            backgroundColor: 'slate.800',
            transition: '0.2s',
            _hover: {
                opacity: 0.9
            }
        },
        label: {
            fontWeight: 'bold',
            fontSize: 'md'
        },
        "indicator-root": {
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
        },
        icon: {
            fontSize: '4xl'
        },
        number: {
            fontWeight: 'bold',
            minWidth: '1.5rem',
            textAlign: 'center'
        }

    }
})

export function CategoryRow({label, number}: CategoryRowProps){
    const categoryRowClasses = categoryRowRecipe()
    return(
        <div className={categoryRowClasses.root}>
            <span className={categoryRowClasses.label}>
                {label}
            </span>

            <div className={categoryRowClasses["indicator-root"]}>
                <HiDocument className={categoryRowClasses.icon}/>
                <span className={categoryRowClasses.number}>
                    {number}
                </span>
            </div>

        </div>
    )
}