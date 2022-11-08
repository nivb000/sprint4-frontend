import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import WavesSharpIcon from '@mui/icons-material/WavesSharp'
import {utilService} from '../services/util.service'


export const HostDetails = ({ stay }) => {

  const hostImg = require(`../assets/imgs/square-profile-imgs/${utilService.getRandomIntInclusive(1,20)}.jpg`)

  return <section className="host-details">
    <div className="main-details">
      <div className="main-details-text">
        <h2>{`${stay.name} hosted by ${stay.host.fullname}`}</h2>
        <ul>
          <span>{`${stay.capacity}`} guests</span>
          <span className='dot-separator'>·</span>
          <span>{`${stay.bedrooms}`} bedrooms</span>
          <span className='dot-separator'>·</span>
          <span>7 beds</span>
          <span className='dot-separator'>·</span>
          <span>{`${stay.bathrooms}`} baths</span>
        </ul>
      </div>
      <div className="main-details-img">
        <img src={hostImg} alt="host-img" />
      </div>
    </div>
    <div className="details-card-one">
      <div className="sub-details-img">
        <MilitaryTechSharpIcon sx={{ color: '$clr-black' }} fontSize='large' />
      </div>
      <div className="sub-details-text">
        <h3>{`${stay.host.fullname.split(' ')[0]} is a Superhost`}</h3>
        <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
      </div>
    </div>

    <div className="details-card-two">
      <div className="sub-details-img">
        <WavesSharpIcon sx={{ color: '$clr-black' }} fontSize='large' />
      </div>
      <div className="sub-details-text">
        <h3>Dive right in</h3>
        <p>This is one of the few places in the area with a pool.</p>
      </div>
    </div>
  </section>
}