import { HashLink as Link } from 'react-router-hash-link';

export function DetailsNavBar() {

  return (
    <section className="details-nav-bar">
      <nav className="full">
        <Link to="#photos">
          Photos
        </Link>
        <Link to="#amenities">
          Amenities
        </Link>
        <Link to="#reviews">
          Reviews
        </Link>
        <Link to="#location">
          Location
        </Link>
      </nav>
    </section>
  )
}