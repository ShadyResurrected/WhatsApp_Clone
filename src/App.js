import React from 'react'
import './App.css';

import Messenger from './components/Messenger';

import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  
  const clientId = '202213112640-jft40l3ka5vckvk7na4hkufsu3a715k9.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
