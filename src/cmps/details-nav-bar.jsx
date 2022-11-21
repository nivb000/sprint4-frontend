import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react';
import StarIcon from '@mui/icons-material/Star'


export function DetailsNavBar({ stay }) {

  useEffect(() => {
    const gallery = document.querySelector('.detalis-imgs-main');
    const actionBtn = document.querySelector('.action-btn');
    const scrollNav = document.querySelector('.details-nav-bar');
    const dynamicReserveContainer = document.querySelector('.dynamicReserveContainer');

    const galleryObserver = new IntersectionObserver(onGalleryObserved, {
      rootMargin: "-91px 0px 0px",
    });

    galleryObserver.observe(gallery);

    function onGalleryObserved(entries) {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        scrollNav.style.display = entry.isIntersecting ? 'none' : 'block';
      })
    }

    const actionBtnObserver = new IntersectionObserver(onActionBtnObserved);

    actionBtnObserver.observe(actionBtn);

    function onActionBtnObserved(entries) {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        dynamicReserveContainer.style.display = entry.isIntersecting ? 'none' : 'block';
      })
    }

    console.log(stay)
  }, [])

  return (
    <section className=" main-layout details-nav-bar">
      <nav>
        <div className="details-nav-bar-links">
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
        </div>
        <div className="dynamicReserveContainer">
          <div className="dynamicReserveDetails">
            <p>{`$${stay.price} night`}</p>
            <p><StarIcon fontSize="inherit" />{`${stay.rate} · ${stay.reviews.length} reviews`}</p>
          </div>
          <div className="scroll-bar-reserve-btn-container">
            {Array.from(Array(79), (_, i) => <div className='cell' key={i}></div>)}
            <div className="content">
              <button className="scroll-bar-reserve-btn">
                <span>Reserve</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </section>
  )
}