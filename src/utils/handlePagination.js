// Numero de paginas

export const numbersPage = (location, RESIDENT_FOR_PAGE) => {
    const quantityPage = Math.ceil(location?.residents.length / RESIDENT_FOR_PAGE) 
    //Numero de usuarios por pagina
    const arrayPages = []
    for(let i = 1; i <= quantityPage; i++){
      arrayPages.push(i)
    }
    return arrayPages
  }