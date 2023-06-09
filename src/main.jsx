import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

import { createRoot } from "react-dom/client";
import { BrowserRouter, HashRouter } from "react-router-dom";


const root = createRoot(document.getElementById("root"));

root.render(
  <HashRouter>
    <App></App>
  </HashRouter>
);