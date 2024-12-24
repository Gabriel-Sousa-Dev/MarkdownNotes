import { HiDocumentAdd, HiDocumentSearch, HiLogout } from 'react-icons/hi';
import logo from '../../assets/logo-dark-transparent-cropped.png'
import { ActionButton } from './components/ActionButton/ActionButton'
import { vstack } from '../../../styled-system/patterns';
import { css } from '../../../styled-system/css';
import { Link } from 'react-router';

export function Welcome(){

    return(
        <>
            <div className={css({position: 'absolute', top: '50%', left: '50%',transform: 'translate(-50%,-50%)'})}>
                <img src={logo} alt="Logo" className={css({my: '6', userSelect: 'none'})} draggable='false'/>
                <div className={vstack({gap: '1'})}>
                    <ActionButton
                        Icon={HiDocumentAdd}
                        label='Novo Nota'
                    />
                    <ActionButton
                        Icon={HiDocumentSearch}
                        label='Gerenciar Notas'
                    />
                    <ActionButton
                        Icon={HiLogout}
                        label='Sair'
                    />
                    <Link to='/app/notes-management'>dsadas</Link>
                    <Link to='/app/editor/5'>dsadas</Link>
                </div>
            </div>
        </>
    )
}