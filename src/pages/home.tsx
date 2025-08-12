import React, { useEffect, useState } from "react";

const Home = () => {
  const [s, setS] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setS({
        name: "nabin",
      });
    }, 2000);
  }, []);

  return <div>home {s}</div>;
};

export default Home;
