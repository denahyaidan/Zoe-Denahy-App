import Monet1 from "./assets/Monet1.jpeg";
import Painting1 from "./assets/IMG-1112.jpg";
import Painting2 from "./assets/IMG-1127.jpg";
import Painting3 from "./assets/IMG-1130.jpg";
import Painting4 from "./assets/IMG-1138.jpg";
import Painting5 from "./assets/IMG-1156.jpg";
import Painting6 from "./assets/IMG-1180.jpg";
import Painting7 from "./assets/IMG-1184.jpg";
import Painting8 from "./assets/IMG-1210.jpg";

import "./card.css"; // Import the CSS file for styling
import { useState } from "react";
import { useEffect } from "react";

const Card = ({ index }) => {

  let paintingsArray = [
    Painting1,
    Painting2,
    Painting3,
    Painting4,
    Painting5,
    Painting6,
    Painting7,
    Painting8,
  ];
  const [image, setImage] = useState(paintingsArray[index]);

  return (
    <div className="outer-card">
      <div className="card">
        <div className="content">
          <img src={image} alt={"mom's painting"}></img>
        </div>
        <div className="hidden-content">
          <h1>Tidal Waves</h1>
          <p> Oil on Canvas, 37x25 </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
