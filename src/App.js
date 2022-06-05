import './style/Dark.scss';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { List } from './components/List/List';
import { Single } from './components/Single/Single';
import { New } from './components/New/New';
import {userInputs, productInputs} from './formSource' 
import { useContext } from 'react';
import { DarkModeContext } from './Context/darkModeContext';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  console.log("DDD", darkMode)

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>

          <Route path='/'>
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>

          <Route path='users'>
            <Route index element={<List/>}/>
            <Route path=':userId' element={<Single/>}/>
            <Route path='new' element={<New inputs={userInputs} title="Add New User"/>}/>
          </Route>

          <Route path='products'>
            <Route index element={<List/>}/>
            <Route path=':productId' element={<Single/>}/>
            <Route path='new' element={<New inputs={productInputs} title="Add New Product"/>}/>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
