import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Trips = () => {

  useEffect(() => {
    changeLayout('1270px')
    return () => {
      changeLayout('1760px')
    }
  }, [])
  
  const changeLayout = (value) => {
    document.documentElement.style.setProperty('--layoutWidth', value);
  }

  return <section className="trips">
    <h1>Trips</h1>
   <h3>Where you've been</h3>
   <div className="trips-grid-container">

   </div>
  </section>
}