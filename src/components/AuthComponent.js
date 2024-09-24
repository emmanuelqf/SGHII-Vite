import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Login from ".login/Login.jsx"

function AuthComponent() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated) {
 
    return <Redirect to="/main" />;
  }

<Login.jsx/>

}

export default AuthComponent;
