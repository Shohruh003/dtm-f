import { Route, Routes } from 'react-router-dom';
import { Blok, Direction, Home, Result, Table, Tests } from './modules';
import { Tests2 } from './modules/private/tests2';

export const Private=()=>{
    return(
        <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blok' element={<Blok/>}/>
            <Route path='/direction' element={<Direction/>}/>
            <Route path='/tests' element={<Tests/>}/>
            <Route path='/tests2' element={<Tests2/>}/>
            <Route path='/result' element={<Result/>}/>
            <Route path='/table' element={<Table/>} />
        </Routes>
        </>
    )
}