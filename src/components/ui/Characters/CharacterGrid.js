import React from 'react'
import Characteritem from './Characteritem'
import Spinner from '../Spinner'

const CharacterGrid = ({ items, isLoading }) => {
  return isLoading ? ( 
  <Spinner/>
 ) : (
 <section className='cards'>
      {items.results.map((results) => (
       <Characteritem key={results.name} results={results}></Characteritem>
      ))}
    </section>
  )
}

export default CharacterGrid