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

export const StayAmenities = ({ amenities }) => {
  const icons = [<WifiIcon />, <AcUnitIcon />, <SoupKitchenOutlinedIcon />, <ThermostatIcon />, <ChildCareIcon />, <RadarIcon />, <AllOutIcon />, <FireExtinguisherIcon />, <EmojiFoodBeverageIcon />, <SoapIcon />,<LocalConvenienceStoreIcon />,<CheckroomIcon />,<AirIcon />, <IronIcon />,<LaptopIcon />,<CheckIcon />,<MobileFriendlyIcon />, <LockIcon />     ]
  const amenitiesToDispaly = ["Wifi","Air conditioning","Kitchen","Heating","Family/kid friendly","Smoke detector","Carbon monoxide detector","Fire extinguisher","Essentials","Shampoo","24-hour check-in","Hangers","Hair dryer","Iron","Laptop friendly workspace","translation missing: en.hosting_amenity_49","Self check-in","Lockbox"]

  // const matchIcon = () => {
  //   const amenitiesToDispaly.findIndex((amenity) => ameni)
  // }
  return (
    <section className="stay-amenities">
      <h1>What this place offers</h1>
      <ul className="amenities-list">
        {amenities.slice(0, 10).map(amenity => {
          return (
            <li key={amenity}>
              {icons[2]}
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