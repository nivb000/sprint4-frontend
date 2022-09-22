import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import MilitaryTechSharpIcon from '@mui/icons-material/MilitaryTechSharp';
import WavesSharpIcon from '@mui/icons-material/WavesSharp'
import HostImg from '../assets/img/square-profile-imgs/1.jpg'

export const HostDetails = ({ stay }) => {

  console.log('stay:' , stay)
  
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
        <img src={HostImg} alt="host-img" />
      </div>
    </div>
    <div className="details-card-one">
      <div className="sub-details-img">
        <MilitaryTechSharpIcon fontSize='large' />
      </div>
      <div className="sub-details-text">
        <h3>Moriya is a Superhost</h3>
        <p>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
      </div>
    </div>

    <div className="details-card-two">
      <div className="sub-details-img">
        <WavesSharpIcon fontSize='large' />
      </div>
      <div className="sub-details-text">
        <h3>Dive right in</h3>
        <p>This is one of the few places in the area with a pool.</p>
      </div>
    </div>
  </section>
}