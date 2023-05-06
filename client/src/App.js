import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import CreateUser from './components/CreateUser'
import UserList from './components/UserList'
function App() {

  return (
    <div className='App'>
      <CreateUser />
      <UserList />
    </div>
  );
}

export default App;
