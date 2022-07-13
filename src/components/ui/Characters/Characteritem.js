import React from 'react'

/*const Characteritem = ({results}) => {
  return (<div>{results.name}</div>
  )
}
*/



const CharacterItem = ({ results }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={results.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{results.name}</h1>
                    <ul>
                        <li>
                            <strong>Height:</strong> {results.height}
                        </li>
                        <li>
                            <strong>Mass:</strong> {results.mass}
                        </li>
                        <li>
                            <strong>Birth:</strong> {results.birth_year}
                        </li>
                        <li>
                            <strong>Gender:</strong> {results.gender}
                        </li>
                        <li>
                            <strong>Eye Color:</strong> {results.eye_color}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CharacterItem



