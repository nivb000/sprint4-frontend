import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { stayService } from '../services/stay.service'

export const Trips = () => {

  useEffect(() => {
    loadStay()
    changeLayout('1270px')
    return () => {
      changeLayout('1760px')
    }
  }, [])
  
  const [stay, setStay] = useState()
  const params = useParams()
  
  
  const changeLayout = (value) => {
    document.documentElement.style.setProperty('--layoutWidth', value);
  }

  const loadStay = () => {
    const { stayId } = params
    stayService.getById(stayId)
    .then(stay => setStay(stay))
  }
  
  return <section className="trips">
    <h1>Trips</h1>
   { console.log('stay:', stay)}
   <h3>Where you've been</h3>
  </section>
}