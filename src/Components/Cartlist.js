import React, { useContext } from 'react'
import { Usercontext } from '../App'
import Navbar from './Navbar'
import { useHistory } from 'react-router-dom'
function Cartlist() {
    const { state, dispatch } = useContext(Usercontext)
    const history = useHistory()
    var a = 0
    const remove=(item)=>{        
        dispatch({
            type:"REMOVE_FROM_CART",
            payload:item
        })
    }
    const add=(item)=>{
        dispatch({
            type:"ADD_COUNT",
            payload:item
        })
    }
    const minus=(item)=>{
        dispatch({
            type:"MINUS_COUNT",
            payload:item
        })
    }
    return (
        <div>


            <div className="container mx-auto py-5">
                <h1 className="mx-2 my-4">Cart items</h1>
                <ul class="list-group">
                    {state.items.map(item => {
                        a += 1
                        return (
                            <li class="list-group-item d-flex align-items-center flex-column ">
                                <div class="d-flex align-items-center flex-row justify-content-between" style={{ width: "100%" }}>
                                    <h5 class="px-3 py-3">{a}.{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</h5>
                                    <span class="badge bg-success rounded-pill">{item.quantity}</span>
                                </div>
                                <div className="d-flex align-items-center flex-row justify-content-between my-4 px-2" style={{ width: "100%" }}>
                                    <button type="button" class="btn btn-danger px-3" onClick={()=>remove(item)}><i class="fas fa-trash px-2"></i>Remove</button>
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-success px-3" onClick={()=>minus(item)}><i class="fas fa-minus px-2"></i></button>
                                        <button type="button" class="btn btn-success px-3" onClick={()=>add(item)}><i class="fas fa-plus px-2"></i></button>
                                    </div>

                                </div>
                            </li>
                        )
                    })}


                </ul>
            </div>

        </div>
    )
}

export default Cartlist
