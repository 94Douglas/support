import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTickets, reset } from "../features/Tickets/ticketSlice";
import Spinner from "../components/Spinner";
import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'

function Tickets() {
    const { tickets, isLoading, isSuccess } = useSelector(
        (state) => state.tickets
      )

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if(isSuccess) {
                dispatch(reset())
            }
        }
    }, [dispatch, isSuccess])

    useEffect(() => {
        dispatch(getTickets())
    }, [dispatch])

    if(isLoading) {
        return <Spinner />
    }

  return (
  <>
    <BackButton url="/ticket-first-page" />
    <h1>Mina Ärenden</h1>
    <div className="tickets">
        <div className="ticket-headings">
            <div>Datum</div>
            <div>Anmälare</div>
            <div>Status</div>
            <div></div>
        </div>
        {tickets.map((ticket) => {
            return <TicketItem key={ticket._id} ticket={ticket} />
        })}
    </div>
  </>)
}

export default Tickets;
