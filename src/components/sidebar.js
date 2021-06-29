import React from 'react'
import { Dropdown } from 'react-bootstrap'
import {ImCross} from 'react-icons/im'
import {FaFacebookF,FaInstagram,FaYoutube} from 'react-icons/fa'
export default ({handleclose}) => {
    return <div>
        <ul className="asdfsadojfisf-sdff">
            <li > <a onClick={()=>handleclose()}><ImCross color="white"/></a></li>
            <li > <a href="">Quesos</a></li>
            <li > <a href="">Cultura y queso</a></li>
            <li > <a href="">Recetas</a></li>
            <li > <a href="">eventos</a></li>
            <li > <a href="">¿dónde comprar?</a></li>
        </ul>
    <div className="sam039ojascf">
    <div className="asdfb382ashndsf"></div>
    <div className="d-flex mt-2">
        <p >Síguenos:</p>
       <p><FaFacebookF/></p> 
       <p><FaYoutube/></p> 
       <p><FaInstagram/></p> 
        
        
    </div>
    </div>
    </div>
}