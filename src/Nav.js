import React,{useState,useEffect} from 'react';
import './Nav.css';

function Nav() {
 const [show,handleShow]=useState(false);

 useEffect(()=>{
  window.addEventListener('scroll',()=>{
    if(window.scrollY>100){
      handleShow(true)
    }else{
      handleShow(false)
    }

  });

  return ()=>{
    window.removeEventListener('scroll');
  }

 },[])
  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/375px-Netflix_2015_logo.svg.png"  alt="Netflix Logo"/>

      <img className="nav__avatar" src="https://secure.gravatar.com/avatar/8081b26e05bb4354f7d65ffc34cbbd67?s=160&d=retro&r=pg" alt="Netflix Logo" />
    </div>
  )
}

export default Nav
