import { collection, getDocs, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../config/firebase'
import { motion } from 'framer-motion'
import { variants } from './context/context'
export default function SingleItem() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState({})
    const params = useParams()
    let collectionRef = collection(db, "lostfound")
    const fetchData = async () => {
        const q = await query(collectionRef, where("title", "==", params.name))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setData(doc.data())
            setLoading(false)
        });
    }
    useEffect(() => {
        fetchData()
    }, [])
    if (!loading) {
        return (
            <motion.div
                variants={variants} // Pass the variant object into Framer Motion 
                initial="hidden" // Set the initial state to variants.hidden
                animate="enter" // Animated state to variants.enter
                exit="exit" // Exit state (used later) to variants.exit
                transition={{ type: 'linear' }}
                className='singleItemContainer'>
                <div className="innerContainer">
                    <h2>{data.title}</h2>
                    <div className="image">
                        <img src={data.imageUrl} alt="" />
                    </div>
                    <span>{data.type}</span>
                    <p>{data.desc}</p>
                    <h3>If found contact: </h3>
                    <p><b>Mobile Nuxmber: </b> {data.number}</p>
                    <p><b>Email: </b> {data.email}</p>

                </div>
            </motion.div>

        )
    } else {
        return (
            <div className='loadingContainer'>
                <img src="https://firebasestorage.googleapis.com/v0/b/hackbyte-7a18b.appspot.com/o/images%2Floading.svg?alt=media&token=cd9437dd-efd5-49b3-bc51-0a0bf2a59aeb" />
            </div>
        )
    }
}
