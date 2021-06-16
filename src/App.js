import React from 'react';
import Login from "./components/Login";
import './App.css';

const App=()=>{

    return(
      <>
        <div className='app'>
        <Login/>
        <h4>The Username is "user" and password is "pass@123"<br/>
          else will show an alert about wrong username or password
        </h4>

        </div>
      </>
    )
  
}

export default App;