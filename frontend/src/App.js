
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AdminPrivateRoute from './components/AdminPrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';
import Tickets from './pages/Tickets';
import Ticket from './pages/Ticket';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import AnnualReport from './pages/Annual-Report/AnnualReport';
import TicketFirstPage from './pages/TicketFirstPage';
import AdminHome from './pages/Admin/AdminHome';
import ViewAllTickets from './pages/Admin/ViewAllTicketsAdmin/ViewAllTickets';

function App() {
  return <>
    <Router>
      <div className='container'>
        <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/contact-us' element={<ContactUs />} />
            <Route path='/annual-report' element={<AnnualReport />} />
            <Route path='/login' element={<Login />} />
            {/* <Route path='/register' element={<Register />} /> */}

            {/* Private Route below */}
            <Route path='/new-ticket' element={<PrivateRoute />}>
              <Route path='/new-ticket' element={<NewTicket />} />
            </Route>

            <Route path='/ticket-first-page' element={<PrivateRoute />}>
              <Route path='/ticket-first-page' element={<TicketFirstPage />} />
            </Route>

            <Route path='/tickets' element={<PrivateRoute />}>
              <Route path='/tickets' element={<Tickets />} />
            </Route>

            <Route path='/ticket/:ticketId' element={<PrivateRoute />}>
              <Route path='/ticket/:ticketId' element={<Ticket />} />
            </Route>

            <Route path='/admin-panel' element={<AdminPrivateRoute />}>
              <Route path='/admin-panel' element={<AdminHome />} />
            </Route>

            <Route path='/register' element={<AdminPrivateRoute />}>
              <Route path='/register' element={<Register />} />
            </Route>

            <Route path='/view-all-tickets' element={<AdminPrivateRoute />}>
              <Route path='/view-all-tickets' element={<ViewAllTickets />} />
            </Route>
          </Routes>
      </div>
    </Router>
    <ToastContainer />
  </>;
}

export default App;
