import { Link } from 'react-router-dom';
import { useEffect} from 'react';
import {FiArrowLeft} from 'react-icons/fi';
import './blok.scss';
import { useAuth } from '../../../hooks/useAuth';

export const Blok=()=>{
    const{sciences,setSciences}=useAuth()
    const{blok1,setBlok1}=useAuth()
    const{setBlok2}=useAuth()

    useEffect(()=>{
        fetch(`http://localhost:5000/sciences`)
        .then (res=>res.json())
        .then (data=>setSciences(data))
        .catch (err=>console.log(err));

    },[setSciences]);

    const blok2=sciences?.filter(science=>{
        if(Number(blok1)=== 1){
            return science.science_id=== 2 || science.science_id=== 3
        }
        else if(Number(blok1)=== 2){
            return science.science_id=== 1
        }
        else if(Number(blok1)=== 3){
            return science.science_id=== 1
        }
        else if(Number(blok1)=== 4){
            return science.science_id=== 5
        }

        else if(Number(blok1)=== 5){
            return science.science_id=== 4
        }

        return science
    });

    return(
        <div className="blok">
            <div className="container blok__container">
                <Link to='/' className='goback'>
                    <FiArrowLeft style={{marginRight:"15px"}}/>Orqaga
                </Link>
                <h1 className="blok__heading">Assosiy Imtihonga hush kelibsiz</h1>
                <div className="blok__role">
                    <span className='blok__role-circle'>1</span>
                    <span className='blok__role-line'></span>
                    <span className='blok__role-circle'>2</span>
                    <span className='blok__role-line'></span>
                    <span className='blok__role-circle'>3</span>
                </div>
                <form className="blok__form">
                    <div className="blok__wrapper">
                        <span className='blok__form-title'>Birinchi fan</span>
                        <select onChange={(e)=>setBlok1(e.target.value)} className='blok__select'>
                        <option value="blok1" defaultValue='blok1'>blok 1</option>
                            {sciences?.map(science=>(
                                <option key={science.science_id} value={science.science_id}>{science.science}</option>
                            ))}
                        </select>
                    </div>
                    <div className="blok__wrapper">
                        <span className='blok__form-title'>Birinchi fan</span>
                        <select className='blok__select' onChange={(e)=>setBlok2(e.target.value)}>
                            <option value="blok2" defaultValue='blok2'>blok 2</option>
                            {blok2?.map(arr=>(
                                <option key={arr.science_id} value={arr.science_id}>{arr.science}</option>
                            ))}
                        </select>
                    </div>
                    <Link to='/direction' className='blok__link'>Keyingi bo`lim</Link>
                </form>
            </div>
        </div>
    )
}