import './login.scss';
import { Link,useNavigate } from 'react-router-dom';
import { useRef,useState } from 'react';
import { useAuth } from '../../../hooks/useAuth';

export const Login=()=>{
    const navigate = useNavigate();
    const { setToken,setData } = useAuth();
    const [error, setError] = useState(false);
    const username=useRef(null);
    const password=useRef(null);

    const handleLogin = async (evt) => {
        evt.preventDefault();

        const form={
            username:username.current.value,
            password:password.current.value
        }

        const res = await fetch("https://taest-b.herokuapp.com/login", {
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
        <div className="login">
            <div className="container login__container">
              <div className="login__page">
                <h2 className='login__heading'>Hisobga kirish</h2>
                <form className="login__form" onSubmit={handleLogin}>
                    <input type="text" className={error ? "login__input-error":"login__input"} ref={username} placeholder='your username ' />
                    <input type="password" className={error ? "login__input-error":"login__input"} ref={password} placeholder='your password ' />
                    <button className="login__btn">Kirish</button>
                </form>
                <Link className='login__link' to='/register'>Hisobingiz yo`qmi? Ro`yhatdan otish</Link>
              </div>
            </div>
        </div>
    )
}