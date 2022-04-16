import React, { useState, useContext } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, storage } from '../../config/firebase';
import { ContextProvider } from './context/context';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { motion } from 'framer-motion';
import { variants } from './context/context';
export default function AddFoundItem() {
    document.title = "Add Found Item";
    const [loading, setLoading] = useState(false)
    const { user, isLoggedIn } = useContext(ContextProvider);
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [number, setNumber] = useState("")
    const [email, setEmail] = useState("")
    const [imageInfo, setImageInfo] = useState()
    const formSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        const imageRef = ref(storage, `images/${title}`)
        await uploadBytes(imageRef, imageInfo).then(() => {
            console.log("uploaded");
        }).catch(err => {
            console.log(err);
        })
        const imageUrl = await getDownloadURL(imageRef)
        console.log(imageRef)
        const data = await { title, number, email, desc, userId: user.uid, imageUrl, type: 'FOUND ITEM' };
        const collectionRef = collection(db, 'lostfound')
        await addDoc(collectionRef, data).then(() => {
            setLoading(false)
            window.location.href = "/";
        })
    }
    console.log(imageInfo)
    if (isLoggedIn) {
        return (
            <motion.div
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }}
                className='addLostItemContainer' >
                <h2 >Provide details of your found item</h2>
                <form onSubmit={formSubmitHandler}>
                    <div className='item'>
                        <p className='label'>Title</p>
                        <input type="text" className='textInput' onChange={(e) => {
                            setTitle(e.target.value)
                        }} placeholder='Add Tile of Your Entry' required />
                    </div>
                    <div className='item'>
                        <p className='label'>Description</p>
                        <textarea type="text" required placeholder='Add a brief description about you lost item' onChange={(e) => {
                            setDesc(e.target.value)
                        }} />
                    </div>
                    <div className='item'>
                        <p className='label'>Mobile Number</p>
                        <input type="number" required className='textInput' placeholder='Add your mobile number' onChange={(e) => {
                            setNumber(e.target.value)
                        }} />
                    </div>
                    <div className='item'>
                        <p className='label'>Email</p>
                        <input type="email" required className='textInput' placeholder='Add your email address' onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    </div>
                    <div className='item'>
                        <input type="file" required onChange={(e) => {
                            setImageInfo(e.target.files[0])
                        }} />
                    </div>
                    <div className='item'>
                        <button className="btn-primary">Submit</button>
                    </div>
                </form>
            </motion.div>
        )
    }
    else if (loading) {
        return <div className="loadingContainer">
            <h2>Loading...</h2>
        </div>
    }
    else {
        return <div>Please Login to add an entry</div>
    }
}
