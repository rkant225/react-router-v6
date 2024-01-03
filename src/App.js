import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './Components/Layout';
import UsersLayout from './Components/Users/UsersLayout';
import AboutLayout from './Components/About/AboutLayout';
import Admin from './Components/Admin';
import Home from './Components/Home';
import Contact from './Components/About/Contact';
import OtherApps from './Components/About/OtherApps';
import AboutHome from './Components/About/AboutHome';
import User from './Components/Users/User';
import UsersHome from './Components/Users/UsersHome';

function App() {
  return (
    <div>
      <h1>Sample 2</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>

            <Route index element={<Home/>}/>

            <Route path="about" element={<AboutLayout/>}>
              <Route index element={<AboutHome/>}/>
              <Route path="contact" element={<Contact/>}/>
              <Route path="other-apps" element={<OtherApps/>}/>
            </Route>


            <Route path="users" element={<UsersLayout/>}>
              <Route index element={<UsersHome/>}/>
              <Route path=":userId" element={<User/>}/>
            </Route>


            <Route path="super-admin" element={<Navigate replace to={"/admin"}/>}/>

            <Route path="admin" element={<Admin/>}/>
            <Route path="*" element={<h1>Not Found</h1>}/>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
