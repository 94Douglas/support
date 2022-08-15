import React from "react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { FaPlus } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  getTicket,
  reset,
  closeTicket,
  getTickets,
} from "../../../features/Tickets/ticketSlice";
import {
  getNotes,
  createNote,
  reset as notesReset,
} from "../../../features/notes/noteSlice";
import BackButton from "../../../components/BackButton";
import Spinner from "../../../components/Spinner";
import NoteItem from "../../../components/NoteItem";
import TicketItem from "../../../components/TicketItem";

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

function ViewAllTickets() {
  //   const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [noteText, setNoteText] = useState("");

  // const { ticket, isLoading, isSuccess, isError, message } = useSelector(
  //   (state) => state.tickets
  // );

  // const { notes, isLoading: notesIsLoading } = useSelector(
  //   (state) => state.notes
  // );

  // const params = useParams();
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const { ticketId } = useParams();

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }

  //   dispatch(getTickets(ticketId));
  //   // dispatch(getNotes(ticketId));
  //   // eslint-disable-next-line
  // }, [isError, message, ticketId]);

  // // Close Ticket
  // const onTicketClose = () => {
  //   dispatch(closeTicket(ticketId));
  //   toast.success("Ticket Closed");
  //   navigate("/tickets");
  // };

  // // Create Note submit
  // const onNoteSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(createNote({ noteText, ticketId }));
  //   closeModal();
  // };

  // // Open/Close Modal
  // const openModal = () => setModalIsOpen(true);
  // const closeModal = () => setModalIsOpen(false);

  const { tickets, isLoading, isSuccess } = useSelector(
    (state) => state.tickets
  );

  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset());
      }
    };
  }, [dispatch, isSuccess]);

  useEffect(() => {
    dispatch(getTickets());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <BackButton url="/ticket-first-page" />
      <h1>Alla Felanmälningar</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Datum</div>
          <div>Rubrik</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => {
          return <TicketItem key={ticket._id} ticket={ticket} />;
        })}
      </div>
    </>
  );
}

export default ViewAllTickets;
