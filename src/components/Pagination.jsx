import React from 'react'
import './styles/Pagination.css'
import { numbersPage } from '../utils/handlePagination'

export const Pagination = ({setPage, RESIDENT_FOR_PAGE, location}) => {
  return (
    <ul className='Pagination'>
    {
      numbersPage(location, RESIDENT_FOR_PAGE)?.map(numberPage => <li className='Pagination__list' onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
    }
  </ul>
  )
}
