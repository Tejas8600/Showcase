import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: [" Software Development", "Junior CyberSecurity Analyst"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 30,
        }}
      />
    </div>
  );
};

export default Type;
