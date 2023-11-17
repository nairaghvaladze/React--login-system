import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const AuthPage = ({ setLoggedIn }) => {
  const handleLogout = () => {
    // ავტორიზაციის გაუქმება
    localStorage.setItem('loggedin', 'false'); // მონაცემის შენახვა
    setLoggedIn(false); // გამოსვლის სტატუსის ცვლილება
  };

  return (
    <div>
      <h1>ავტორიზებული გვერდი</h1>
      <button onClick={handleLogout} className="btn btn-primary">გამოსვლა</button>
    </div>
  );
};

export default AuthPage;
