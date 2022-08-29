import React from 'react'
import { Link } from 'react-router-dom'

function UnderConstruction() {
  return (
    <div>
        <section className='heading'>
            <h3>Denna sidan är under uppbyggnad... Tryck <Link to={'/admin-panel'}>HÄR</Link> För att gå tillbaka! </h3>
        </section>
    </div>
  )
}

export default UnderConstruction