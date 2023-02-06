import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import { Pagination } from './components/Pagination'
import { ResidentForm } from './components/ResidentForm'
import { ResindetList } from './components/ResindetList'
import { getRandomNumber } from './utils/handleRandom'

const RESIDENT_FOR_PAGE = 12;

function App() {
// Estado que almacena la info de la Location
const [location, setLocation] = useState()
// Estado que almacena el input no controlado
const [nameLocation, setNameLocation] = useState('')
// Estado que almacena la paginación
const [page, setPage] = useState(1)

// Función que se ejecuta en el submit del formulario
const handleSubmit = (e) => {
  e.preventDefault()
  setNameLocation(e.target.idLocation.value)
}
// Función que se encarga  de obtener los residentes dependiendo de la pagina actual.
const pagination = () => {
  if(!location) return []
  const maxLimit = page * RESIDENT_FOR_PAGE
  const minLimit = maxLimit - RESIDENT_FOR_PAGE
  const newResident = location?.residents.slice(minLimit, maxLimit)
  return newResident
}

// Efecto que se ejecuta en el primer render y cuando cambia name Location
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === '' ? getRandomNumber(126) : nameLocation
  const URL = `https://rickandmortyapi.com/api/location/${dimension}`
  axios.get(URL)
  .then((res) => setLocation(res.data))
  .catch((err) => console.log(err))
  }, [nameLocation])
  
  return (
    <div className="App">
      <div className='hero'></div>
      <LocationInfo location={location}/>
      <ResidentForm handleSubmit={handleSubmit}/>
      <Pagination RESIDENT_FOR_PAGE={RESIDENT_FOR_PAGE}  setPage={setPage} location={location} />
      <ResindetList pagination = {pagination} />
      <Pagination RESIDENT_FOR_PAGE={RESIDENT_FOR_PAGE}  setPage={setPage} location={location} />

    </div>
  )
}

export default App
