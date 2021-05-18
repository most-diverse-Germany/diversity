import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const MovingBanner = (props) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 4000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <div key={key}>
      <animated.h2 style={scrolling}>{props.text}</animated.h2>);
    </div>
  );
};

export default MovingBanner;