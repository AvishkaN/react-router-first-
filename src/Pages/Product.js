import React from 'react'
import {Link} from 'react-router-dom'

function Product() {
    return (
        <div>
           <h1>products</h1>
           <ul>
               <li><Link to='/product/1'>Books</Link></li>
               <li> <Link to='/product/2'>Pencil</Link></li>
               <li><Link to='/product/3'>laptop</Link></li>
           </ul> 
        </div>
    )
}

export default Product;
