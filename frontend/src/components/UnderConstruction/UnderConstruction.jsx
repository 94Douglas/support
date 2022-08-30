import React from 'react'
import { Link } from 'react-router-dom'

function UnderConstruction() {
  return (
    <div>
        <section className='heading'>
            <h3>Denna sidan är under uppbyggnad... Tryck <Link to={'/'}>HÄR</Link> För att komma vidare! </h3>
        </section>
    </div>
  )
}

export default UnderConstruction