import aircover from '../assets/img/filter-icons/aircover.png'

export const AirCover = () => {

  return <section className="air-cover">
     <img className='aircover-img'src={aircover} alt="aircover" />
     <p>
        Every booking includes free protection from Host cancellations, 
        listing inaccuracies, and other issues like trouble checking in.
      </p>
  </section>
}