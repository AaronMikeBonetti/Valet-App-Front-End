import React from 'react';
import Store from './Store'
import LoginPage from './components/Login Page/LoginPage'

export default function App() {
  return (
    <Store>
      <div className='App'>
        <LoginPage> </LoginPage>
      </div>
    </Store>
    
  );
}

