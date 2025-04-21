import React, { useEffect, useState } from "react";

const Exercise2b = () => {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  //   useEffect(() => {
  //     console.log("Home has re-rendered");
  //   }, [timer]);
  useEffect(() => {
    return console.log("Home has re-rendered");
  });
  return (
    <div>
      <h2>Time on page:{timer}</h2>
    </div>
  );
};

export default Exercise2b;
