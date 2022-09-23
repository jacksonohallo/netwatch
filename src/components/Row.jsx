import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'

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
      
      <div id={'slider' + rowID}>

        {movies.map((item, id) => (

           <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
      <img
        className='w-full h-auto block'
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
            />
            </div>
          
          
          
        ))}

      </div>



    </>
   
  )
}

export default Rows
