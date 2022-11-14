import { HashLink as Link } from 'react-router-hash-link';
import { useEffect } from 'react';


export function DetailsNavBar() {

  useEffect(() => {
    const gallery = document.querySelector('.detalis-imgs-main');
    const header = document.querySelector('.app-header');
    const scrollNav = document.querySelector('.details-nav-bar');

    const galleryObserver = new IntersectionObserver(onGalleryObserved, {
      rootMargin: "-91px 0px 0px",
    });
    
    galleryObserver.observe(gallery);
    
    function onGalleryObserved(entries) {
      entries.forEach((entry) => {
        // console.log(entry.isIntersecting)
        // scrollNav.style.display = entry.isIntersecting ? 'none' : 'block';
      })
    }
  }, [])

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