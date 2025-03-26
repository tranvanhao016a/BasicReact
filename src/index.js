import React, { StrictMode } from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './styles/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <App />
 
);


 // StrictMode sẽ gọi một số hàm hai lần, điều này có thể dẫn đến một số hành vi không mong muốn nếu code của bạn không được viết đúng cách.
// const root = createRoot(document.getElementById('root'));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
