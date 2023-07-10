import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HttpClient } from './httpClient/httpClient';
import { LocalTokenRepository } from './repository/localTokenRepository';
import { AuthService } from './service/AuthService';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// bootStrap: 처음에 돌아가기 위한 일련의 준비 과정들, 분산되어 있으면 불리함
// DI
const tokenRepository = new LocalTokenRepository();
const httpClient = new HttpClient(
  'https://www.pre-onboarding-selection-task.shop/',
  tokenRepository
);
const authService = new AuthService(httpClient, tokenRepository);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
