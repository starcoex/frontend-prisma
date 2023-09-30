import React from "react";
import { useSearchParams } from "react-router-dom";

function Home() {
  const [readSearchParams, setReadParams] = useSearchParams();
  // setTimeout(() => {
  //   setReadParams({
  //     day: "today",
  //     tomorrow: "1234",
  //   });
  // }, 3000);
  return <div className="bg-red-400">Home</div>;
}

export default Home;
