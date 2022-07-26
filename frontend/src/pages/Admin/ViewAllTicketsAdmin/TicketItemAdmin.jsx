import { Link } from "react-router-dom";

function TicketItemAdmin({ ticket }) {
  return (
    <div className="ticket">
      <div>{new Date(ticket.createdAt).toLocaleString("eu")}</div>
      <div> {ticket.product} </div>
      <div className={`status status-${ticket.status}`}>
        {ticket.status}
        </div>
      <Link to={`/ticket/${ticket._id}`} className="btn btn-reverse btn-sm">
        Visa
      </Link>
    </div>
  );
}

export default TicketItemAdmin;
