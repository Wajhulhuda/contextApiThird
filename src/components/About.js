import React, { useContext } from "react";
import MyContext from "../context";

const About = () => {
  const { dark } = useContext(MyContext);
  return (
    <div className={`contai ${dark ? "dark-mode" : "white-mode"}`}>
      <div className="pt-5 text-center">
        <h1>This is my About page</h1>
      </div>
    </div>
  );
};

export default About;
