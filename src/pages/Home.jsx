import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <ul>
        <li>
          <button className="Loadbtn"><Link to="/homepagedarkversion">Load Site</Link></button>
        </li>
      </ul>
    </div>
  );
};
export default Home;
