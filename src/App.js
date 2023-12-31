import React from 'react';
import { Provider } from 'react-redux';
import store from './state/store';


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LawyerList from './components/lawyerList';
import Home from './components/home';
import Navbar from './components/navbar';

function App() {


  return (
    <Provider store={store}>
      <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element = {<Home/>}/>

            
            <Route exact path="/lawyers/:firm/:category" element={<LawyerList />} />
            

          </Routes>
        
      </Router>
    </Provider>
  );
}

export default App;
