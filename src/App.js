import './App.scss';
import {useAuth} from './hooks/useAuth'
import { Private } from './private.app';
import { Public } from './public.app';

function App() {
  const {token} = useAuth()
  
  if(token){
    return <Private/>
  }
  return <Public/>
}

export default App;
