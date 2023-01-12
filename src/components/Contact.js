import React, { useContext } from "react";
import MyContext from "../context";

const Contact = () => {
  const { dark } = useContext(MyContext);
  return (
    <div className={`contai ${dark ? "dark-mode" : "white-mode"}`}>
      <div className="pt-5 text-center">
        <h1>This is my Contact page</h1>
      </div>
    </div>
  );
};

export default Contact;
