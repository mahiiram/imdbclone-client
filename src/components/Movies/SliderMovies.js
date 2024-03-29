import React from 'react'
import { useNavigate } from 'react-router-dom';



function SliderMovies({ id, title, posterurl, releasedate, index }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/review/${id}`)
    }
    
    return (
        
            <div className="card" style={{ width: "200px" }}>
                <img src={posterurl} className="card-img-top" alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p>{new Date(releasedate).toDateString()}</p>
                    <button onClick={handleClick} className='btn btn-primary'>view details</button>
                </div>
            </div>


    )
}

export default SliderMovies