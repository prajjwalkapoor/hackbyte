import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { ContextProvider } from "./context/context";
import { variants } from './context/context'

import LostItem from "../lostFoundItem";
import { motion } from "framer-motion";
export default function Landing() {
  document.title = "Lost and Found - Home";
  const [loading, setLoading] = useState(true);
  const [dataa, setDataa] = useState([]);
  const collectionRef = collection(db, 'lostfound')
  const getData = async () => {
    const data = await getDocs(collectionRef)
    setDataa(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    setLoading(false)

  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <motion.div
      variants={variants} // Pass the variant object into Framer Motion 
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear' }}
    >
      <section className="homeImage"></section>
      <section className="feedSection">
        <h2>Lost and found feed</h2>
        <div className="feeds">
          {loading && <div><img src="https://firebasestorage.googleapis.com/v0/b/hackbyte-7a18b.appspot.com/o/images%2Floading.svg?alt=media&token=cd9437dd-efd5-49b3-bc51-0a0bf2a59aeb" /></div>}
          {!loading && dataa.map((item) => {
            return <LostItem item={item} />
          })}
        </div>

      </section>
    </motion.div >
  );

}
//  <motion.div className="one"
//           onClick={() => setIsTrue(!isTrue)}
//           style={{
//             borderRadius: 16
//           }}
//           animate={{
//             x: isTrue ? '80vw' : 0,
//             rotate: isTrue ? 180 : 0,
//           }}
//           transition={{
//             type: 'spring',
//             stiffness: 80,
//           }}
//         >
//         </motion.div>  