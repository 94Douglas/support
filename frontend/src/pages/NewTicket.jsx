import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { createTicket, reset } from '../features/Tickets/ticketSlice'
import Spinner from '../components/Spinner'
import BackButton from '../components/BackButton'

function NewTicket() {
  const { user } = useSelector((state) => state.auth);
  const { isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.tickets
  )

  
  const [name] = useState(user.name);
  const [email] = useState(user.email);
  const [product, setProduct] = useState("Gata");
  const [description, setDescription] = useState("");
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      dispatch(reset());
      navigate("/tickets");
    }
    dispatch(reset());
  }, [dispatch, isError, isSuccess, navigate, message]);

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createTicket({ product, description }));
  };

  if(isLoading) {
    return <Spinner />;
  }

  return (
    <>
    <BackButton url="/" />
      <section className="heading">
        <h1>Skapa Ny Felanmälan</h1>
        <p>Vänligen fyll i nedanstående formulär.</p>
      </section>

      <section className="form">
        <div className="form-group">
          <label htmlFor="name">Anmälarens Namn</label>
          <input type="text" className="form-control" value={name} disabled />
        </div>
        <div className="form-group">
          <label htmlFor="email">Anmälarens Email</label>
          <input type="text" className="form-control" value={email} disabled />
        </div>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="product">Anledning</label>
            <select
              name="product"
              id="product"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            >
              <option value="Gata">Gata</option>
              <option value="Hushåll">Stugan</option>
              <option value="Granne">Granne</option>
              <option value="Övrigt">Övrigt</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="description">Beskrivning</label>
            <textarea
              name="description"
              id="description"
              className="form-control"
              placeholder="Beskrivning..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Skicka</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default NewTicket;
