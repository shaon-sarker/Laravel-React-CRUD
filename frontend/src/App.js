import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route,Link} from "react-router-dom";
import Home from './pages/Home';
import User from './pages/User';
import Edit from './pages/Edit';
import View from './pages/View';

function App() {
  return (
    <div>

      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'/'} className="nav-link">Home</Link>
          </li>
          <li className='nav-item'>
            <Link to={'/user'} className="nav-link">User</Link>
          </li>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/edit/:id' element={<Edit/>}/>
          <Route path='/view/:id' element={<View/>}/>

        </Routes>
      </div>
    </div>
  );
}

export default App;
