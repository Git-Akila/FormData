
import './App.css';
//import LoginSignup from './LoginSignup/LoginSignup';
import Formdata from './Formdata/Formdata';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Signup from './Signup';
function App() {
  return (
   <BrowserRouter>
    {/*<LoginSignup/>   */}
   <Routes>
        <Route path="/" element={<Formdata/>}></Route>
        <Route path="/signup" element={<Signup/>}/>
   
   </Routes>
  </BrowserRouter>
  );
}

export default App;
