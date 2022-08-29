import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getTicket, reset, closeTicket } from "../features/Tickets/ticketSlice";
import {
  getNotes,
  createNote,
  reset as notesReset,
} from "../features/notes/noteSlice";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import NoteItem from "../components/NoteItem";

const customStyles = {
  content: {
    width: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
  },
};

Modal.setAppElement("#root");

function Ticket() {
  const { user } = useSelector((state) => state.auth);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [noteText, setNoteText] = useState("");

  const { ticket, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.tickets
  );

  const { notes, isLoading: notesIsLoading } = useSelector(
    (state) => state.notes
  );

  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { ticketId } = useParams();

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getTicket(ticketId));
    dispatch(getNotes(ticketId));
    // eslint-disable-next-line
  }, [isError, message, ticketId]);

  // Close Ticket
  const onTicketClose = () => {
    dispatch(closeTicket(ticketId));
    toast.success("Ticket Closed");
    navigate("/tickets");
  };

  // Create Note submit
  const onNoteSubmit = (e) => {
    e.preventDefault();
    dispatch(createNote({ noteText, ticketId }));
    closeModal();
  };

  // Open/Close Modal
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  if (isLoading || notesIsLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h3>Something went wrong</h3>;
  }

  return (
    <div className="ticket-page">
      <header className="ticket-header">
        <BackButton url="/tickets" />
        <h2>
          Ticket ID: {ticket._id}
          <span className={`status status-${ticket.status}`}>
            {ticket.status}
          </span>
        </h2>
        <h3>Datum: {new Date(ticket.createdAt).toLocaleString("eu")}</h3>
        <h3>Anledning: {ticket.product}</h3>
        <hr />
        <div className="ticket-desc">
          <h3>Beskrivning</h3>
          <p>{ticket.description}</p>
        </div>
        <h2>Anteckning</h2>
      </header>

      {ticket.status !== "Closed" && (
        <button onClick={openModal} className="btn">
          <FaPlus /> Lägg Till Anteckning
        </button>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Add Note"
      >
        <h2>Lägg Till Anteckning</h2>
        <button className="btn-close" onClick={closeModal}>
          X
        </button>
        <form onSubmit={onNoteSubmit}>
          <div className="form-group">
            <textarea
              name="noteText"
              id="noteText"
              className="form-control"
              placeholder="Skriv en anteckning"
              value={noteText}
              onChange={(e) => setNoteText(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            {user ? (
              <button className="btn" type="submit">
                Skicka
              </button>
            ) : null}
          </div>
        </form>
      </Modal>

      {Array.isArray(notes)
        ? notes.map((note) => <NoteItem key={note._id} note={note} />)
        : null}

      {ticket.status !== "Closed" && (
        <button onClick={onTicketClose} className="btn btn-block btn-danger">
          Avsluta Ärende
        </button>
      )}
    </div>
  );
}

export default Ticket;