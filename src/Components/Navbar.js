import React from 'react'
import {useHistory } from 'react-router-dom'
function Navbar({view,add}) {
    const history=useHistory()
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">MD cart</a>
   

    <div class="" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">


      </ul>
      {view && 
      <span class="navbar-text" onClick={()=>history.push("/add")}>
      
      <i class="fas fa-cart-plus mx-3"></i>
      </span> }
      {add && 
      <span class="navbar-text" onClick={()=>history.push("/")}>
      
      <i class="fas fa-shopping-cart mx-3"></i>
      </span> }
      
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
