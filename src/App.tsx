// this short web app will act as a job tracking journal for applicants.
// Its will serve to store and display the details of job applications.
// It has the following features:
// 1. Display a list of job applications.
// 2. Add a new job application.
// 3. Edit an existing job application (just applied - in review - interviewed - rejected).
// 4. Delete a job application.
// 5. Filter job applications by status (just applied - in review - interviewed - rejected).
// 6. Search job applications by company name or position.
// 7. Sort job applications by date applied or company name.



// Routing set up for the application

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/Landing';
import Login from './pages/LogIn';
import Register from './pages/Register-null';
import Dashboard from './pages/Dashboard';
import AddJob from './pages/AddJob';
import Applications from './pages/Applications';
import Page404 from './pages/Page404';
import './App.css'

function App() {
  return (
    <div className="root">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;


//Pseudo code for explaining the code..

//