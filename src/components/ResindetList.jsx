import React from 'react'
import ResidentCard from './ResidentCard'
import './styles/ResindetList.css'

export const ResindetList = ({pagination}) => {
  return (
    <section className='residentList'>
      {
        pagination()?.map(residentUrl => <ResidentCard key={residentUrl} residentUrl={residentUrl} />)
      }
      </section>
  )
}
