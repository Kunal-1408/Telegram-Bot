// src/components/Login.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Login = () => {
  const clientId = 'YOUR_GOOGLE_CLIENT_ID';

  const onSuccess = (response) => {
    console.log('Login Success: currentUser:', response.profileObj);
    // Handle the response, e.g., send it to your backend for further processing
  };

  const onFailure = (response) => {
    console.log('Login failed: res:', response);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default Login;
