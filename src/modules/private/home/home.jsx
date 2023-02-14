import './home.scss';
import { Link } from 'react-router-dom';

export const Home=()=>{
    return(
        <div className="home">
            <div className="container home__container">
                <div className="home__wrapper">
                    <h1 className="home__heading">
                        TestBor saytiga xush kelibsiz !
                    </h1>
                    <p className="home__text">Tugmani bosing va bizning testlar bilan o`z bilimingizni oshiring</p>
                    <Link to='/blok' className="home__link">Testga kirish</Link>
                </div>
            </div>
        </div>
    )
}