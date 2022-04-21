import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ContextProvider } from './context/context'
import { motion } from 'framer-motion'
import { variants } from './context/context'
export default function ProfilePage() {
    const { user } = useContext(ContextProvider)
    document.title = `Profile Page - ${user.displayName}`
    console.log(user.photoURL)
    return (
        <motion.div
            variants={variants} // Pass the variant object into Framer Motion 
            initial="hidden" // Set the initial state to variants.hidden
            animate="enter" // Animated state to variants.enter
            exit="exit" // Exit state (used later) to variants.exit
            transition={{ type: 'linear' }}
            className='profileContainer'>
            <div className="profileInner">
                <img src={user.photoURL} className="bgImage" />
            </div>
            <div className="profileDetails">
                <h2 className="userName">{user.displayName}</h2>
                <p>{user.email}</p>
                <div className="profileBtn">
                    <button className='btn-secondary' onClick={() => {
                        localStorage.removeItem('user');
                        localStorage.removeItem('isLoggedIn');
                        window.location.href = "/";
                    }} >Logout</button>
                </div>
            </div>
        </motion.div>
    )
}
