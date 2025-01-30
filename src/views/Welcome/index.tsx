import { HiDocumentAdd, HiDocumentSearch, HiLogout } from 'react-icons/hi';
import logo from '../../assets/logo-dark-transparent-cropped.png'
import { ActionButton } from './components/ActionButton/ActionButton'
import { vstack } from '../../../styled-system/patterns';
import { css } from '../../../styled-system/css';

export function Welcome(){

    return(
        <>
            <div className={css({position: 'absolute', top: '50%', left: '50%',transform: 'translate(-50%,-50%)'})}>
                <img src={logo} alt="Logo" className={css({my: '6', userSelect: 'none'})} draggable='false'/>
                <div className={vstack({gap: '1'})}>
                    <ActionButton
                        Icon={HiDocumentAdd}
                        label='Novo Nota'
                        to='/app/editor/5'
                    />
                    <ActionButton
                        Icon={HiDocumentSearch}
                        label='Gerenciar Notas'
                        to='/app/group-management'
                    />
                    <ActionButton
                        Icon={HiLogout}
                        label='Sair'
                        onClickCallback={()=>window.alert('Faça a logica de saida da aplicação')}
                    />
                </div>
            </div>
        </>
    )
}