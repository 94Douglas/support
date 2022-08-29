
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import AdminPrivateRoute from './components/AdminComps/AdminPrivateRoute';
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
import EditContactPerson from './components/EditContactPerson';
import ViewAllTickets from './pages/Admin/ViewAllTicketsAdmin/ViewAllTickets';
import ContactPersonCRUDPage from './components/AdminComps/ContactPersonCRUD';
import Footer from './components/Footer';
import CreatedBy from './pages/Creator/CreatedBy';
import ViewAllUsers from './components/AdminComps/ViewAllUsers/ViewAllUsersAdmin'

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
            <Route path='/createdBy' element={<CreatedBy />} />
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

            <Route path='/contact-person-crud' element={<AdminPrivateRoute />}>
              <Route path='/contact-person-crud' element={<ContactPersonCRUDPage />} />
            </Route>

            <Route path='/edit-contact-name' element={<AdminPrivateRoute />}>
              <Route path='/edit-contact-name' element={<EditContactPerson />} />
            </Route>

            <Route path='/view-all-users' element={<AdminPrivateRoute />}>
              <Route path='/view-all-users' element={<ViewAllUsers />} />
            </Route>

          </Routes>
          <Footer />
      </div>
    </Router>
    <ToastContainer />
  </>;
}

export default App;
