import { sva } from "../../styled-system/css"

interface IconButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    Icon: React.ElementType
}

const iconButtonRecipe = sva({
    slots: ['root', 'icon'],
    className: 'icon-button',
    base: {
        root: {
            borderRadius: 'md',
            border: '2px solid',
            padding: '2',
            _hover: {
                opacity: 0.9
            }
        },
        icon: {
            color: 'slate.300',
        }
    },
    variants: {
        color: {
            blue: {
                root: {
                    borderColor: 'blue.400'
                }
            },
            red: {
                root: {
                    borderColor: 'red.400'
                }
            },
            slate: {
                root: {
                    borderColor: 'slate.400'
                }
            }
        },
        iconSize: {
            sm: {
                icon: {
                    fontSize: 'sm'
                }
            },
            md: {
                icon: {
                    fontSize: 'ms'
                }
            },
            lg: {
                icon: {
                    fontSize: 'lg'
                }                
            }
        }
    },
    // compoundVariants: [
    //     {
    //         fill: 'filled',
    //         color: 'blue', 
    //         css: {
    //             root: {
    //                 backgroundColor: 'purple.400'
    //             }
    //         }
    //     },
    //     {
    //         fill: 'filled',
    //         color: 'red', 
    //         css: {
    //             root: {
    //                 backgroundColor: 'purple.400'
    //             }
    //         }
    //     },
    //     {
    //         fill: 'outlined',
    //         color: 'blue', 
    //         css: {
    //             root: {
    //                 backgroundColor: 'purple.400'
    //             }
    //         }
    //     },
    //     {
    //         fill: 'outlined',
    //         color: 'red', 
    //         css: {
    //             root: {
    //                 backgroundColor: 'purple.400'
    //             }
    //         }
    //     }
    // ]
})

//TODO: fazer essa estilizações 

export function IconButton({Icon, ...rest}: IconButtonProps){
    const iconButtonClasses = iconButtonRecipe({ color: 'slate', iconSize: "lg"})
    return(
        <button {...rest} className={iconButtonClasses.root}>
            <Icon className={iconButtonClasses.icon} />
        </button>
    )
}