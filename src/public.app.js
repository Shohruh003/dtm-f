import { Route, Routes } from 'react-router-dom';
import {Register,Login} from './modules'

export const Public=()=>{
    return(
        <>
            <Routes>
                <Route path='/' element={<Register/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </>
    )
}