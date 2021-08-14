import React from 'react';
import styles from '../components/styles/HeaderStyles.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {

  return ( 
    <div id={styles.header}>
      <div className={styles.navBar}>
          <ul>
            <li> <NavLink to="/sobre">sobre</NavLink> </li>
            <li> <NavLink to="/effect">Desafio useEffect</NavLink> </li>
            <li> <NavLink to="/state">Desafio useState</NavLink> </li>
            <li> <NavLink to="/batalha-pokemon">Batalha Pokemon</NavLink> </li>
          </ul>
      </div>
    </div>
   )
}


export default Header;