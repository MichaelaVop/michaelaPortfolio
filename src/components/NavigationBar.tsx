import { useState } from "react";

const NavigationBar = () => {
    const [burgerIsActive, setBurgerIsActive] = useState(false)
    const [showMenu, setShowMenur] = useState(false); 

    return (
       

        <nav>
            <div className='navContainer'>
                {/* <input id='nav-toggle' type='checkbox'></input> */}
                <img src='../../../img/logo_obdelnik.png' alt='MiVopat'></img>
                <ul className='links' id={burgerIsActive ? 'isActive' : ''} onClick={() => setBurgerIsActive(!burgerIsActive)}>
                    <li><a href='#header'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
                <button className='icon-burger' id={burgerIsActive ? 'isActive' : ''} onClick={() => setBurgerIsActive(!burgerIsActive)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
            </div>

        </nav>
    )
}

export default NavigationBar