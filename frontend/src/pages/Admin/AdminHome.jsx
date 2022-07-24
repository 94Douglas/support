import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function AdminHome() {
  return (
    <>
      <section className="heading">
        <h1>Felanmälan</h1>
        <p>Välj något av alternativen nedan</p>
      </section>

      {/* <Link to="/new-ticket" className="btn btn-reverse btn-block">
        <FaQuestionCircle /> Skapa Felanmälan
      </Link> */}

      <Link to="/tickets" className="btn btn-block">
        <FaTicketAlt /> Se Alla Felanmälningar
      </Link>
    </>
  );
}

export default AdminHome;
