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
import PoolIcon from '@mui/icons-material/Pool';

export const StayAmenities = ({ amenities }) => {

  const amenitiesIcons = [
    { title: "Wifi", icon: <WifiIcon /> },
    { title: "Air conditioning", icon: <AcUnitIcon /> },
    { title: "Kitchen", icon: <SoupKitchenOutlinedIcon /> },
    { title: "Heating", icon: <ThermostatIcon /> },
    { title: "Family/kid friendly", icon: <ChildCareIcon /> },
    { title: "Smoke detector", icon: <RadarIcon /> },
    { title: "Carbon monoxide detector", icon: <AllOutIcon /> },
    { title: "Fire extinguisher", icon: <FireExtinguisherIcon /> },
    { title: "Essentials", icon: <EmojiFoodBeverageIcon /> },
    { title: "Shampoo", icon: <SoapIcon /> },
    { title: "24-hour check-in", icon: <LocalConvenienceStoreIcon /> },
    { title: "Hangers", icon: <CheckroomIcon /> },
    { title: "Hair dryer", icon: <AirIcon /> },
    { title: "Iron", icon: <IronIcon /> },
    { title: "Laptop friendly workspace", icon: <LaptopIcon /> },
    { title: "translation missing: en.hosting_amenity_49", icon: <CheckIcon /> },
    { title: "Self check-in", icon: <MobileFriendlyIcon /> },
    { title: "Lockbox", icon: <LockIcon /> },
    { title: "Pets allowed", icon: <PetsIcon /> },
    { title: "Dedicated workspace", icon: <DeskIcon /> },
    { title: "Crib", icon: <CribIcon /> },
    { title: "Beach view", icon: <BeachAccessIcon /> },
    { title: "Bathtub", icon: <BathtubIcon /> },
    { title: "Washer", icon: <LocalLaundryServiceIcon /> },
    { title: "Pool", icon: <PoolIcon /> },

    
  ]

  const matchIcon = (amenity, icons) => {
    const obj = icons.find((obj) => obj.title === amenity)
    if (!obj) return <CheckIcon />
    return obj.icon
  }

  return (
    <section className="stay-amenities">
      <h1>What this place offers</h1>
      <ul className="amenities-list">
        {amenities.slice(0, 10).map(amenity => {
          return (
            <li key={amenity}>
              {matchIcon(amenity, amenitiesIcons)}
              {amenity}
            </li>
          )
        })
        }
      </ul>
      <button className="show-all">{`Show all ${amenities.length} amenities`}</button>
    </section>
  )
}