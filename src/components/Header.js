import React from 'react';
import {Link} from "react-router-dom";
import './Header.css';
import Icon from './icon.png';


const Header = () => {
  return (
   
    <header>
        <div class="navbar">
        
        
  <div class="navbar-start">
  <a class="normal-case text-xl" id='asd'> <img src={Icon} width="96px" />Bus Romance</a>
 
    <div class="dropdown">

   


      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to="/" id='navtext'>ホーム</Link></li>
        <li><Link to="/time1" id='navtext'>八王子みなみ野駅</Link></li>
        <li><Link to="/time2"  id='navtext'>八王子駅南口</Link></li>
        <li><Link to="/time3"  id='navtext'>学生会館</Link></li>
        
      </ul>
    </div>
    
  </div>
  
 
  
</div>
    </header>
    

  )
}

export default Header