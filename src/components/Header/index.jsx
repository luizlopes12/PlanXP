import React,{ useState } from 'react'
import MenuStyle from './styled'
import logo from '../../img/logo.png'
import arrowRight from '../../img/arrow.png'
import { Link } from 'react-router-dom'



const Menu = () => {
    const [toggled, setToggled] = useState(true);
    const navOpen = () => {
    setToggled(!toggled);
    };
  return (
    <MenuStyle toggled={toggled}>
        <aside>
        <img className='logo' src={logo} alt="Logo Plan XP" />
      <div className='navbutton' onClick={navOpen}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>/Quem somos</Link>
                    <span>01.</span>
                </li>
                <li>
                    <Link to='/'>/o que fazemos</Link>
                    <span>02.</span>
                </li>
                <li>
                    <Link to='/'>/plan news</Link>
                    <span>03.</span>
                </li>
                <li>
                    <Link to='/'>/nossos clientes</Link>
                    <span>04.</span>
                </li>
                <li>
                    <Link to='/'>/contato</Link>
                    <span>05.</span>
                </li>
            </ul>
            
            <div className='bottomLink'>
                <p>
                <Link to='/'>Que tal inovar com a gente?</Link>
                </p>
            <span> ;) </span>
            <img src={arrowRight} alt="Seta" />

            </div>
        </nav>
        </aside>
    </MenuStyle>
  )
}

export default Menu