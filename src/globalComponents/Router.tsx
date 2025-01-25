import { MemoryRouter, Route, Routes } from 'react-router'
import { Welcome } from '../views/Welcome'
import { GroupManagement } from '../views/GroupManagement'
import { Editor } from '../views/Editor'
import { TitleBar } from './TitleBar'

export function Router(){
    return(
        <MemoryRouter>
            <Routes>
                <Route path='/' element={<Welcome />} />

                <Route path='/app' element={<TitleBar/>}> 
                    <Route path='group-management' element={<GroupManagement />}/>
                    <Route path='editor/:id' element={<Editor />}/>
                </Route>
            </Routes>
        </MemoryRouter>
    )
}