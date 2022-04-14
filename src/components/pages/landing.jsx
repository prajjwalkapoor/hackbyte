import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../config/firebase";

export default function Landing() {
  const [loading, setLoading] = useState(true);
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
      <Link to="/about">About</Link>
      {/* {loading && "Loading....."} */}
    </div>
  );
}
