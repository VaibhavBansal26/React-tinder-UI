import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Header';
import TinderCards from './TinderCards';
import './App.css';
import SwipeButtons from './SwipeButtons';
import ChatScreen from './ChatScreen';
import Chats from './Chats';

function App() {
  return (
    <div className="App">
    
      <Router> 
      
        <Switch>
          <Route path='/chat/:person'>
              <Header backButton="/chat"/> 
              <ChatScreen/>
            </Route>
            <Route path='/chat'>
              <Header backButton="/"/> 
              <Chats/>
              </Route>
            <Route path='/'>
              <Header/>  
              <TinderCards/>
              <SwipeButtons/>
            </Route>
        </Switch>

      </Router>
    
    </div>
  );
}

export default App;
