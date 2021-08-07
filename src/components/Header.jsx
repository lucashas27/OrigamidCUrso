import React from 'react';
import '../Promessa.css'
import '../components/styles/Header.css'

const Header = (props) => {

   return ( 
    <div id="header">

<li>
    <ul>
       <a href="/" alt="sobre">{props.text}</a> 
    </ul>
    <ul>
       <a href="/">entrar</a> 
    </ul>
    <ul>
       <a href="/">lista de pokes</a> 
    </ul>
</li>
   </div>
   )
}


export default Header;