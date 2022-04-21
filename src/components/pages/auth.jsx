import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import React, { useContext, useEffect } from 'react'
import { auth, provider, signInWithGoogle } from '../../config/firebase'
import { variants } from './context/context';
import { motion } from 'framer-motion';
import { ContextProvider } from './context/context';
import ProfilePage from './profilePage';
export default function Auth() {
    document.title = 'Login with your account';
    const { isLoggedIn, setIsLoggedIn } = useContext(ContextProvider)
    console.log(JSON.parse(localStorage.getItem("user")))
    const signInWithGoogle = (auth, provider) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                localStorage.setItem("user", JSON.stringify(result.user));
                localStorage.setItem("isLoggedIn", true);
                window.location.reload()
            })
            .catch((error) => {
                console.log(error);
            });
    };
    // onAuthStateChanged(auth, (user) => {
    //     if (user) {
    //         setIsLoggedIn(true)
    //         localStorage.setItem('isLoggedIn', true)
    //     } else {
    //         setIsLoggedIn(false)
    //         localStorage.setItem('isLoggedIn', false)
    //     }
    // });
    if (!isLoggedIn) {
        return (
            <motion.div
                variants={{
                    hidden: { opacity: 0, x: 0, y: 0 },
                    enter: { opacity: 1, x: 0, y: 0 },
                    exit: { opacity: 0, x: 0, y: -100 },
                }} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }}
                className='authContainer'>
                <div className="innerContainer">
                    <h1>Login or Signup to get Started</h1>
                    <div className='authHeader'>
                        <button onClick={() => signInWithGoogle(auth, provider)} className="login-with-google-btn">Sign in with google</button>
                    </div>
                </div>

            </motion.div>
        )
    } else return (<ProfilePage />)
}
