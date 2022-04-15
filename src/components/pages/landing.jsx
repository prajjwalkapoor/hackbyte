import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";
import { motion } from "framer-motion"
import Header from "../header";

export default function Landing() {
  const [loading, setLoading] = useState(true);
  const [isTrue, setIsTrue] = useState(false);
  // const getData = () => {
  //   db.collection("test")
  //     .doc("mytestdoc")
  //     .onSnapshot((docsnap) => {
  //       if (docsnap.exists) {
  //         console.log(docsnap.data());
  //         setLoading(false);
  //       }
  //     });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div>
      <Header />
      {/* <motion.div className="one"
          onClick={() => setIsTrue(!isTrue)}
          style={{
            borderRadius: 16
          }}
          animate={{
            x: isTrue ? '80vw' : 0,
            rotate: isTrue ? 180 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 80,
          }}
        >
        </motion.div>  */}
    </div >
  );
}
