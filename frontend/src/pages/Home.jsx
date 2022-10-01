import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";
import ImageSlideShow from "../components/AnimationImg/AnimationImgComp.jsx";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>Hem</h1>
        <p>Välkommen till Olovs Hages Samfällighet.</p>
      </section>
      <div className="imageSlider">
        <ImageSlideShow />
      </div>
    </>
  );
}

export default Home;
