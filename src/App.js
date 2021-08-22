import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import Addtocart from './Components/Addtocart';


import Cart from './Components/Cart';



import { createContext, useReducer, UseReducer } from 'react'
import { cartreducer,initialstate } from './Reducer';

export const Usercontext = createContext()

function App() {
  const [state,dispatch]=useReducer(cartreducer,initialstate)
  return (
    <Usercontext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Route path="/" exact component={Cart}/>
        <Route path="/add" exact component={Addtocart} />
      </BrowserRouter>
    </Usercontext.Provider>

  );
}

export default App;
