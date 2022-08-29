import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Add from './pages/user/Add';
import Edit from './pages/user/Edit';
import Users from './pages/user/Users';
import UserRegister from './pages/Register/UserRegister';
import UserLogin from './pages/Register/UserLogin';
import StaffRegister from './pages/Register/StaffRegister'

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route  path="/" exact element={<UserLogin />} />
        <Route  path="/home" exact element={<Home/>} />
        <Route  path="/users/:id" exact element={<Users/>} />
        <Route  path="/add-user" exact element={<Add/>} />
        <Route  path="/edit-user/:id" exact element={<Edit/>} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/add-staff" element={<StaffRegister />} />
      </Routes>
    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Routes>
//         <Route  path="/" exact element={<Home/>} />
//         <Route  path="/home" exact element={<Home/>} />
//         <Route  path="/users/:id" exact element={<Users/>} />
//         <Route  path="/add-user" exact element={<Add/>} />
//         <Route  path="/edit-user/:id" exact element={<Edit/>} />
//       </Routes>
//     </div>
//   );
// }
