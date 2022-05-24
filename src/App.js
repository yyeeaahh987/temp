import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import history from './history';
import './App.css';
import Home from './components/pages/Home';
import Encyclopedia from './components/pages/Encyclopedia';
import Survey from './components/pages/Survey';
// import Treestagram from './components/pages/Treestagram';
import Kelvin from './pages/kelvin/Kelvin';
import Tree from './components/pages/Tree';

import Form from './components/pages/Form';
import LoggedIn from './components/pages/LoggedIn';
import Records from './components/pages/Records';
import UserPage from './components/pages/UserPage';
import AdminPage from './components/pages/AdminPage';

function App() {
  return (
    <>
      <BrowserRouter 
      // history={history}
      >
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/encyclopedia' element={<Encyclopedia></Encyclopedia>} />
          <Route path='/survey' element={<Survey></Survey>} />
          {/* <Route path='/treestagram' element={<Treestagram></Treestagram>} /> */}
          {/* <Route path='/treestagram' element={<Kelvin></Kelvin>} /> */}
          <Route path='/post' element={<Tree></Tree>} />
          <Route path='/sign-in' element={<LoggedIn></LoggedIn>} />
          <Route path='/sign-up' element={<Form></Form>} />
          <Route path='/records' element={<Records></Records>} />
          <Route path='/user' element={<UserPage></UserPage>} />
          <Route path='/admin' element={<AdminPage></AdminPage>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}


export default App;



