import './App.scss';
import { Route, Routes } from 'react-router-dom'

import Login from './Components/Login/Login';
import Users from './Components/Users/Users';
import User from './Components/User/User.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Login />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/users/:id' element={<User />}/>
      </Routes>
    </div>
  );
}

export default App;
