import WifiIcon from '@mui/icons-material/Wifi'
import AcUnitIcon from '@mui/icons-material/AcUnit'
import SoupKitchenOutlinedIcon from '@mui/icons-material/SoupKitchenOutlined'
import ThermostatIcon from '@mui/icons-material/Thermostat'
import ChildCareIcon from '@mui/icons-material/ChildCare'
import RadarIcon from '@mui/icons-material/Radar'
import AllOutIcon from '@mui/icons-material/AllOut'
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher'
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage'
import SoapIcon from '@mui/icons-material/Soap'
import LocalConvenienceStoreIcon from '@mui/icons-material/LocalConvenienceStore'
import CheckroomIcon from '@mui/icons-material/Checkroom'
import AirIcon from '@mui/icons-material/Air'
import IronIcon from '@mui/icons-material/Iron'
import LaptopIcon from '@mui/icons-material/Laptop'
import CheckIcon from '@mui/icons-material/Check'
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly'
import LockIcon from '@mui/icons-material/Lock'
import PetsIcon from '@mui/icons-material/Pets'
import DeskIcon from '@mui/icons-material/Desk'
import CribIcon from '@mui/icons-material/Crib'
import BeachAccessIcon from '@mui/icons-material/BeachAccess'
import BathtubIcon from '@mui/icons-material/Bathtub'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import PoolIcon from '@mui/icons-material/Pool'
import TvIcon from '@mui/icons-material/Tv'
import CableIcon from '@mui/icons-material/Cable'
import LanIcon from '@mui/icons-material/Lan'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms'
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'
import ElevatorIcon from '@mui/icons-material/Elevator'
import DialpadIcon from '@mui/icons-material/Dialpad'
import CloseIcon from '@mui/icons-material/Close'
import { Backdrop } from '@mui/material'

import { useState } from 'react'


export const StayAmenities = ({ amenities }) => {

  const [amenitiesModalIsOpen, setAmenitiesModalIsOpen] = useState(false)

  const amenitiesIcons = [
    { title: "Wifi", icon: <WifiIcon sx={{ color: '#222222' }} /> },
    { title: "Air conditioning", icon: <AcUnitIcon sx={{ color: '#222222' }} /> },
    { title: "Kitchen", icon: <SoupKitchenOutlinedIcon sx={{ color: '#222222' }} /> },
    { title: "Heating", icon: <ThermostatIcon sx={{ color: '#222222' }} /> },
    { title: "Family/kid friendly", icon: <ChildCareIcon sx={{ color: '#222222' }} /> },
    { title: "Smoke detector", icon: <RadarIcon sx={{ color: '#222222' }} /> },
    { title: "Carbon monoxide detector", icon: <AllOutIcon sx={{ color: '#222222' }} /> },
    { title: "Fire extinguisher", icon: <FireExtinguisherIcon sx={{ color: '#222222' }} /> },
    { title: "Essentials", icon: <EmojiFoodBeverageIcon sx={{ color: '#222222' }} /> },
    { title: "Shampoo", icon: <SoapIcon sx={{ color: '#222222' }} /> },
    { title: "24-hour check-in", icon: <LocalConvenienceStoreIcon sx={{ color: '#222222' }} /> },
    { title: "Hangers", icon: <CheckroomIcon sx={{ color: '#222222' }} /> },
    { title: "Hair dryer", icon: <AirIcon sx={{ color: '#222222' }} /> },
    { title: "Iron", icon: <IronIcon sx={{ color: '#222222' }} /> },
    { title: "Laptop friendly workspace", icon: <LaptopIcon sx={{ color: '#222222' }} /> },
    { title: "translation missing: en.hosting_amenity_49", icon: <CheckIcon sx={{ color: '#222222' }} /> },
    { title: "Self check-in", icon: <MobileFriendlyIcon sx={{ color: '#222222' }} /> },
    { title: "Lockbox", icon: <LockIcon sx={{ color: '#222222' }} /> },
    { title: "Pets allowed", icon: <PetsIcon sx={{ color: '#222222' }} /> },
    { title: "Dedicated workspace", icon: <DeskIcon sx={{ color: '#222222' }} /> },
    { title: "Crib", icon: <CribIcon sx={{ color: '#222222' }} /> },
    { title: "Beach view", icon: <BeachAccessIcon sx={{ color: '#222222' }} /> },
    { title: "Bathtub", icon: <BathtubIcon sx={{ color: '#222222' }} /> },
    { title: "Washer", icon: <LocalLaundryServiceIcon sx={{ color: '#222222' }} /> },
    { title: "Pool", icon: <PoolIcon sx={{ color: '#222222' }} /> },
    { title: "TV", icon: <TvIcon sx={{ color: '#222222' }} /> },
    { title: "Cable TV", icon: <CableIcon sx={{ color: '#222222' }} /> },
    { title: "Internet", icon: <LanIcon sx={{ color: '#222222' }} /> },
    { title: "Free street parking", icon: <LocalParkingIcon sx={{ color: '#222222' }} /> },
    { title: "Free parking on premises", icon: <LocalParkingIcon sx={{ color: '#222222' }} /> },
    { title: "Smoking allowed", icon: <SmokingRoomsIcon sx={{ color: '#222222' }} /> },
    { title: "Gym", icon: <FitnessCenterIcon sx={{ color: '#222222' }} /> },
    { title: "Elevator", icon: <ElevatorIcon sx={{ color: '#222222' }} /> },
    { title: "Buzzer/wireless intercom", icon: <DialpadIcon sx={{ color: '#222222' }} /> },
  ]

  const matchIcon = (amenity, icons) => {
    const obj = icons.find((obj) => obj.title === amenity)
    if (!obj) return <CheckIcon sx={{ color: '$clr-black' }} />
    return obj.icon
  }

  const handleOnClick = (func) => {
    func()
  }

  const setAmenitiesModal = () => setAmenitiesModalIsOpen(prev => !prev)

  return (
    <section className="stay-amenities" id='amenities'>
      <h1>What this place offers</h1>
      <ul className="amenities-list">
        {amenities.slice(0, 10).map(amenity => {
          return (
            <li className='amenities-item' key={amenity}>
              {matchIcon(amenity, amenitiesIcons)}
              {amenity}
            </li>
          )
        })
        }
      </ul>
      <button className="show-all" onClick={() => handleOnClick(setAmenitiesModal)}>{`Show all ${amenities.length} amenities`}</button>
      <Backdrop
        sx={{ color: '#222', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={amenitiesModalIsOpen}>
        <div className="stay-amenities-modal">
          <div className="modal-close-btn-container">
            <button className="modal-close-btn" onClick={setAmenitiesModal}><CloseIcon /></button>
          </div>
          <ul className="amenities-list-modal">
            <h1>What this place offers</h1>
            {amenities.map((amenity, idx) => {
              return (
                <li className='amenities-item' key={idx}>
                  {matchIcon(amenity, amenitiesIcons)}
                  {amenity}
                </li>
              )
            })
            }
          </ul>
        </div>
      </Backdrop>
    </section>
  )
}