import './App.css';
import {Helloworld,Byeworld} from './Components/Helloworld';
import { useState, useEffect} from 'react';
import { BrowserRouter as Router,Route,Link,Routes } from 'react-router-dom';
import Contact from './Components/Contact';

function App() {
  const [counter ,Setcounter]=useState(0);

  const increement =() =>{
    Setcounter(counter+1)
  }
  console.log(counter)
  
  useEffect(() =>{
    document.title=`clicked ${counter} times`
  },[counter])
  return (
    <div className="App">
      <Router>
      <nav>
        <Link to='/' className="text">Home</Link>
        <Link to='/Contact' className="text">Contacts</Link>
        <Link to='/About' className="text">About</Link>
       
      </nav>
      <Routes>
      <Route exact path='/' render={() => (
      <div>
     <h1>Hello World</h1>
     <p>Hii shivam thakkar is here</p>
     <Helloworld text="hello world how r u"/>
     <Byeworld text="Bye bye see you"/>
     <button onClick={increement}>click me</button>
     <h1>{counter}</h1>
     </div>
      )}/>
      </Routes>
     <Routes>
     <Route path = '/Contact' element={<Contact/>} />
     </Routes>
     </Router>
    </div>
  );
}

export default App;
