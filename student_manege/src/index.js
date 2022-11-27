import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Navigate } from "react-router-dom";
import { store } from './redux/configStore';

// Config Redux Store and React Router
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import JSX
import { StudentManage } from './StudentManage/StudentManage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <Provider store={store} >
    <StudentManage />
  </Provider>
    
)
