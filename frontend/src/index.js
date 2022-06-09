import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'     

import Main from './components/Main/Main';
import Admin from './components/Admin/Admin';
import Login from './components/Admin/Login/Login'
import ProjectsList from './components/Admin/ProjectsList/ProjectsList';
import ProjectsUpsert from './components/Admin/ProjectsUpsert/ProjectsUpsert';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>

    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Main />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="login" element={<Login />} />

            <Route path="projects" element={<ProjectsList />}>
              <Route path=":projectId" element={<ProjectsUpsert />} />
            </Route>
          
          </Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
