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
import TicketItemAdmin from "./TicketItemAdmin";

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
      <BackButton url="/admin-panel" />
      <h1>Alla Felanmälningar</h1>
      <div className="tickets">
        <div className="ticket-headings">
          <div>Datum</div>
          <div>Rubrik</div>
          <div>Status</div>
          <div></div>
        </div>
        {tickets.map((ticket) => {
          return <TicketItemAdmin key={ticket._id} ticket={ticket} />;
        })}
      </div>
    </>
  );
}

export default ViewAllTickets;
