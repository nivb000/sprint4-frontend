import { Routes, Route, useLocation } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './views/home-page'
import { StayDetails } from './views/stay-details'
import { HostDashboard } from './views/host-dashboard'
import { Trips } from "./views/trips"
import { Footer } from "./cmps/footer"
import { BottomNav } from './cmps/bottomNav'
import { loadStays, setFilterState } from "./store/stay.action"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { socketService } from './services/socket.service'
const queryString = require('query-string');

export const RootCmp = () => {

  const dispatch = useDispatch()
  const location = useLocation()

  useEffect(() => {
    socketService.on('order-status-updated',(order) => console.log('sockektetetet', order))
  }, [])
  

  useEffect(() => {
    setFilter()
    dispatch(loadStays())
}, [location.search])

  const setFilter = () => {
    const filter = queryString.parse(location.search)
    dispatch(setFilterState(filter))
}



  return (
    <div className="App">
      <AppHeader />
      
      <div className='overlay'></div>
      <main className='main-layout'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/stay/:stayId' element={<StayDetails />} />
          <Route path='/host/:userId' element={<HostDashboard />} />
          <Route path='/trips/:userId' element={<Trips />} />
        </Routes>
      </main>
      <BottomNav />
      {location.pathname === '/' && <Footer />}
    </div>
  )
}