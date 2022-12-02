import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";

const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.href= "http://127.0.0.1:5173/dashboard"
  );
};


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8bl1r0yyxul65aby.us.auth0.com"
      clientId="XduwdsB54wu9nwzihLrqWFun4UaHNejC"
      redirectUri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
