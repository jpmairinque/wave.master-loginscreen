import {SignUpBox} from './components/SignUpBox';
import {Prancha} from './components/Prancha'
import {useState} from 'react'
import './App.css'



function App() {

  const [signUp, setSignUp] = useState(false);

  function setDef() {
    setSignUp(true);    
  }
  
  return (
    <div className="App">
     
       <SignUpBox signUp={signUp} setDef = {setDef}/> 
       <Prancha signUp={signUp} />
      
    </div>
  );
}

export default App;
