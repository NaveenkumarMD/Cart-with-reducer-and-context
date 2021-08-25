import React, { useContext } from 'react'
import { Usercontext } from '../App'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'
import Cartlist from './Cartlist'
function Cart() {
    const { state, dispatch } = useContext(Usercontext)
    const history = useHistory()

    return (
        <div>
            <Navbar view/>
<Cartlist/>
<div style={{ textAlign: "center" }} onClick={()=>history.push("/add")}>
                <button className="btn btn-success" >Add</button>
            </div>
           
        </div>
    )
}

export default Cart
