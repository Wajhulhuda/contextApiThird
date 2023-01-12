import React, { useContext } from "react";
import MyContext from "./context";

const Home = () => {
  const { dark } = useContext(MyContext);
  document.body.style.backgroundColor = dark ? "dark-mode" : "white-mode";
  return (
    <div className={`contai ${dark ? "dark-mode" : "white-mode"}`}>
      <div className={`col-6 mx-auto pt-5 text-center`}>
        <p className="heading mt-5 text-center">
          Get the <span> right job </span>you deserve
        </p>

        <h5>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio.
        </h5>
        <div className="bg-light mt-5 d-flex p-3 form">
          <input
            type="text"
            placeholder="job title or keyword"
            className="job"
          />
          <input type="text" placeholder="Newyork, USA" />
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
