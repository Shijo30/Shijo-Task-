import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import Add_city from './Components/Add_city';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Routes>


    <Route path='/' element={[<Add_city/>]}/>

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
