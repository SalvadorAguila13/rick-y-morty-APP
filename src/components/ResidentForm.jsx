import React from 'react'
import './styles/ResidentForm.css'

export const ResidentForm = ({handleSubmit}) => {
  return (
    <form className='ResidentForm' onSubmit={handleSubmit}>
      <input className='ResidentForm__input' type="number" id='idLocation' placeholder='type a locartion id'/>
      <button className='ResidentForm__btn'>Search</button>
    </form>
  )
}
