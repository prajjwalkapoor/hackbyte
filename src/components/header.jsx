import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from './pages/context/context'

export default function Header() {
    const { user, isLoggedIn } = useContext(ContextProvider)
    console.log(user)

    return (
        <div className='headerContainer'>
            <Link to="/"><div id="logo">
                <img src="https://res.cloudinary.com/prajjwalcdn/image/upload/v1650025578/logo_uimxxt.png" alt="LostNFoundLogo" />
            </div></Link>
            <div className='navbar'>
                <div className="navLinksContainer">
                    <Link to="/" className='navLinks'>Home</Link>
                    <a className='navLinks' href="">About</a>
                    <a className='navLinks'>Contact </a>
                </div>
                {!isLoggedIn ? <Link to='/auth'><button className='button'>Sign Up</button></Link> : <div className="loggedInBtn">
                    <Link to='AddFoundItem'><button className='button'>Add Found Item</button></Link>
                    <Link to='AddLostItem'><button className='button'>Add Lost Item</button></Link>
                    <Link to="/profile"><img className="avatar" src={user.photoURL}></img></Link></div>}
            </div>
        </div>
    )
}
