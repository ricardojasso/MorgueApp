import React,{useState} from 'react';
import { LoginForm } from './Components/LoginForm/LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';
import Rutas from './routes/Rutas';


function App() {
  const [inicio, setInicio]=useState(false);

  const isAuth=true;
  return (
(isAuth===inicio ? (<Router>
  <Rutas/>
</Router>):(<LoginForm/>))
    
  );
}

export default App;