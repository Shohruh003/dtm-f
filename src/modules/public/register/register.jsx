import { Link,useNavigate } from 'react-router-dom';
import { useState,useRef } from 'react';
import {useAuth} from '../../../hooks/useAuth';
import './register.scss';

export const Register=()=>{
    const navigate = useNavigate();
    const { setToken,setData } = useAuth();
    const [error, setError] = useState(false);
    const fullname=useRef(null);
    const username=useRef(null);
    const password=useRef(null);
    const phone=useRef(null);
    const region=useRef(null);

    const handleRegister = async (evt) => {
        evt.preventDefault();

        const form={
            fulname:fullname.current.value,
            username:username.current.value,
            password:password.current.value,
            phone:phone.current.value,
            region:region.current.value
        }

        const res = await fetch("http://localhost:5000/register", {
          method: 'POST',
          headers: {
          'Content-type': 'application/json',
        },
          body:JSON.stringify(form),
        });

        let data= await res.json();

        if (res.ok) {
          setToken(data.token);
          setData(data.data)
          navigate('/');
        } else {
          setError(true);
        }
    };

    return(
        <div className="register">
            <div className="container register__container">
              <div className="register__page">
                <h2 className='register__heading'>Royhatdan otish</h2>
                <form className="register__form" onSubmit={handleRegister}>
                    <input type="text" className={error ? "register__input-error":"register__input"} ref={fullname} placeholder='your full name' />
                    <input type="text" className={error ? "register__input-error":"register__input"} ref={username} placeholder='your username ' />
                    <input type="password" className={error ? "register__input-error":"register__input"} ref={password} placeholder='your password ' />
                    <input type="text" className={error ? "register__input-error":"register__input"} ref={phone} placeholder='your phone ' />
                    <input type="text" className={error ? "register__input-error":"register__input"} ref={region} placeholder='your region ' />
                    <button className="register__btn">Royhatdan otish</button>
                </form>
                <Link className='register__link' to='/login'>Hisobingiz bormi? Kirish</Link>
              </div>
            </div>
        </div>
    )
}