import React, { useState } from 'react'



const Card = ({ dataGames }) => {
    const [readMore, setReadMore] = useState(false);


    return (
        <div className='games'>
            <div className="img-container">
                <a href={dataGames.game_url} target="_blank" rel="noopener noreferrer"> <img src={dataGames.thumbnail} alt={dataGames.title} /></a>
            </div>
            <div className="games-footer">
                <h3>{dataGames.title}</h3>
                <h4>{dataGames.developer}</h4>
                <h4>{dataGames.release_date}</h4>
                <h4>{dataGames.platform}</h4>
                <p>
                    {readMore ? dataGames.short_description : `${dataGames.short_description.substring(0, 60)}...`}
                </p>
                <button className='readmore' onClick={() => setReadMore(!readMore)}>
                    {readMore ? 'Mostrar menos' : 'Ler mais'}
                </button>
                <a href={dataGames.game_url} target="_blank" rel="noopener noreferrer"><button className="btn"><span>Site</span></button></a>
            </div>

        </div>
    )
}

export default Card