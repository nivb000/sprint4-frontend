import { Routes, Route, useLocation } from 'react-router-dom'
import { AppHeader } from './cmps/app-header'
import { HomePage } from './views/home-page'
import { StayDetails } from './views/stay-details'
import { HostDashboard } from './views/host-dashboard'
import { Trips } from "./views/trips"
import { Footer } from "./cmps/footer"
import { BottomNav } from './cmps/bottomNav'


export const RootCmp = () => {

  const loc = useLocation()

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
      {loc.pathname === '/' && <Footer />}
    </div>
  )
}