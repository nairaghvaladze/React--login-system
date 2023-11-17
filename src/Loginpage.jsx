import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const LoginPage = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    localStorage.setItem('Email:', email);
    localStorage.setItem('Password:', password);
    localStorage.setItem('loggedin', 'true'); // მონაცემის შენახვა
    setLoggedIn(true); // შესვლის სტატუსის ცვლილება

  
  };
  const itsButtonDisabled=email.trim() ==='' || password.trim() ==='';
 
  return (


    
    <div className='container'>
        <div className='row justify-content-center mt-5'>
            <div className='col-md-6'>
    <form onSubmit={handleLogin}>
      <h1>ავტორიზაცია</h1>
      <div className="mt-3">
      <label htmlFor="emailInput" className="form-label">
                Email address
         </label>
      <input
        type="email"
        placeholder="Enter your Email"
        className="form-control"
        id="emailInput"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      </div>
      <div className="mb-3">
      <label htmlFor="password" className="form-label">
                Password
              </label>
      <input
        type="password"
        placeholder="Password"
        className="form-control"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      </div>
      <button type="submit" className="btn btn-success"  onClick={handleLogin} disabled={itsButtonDisabled}> ავტორიზაცია</button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default LoginPage;
