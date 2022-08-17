import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";


const PageBorder = ({name, email, phone, role}) => {
    return (
      <div className="border">
        <div >
            <h2>{name}</h2>
            <h2>{email}</h2>
            <h2>{phone}</h2>
            <h2>{role}</h2>
        </div>
      </div>
    )
  }

export default PageBorder