import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie';


const Rows = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([])  
  useEffect(() => {
    axios.get(fetchURL).then((response) => {
      setMovies(response.data.results)
    })
  }, [fetchURL])
  
  console.log(movies)

  
  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='relative flex items-center group'></div>
      <MdChevronLeft/>
      <div id={'slider' + rowID}
         className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'
      >

        {movies.map((item, id) => (
          <Movie key={id} item={item} />
        ))}

      </div>
      <MdChevronLeft/>




    </>
   
  )
}

export default Rows
