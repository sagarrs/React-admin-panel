import './App.css';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import { Home } from './components/Home/Home';
import { Login } from './components/Login/Login';
import { List } from './components/List/List';
import { Single } from './components/Single/Single';
import { New } from './components/New/New';

function App() {
  return (
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
          <Route path='new' element={<New/>}/>
        </Route>

        <Route path='products'>
          <Route index element={<List/>}/>
          <Route path=':productId' element={<Single/>}/>
          <Route path='new' element={<New/>}/>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
