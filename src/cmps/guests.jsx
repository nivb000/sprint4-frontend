import { useState, useEffect } from 'react'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export const Guests = ({ setGuestsIsOpen, handleGuests }) => {
  const [guests, setGuests] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0
  })

  useEffect(() => {
    handleGuests(guests)
  }, [guests])
  

  const increaseCount = (category, limit) => {
    if (guests[category] >= limit) return
    setGuests((prevState) =>
    ({...prevState, [category]: prevState[category] + 1}))
  }

  const decreaseCount = (category) => {
    if (guests[category] <= 0) return

    setGuests((prevState) =>
    ({
      ...prevState,
      [category]: prevState[category] - 1
    }))
  }

  return <div className="guests-modal">
    <div className="adults">
      <div className="guests-title">
        <h3>Adults</h3>
        <span>Ages 13 or above</span>
      </div>
      <div className="guests-buttons">
        <RemoveCircleOutlineIcon className='remove-guests-btn' onClick={() => decreaseCount('adults')} fontSize='large' />
        <span>{guests.adults}</span>
        <AddCircleOutlineIcon className='add-guests-btn' onClick={() => increaseCount('adults', 16)} fontSize='large' />
      </div>
    </div>

    <div className="children">
      <div className="guests-title">
        <h3>children</h3>
        <span>Ages 2–12</span>
      </div>
      <div className="guests-buttons">
        <RemoveCircleOutlineIcon className='remove-guests-btn' onClick={() => decreaseCount('children')} fontSize='large' />
        <span>{guests.children}</span>
        <AddCircleOutlineIcon className='add-guests-btn' onClick={() => increaseCount('children', 15)} fontSize='large' />
      </div>
    </div>

    <div className="infants">
      <div className="guests-title">
        <h3>Infants</h3>
        <span>Under 2</span>
      </div>
      <div className="guests-buttons">
        <RemoveCircleOutlineIcon className='remove-guests-btn' onClick={() => decreaseCount('infants')} fontSize='large' />
        <span>{guests.infants}</span>
        <AddCircleOutlineIcon className='add-guests-btn' onClick={() => increaseCount('infants', 5)} fontSize='large' />
      </div>
    </div>

    <div className="pets">
      <div className="guests-title">
        <h3>Pets</h3>
      </div>
      <div className="guests-buttons">
        <RemoveCircleOutlineIcon className='remove-guests-btn' onClick={() => decreaseCount('pets')} fontSize='large' />
        <span>{guests.pets}</span>
        <AddCircleOutlineIcon className='add-guests-btn' onClick={() => increaseCount('pets', 5)} fontSize='large' />
      </div>
    </div>
    <button className='btn-close' onClick={() => setGuestsIsOpen(false)}>Close</button>
  </div>
}