import Painting1 from "./assets/IMG-1112.jpg";
import Painting2 from "./assets/IMG-1127.jpg";
import Painting3 from "./assets/IMG-1130.jpg";
import Painting4 from "./assets/IMG-1138.jpg";
import Painting5 from "./assets/IMG-1156.jpg";
import Painting6 from "./assets/IMG-1180.jpg";
import Painting7 from "./assets/IMG-1184.jpg";
import Painting8 from "./assets/IMG-1210.jpg";
import Painting9 from "./assets/IMG-1214.jpg";



import "./staticCard.css"; 
import { useState } from "react";

const StaticCard = ({ index }) => {
  let paintingsArray = [
    Painting1,
    Painting2,
    Painting3,
    Painting4,
    Painting5,
    Painting6,
    Painting7,
    Painting8,
    Painting9
  ];
  const [image, setImage] = useState(paintingsArray[index]);

  return (
    <div className="centered column">
      <img src={image} alt={"mom's painting"} className="static-card"></img>
      <h4 className="description-text">Description and dimensions of painting</h4>
    </div>
  );
};

export default StaticCard;
