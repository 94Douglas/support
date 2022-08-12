import React from 'react'
import './AdminOption.css'
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaTicketAlt, FaQuestionCircle } from "react-icons/fa";
import { RiInformationFill } from "react-icons/ri";
import { ImUsers } from "react-icons/im";
import "bootstrap/dist/css/bootstrap.min.css";


function AdminOption() {
    return (
        <div className="border border-dark">
            <div className='d-inline-flex p-2 bd-highlight createUserTab'>
                <ul>
                    <FaUser />
                    <li>
                        <Link to="/register">
                            Skapa Användare
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='d-inline-flex p-2 bd-highlight createUserTab'>
                <ul>
                    <FaTicketAlt />
                    <li>
                        <Link to="/view-all-tickets">
                            Se Felanmälningar
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='d-inline-flex p-2 bd-highlight createUserTab'>
                <ul>
                    <RiInformationFill />
                    <li>
                        <Link to="/register">
                            Uppdatera Information
                        </Link>
                    </li>
                </ul>
            </div>

            <div className='d-inline-flex p-2 bd-highlight createUserTab'>
                <ul>
                    <ImUsers />
                    <li>
                        <Link to="/register">
                            Se Användare
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AdminOption