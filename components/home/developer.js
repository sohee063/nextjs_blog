import React from "react";

import Lottie from "react-lottie-player";

import lottieJson from "/public/developer.json";

export default function Developer() {
  return <Lottie loop animationData={lottieJson} play />;
}
