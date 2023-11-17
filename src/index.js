import React, { useState } from 'react';
import  ReactDOM  from 'react-dom/client';
import AuthPage from './Authpage';
import LoginPage from './Loginpage';




function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      {loggedIn ? (
        <AuthPage setLoggedIn={setLoggedIn} />
      ) : (
        <LoginPage setLoggedIn={setLoggedIn} />
      )}

     
    </div>
  );
};


var root=document.getElementById("root");
ReactDOM.createRoot(root).render(<App />)