import React from "react";
import animationData from "../../lotties/location.json";

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div>About</div>
      {/* <Lottie
        className="locationLottie"
        options={defaultOptions}
        isClickToPauseDisabled={true}
        height={100}
        width={100}
      /> */}
    </>
  );
}
