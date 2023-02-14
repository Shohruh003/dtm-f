import { useEffect } from "react";
import { useAuth } from "../../../hooks/useAuth";
import './table.scss';

export const Table=()=>{
    const{result,setResult}=useAuth()

    useEffect(()=>{
        fetch(`http://localhost:5000/result`)
        .then (res=>res.json())
        .then (data=>setResult(data))
        .catch (err=>console.log(err));

    },[setResult]);

    return(
        <div className="table">
            <div className="container table__container">
                    <h2>Songi imtihon g’olibi</h2>
                <ul>
                        {result?.map(res=>(
                            <li key={res.res_id}><span>{res?.users[0]?.fulname}</span>    <span>{res.test_date}</span>
                            <span>{res.total_score}</span></li>
                        ))}
                </ul>
            </div>
        </div>
    )
}