import React,{useState,useContext} from 'react'
import { Usercontext } from '../App'
import Navbar from './Navbar'
import {data as items} from '../dataset'
import {ReactSearchAutocomplete} from 'react-search-autocomplete'


import Cart from './Cart'
const Addtocart=()=>{ 
    const [item,setItem]=useState("")
    const {state,dispatch}=useContext(Usercontext)
    const add=()=>{
        console.log(item)
        dispatch({
            type:"ADD_TO_CART",
            payload:{
                ...item,
                quantity:1
            }
        })
    }

    
    const formatResult = (item) => {
        return item;      
      }
    return (
        <div>
            <Navbar add/>
            <div className="container py-5 " >
                <h1 className="my-4 mx-2">Add items</h1>
                <div className="px-5 pt-5 pb-3" style={{border:"1px solid grey",borderRadius:"4px",textAlign:"center"}}>
                <div style={{ maxWidth: "400px",margin:"10px auto" }}>
          <ReactSearchAutocomplete
            items={items}
            onSelect={item=>setItem(item)}
            autoFocus
            formatResult={formatResult}
          />
        </div>
                    <button class="btn btn-success my-3" onClick={add}>Add</button>
                </div>

            </div>
            <Cart/>
        </div>    
    )
}
export default Addtocart
