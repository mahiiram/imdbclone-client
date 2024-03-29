import React, { useState, useEffect } from 'react';
import { addmovie, getallmovies } from '../../api-helpers/api-helpers';
import './Addmovie.css';


const NewMovie = () => {
    const [movies,setMovies] = useState()
    const [form, setForm] = useState({
        title: "",
        actors: [{ name: "", image: "" }],
        producers: [{ name: "", image: "" }],
        director: [{ name: "", image: "" }],
        description: "",
        releasedate: "",
        posterurl: "",
        genre: "",
        featured: false,
    });

    useEffect(() => {
        getallmovies()
            .then((res) => setMovies(res.movies))
            .catch((err) => console.log(err))
    }, [])

    const handleInputChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addmovie({...form,movies}).then((res)=>console.log(res)).catch((err)=>console.log(err))
        console.log(form)
    };

    return (
        <div className="newmovie">
           <div className='card-div'> 
           <form onSubmit={handleSubmit}>
            {/* Title input field */}
            <div >
            <label className='label'>
                Title:
                <input
                    class="form-control" 
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleInputChange}
                    required
                />
            </label>
            </div>

            {/* Actors input field */}
            <div>
            <label className='label'>
                Actors:
                {form.actors.map((actor, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            class="form-control"
                            name="actorname"
                            placeholder='Actor Name'
                            value={actor.name}
                            onChange={(event) => {
                                const newActors = [...form.actors];
                                newActors[index].name = event.target.value;
                                setForm({
                                    ...form,
                                    actors: newActors,
                                });
                            }}
                        />
                        <input
                            type="text"
                            class="form-control"
                            name="actorimage"
                            placeholder='Actorimage'
                            value={actor.image}
                            onChange={(event) => {
                                const newActors = [...form.actors];
                                newActors[index].image = event.target.value;
                                setForm({
                                    ...form,
                                    actors: newActors,
                                });
                            }}
                        />
                    </div>
                ))}
            </label>
            </div>

            {/* Producers input field */}
            <div>
            <label className='label'>
                Producers:
                {form.producers.map((producer, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            name="producername"
                            class="form-control"
                            placeholder='Producer Name'
                            value={producer.name}
                            onChange={(event) => {
                                const newProducers = [...form.producers];
                                newProducers[index].name = event.target.value;
                                setForm({
                                    ...form,
                                    producers: newProducers,
                                });
                            }}
                        />
                        <input
                            type="text"
                            name="producerimage"
                            class="form-control"
                            placeholder='Producer Image'
                            value={producer.image}
                            onChange={(event) => {
                                const newProducers = [...form.producers];
                                newProducers[index].image = event.target.value;
                                setForm({
                                    ...form,
                                    producers: newProducers,
                                });
                            }}
                        />
                    </div>
                ))}
            </label>
            </div>

            {/* Director input field */}
            <div>
            <label className='label'>
                Director:
                {form.director.map((director, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            class="form-control"
                            name="directorname"
                            placeholder='Director Name'
                            value={director.name}
                            onChange={(event) => {
                                const newDirectors = [...form.director];
                                newDirectors[index].name = event.target.value;
                                setForm({
                                    ...form,
                                    director: newDirectors,
                                });
                            }}
                        />

                                <input
                            type="text"
                            name="directorimage"
                            class="form-control"
                            placeholder='Director Image'
                            value={director.image}
                            onChange={(event) => {
                                const newDirectors= [...form.director];
                                newDirectors[index].image = event.target.value;
                                setForm({
                                    ...form,
                                    director: newDirectors,
                                });
                            }}
                        />
              </div>
                ))}
            </label>
            </div>

            {/* Description input field */}
            <div>
            <label className='label'>
                Description:
                <textarea
                    name="description"
                    placeholder='Movie Bio'
                    class="form-control"
                    value={form.description}
                    onChange={handleInputChange}
                    required
                />
            </label>
            </div>

            {/* Releasedate input field */}
            <div>
            <label className='label'>
                Releasedate:
                <input
                    type="date"
                    name="releasedate"
                    placeholder='Date'
                    class="form-control"
                    value={form.releasedate}
                    onChange={handleInputChange}
                    required
                />
            </label>
            </div>

            {/* Posterurl input field */}
            <div>
            <label className='label'>
                Posterurl:
                <input
                    type="text"
                    class="form-control"
                    name="posterurl"
                    placeholder='PosterUrl'
                    value={form.posterurl}
                    onChange={handleInputChange}
                    required
                />
            </label>
            </div>

            {/* Genre input field */}
            <div>

            <label className='label'>
                Genre:
                <input
                    type="text"
                    class="form-control"
                    name="genre"
                    placeholder='genre'
                    value={form.genre}
                    onChange={handleInputChange}
                    required
                />
            </label>
            </div>

            {/* Featured checkbox field */}
            <div>
            
            <input className='featured'
                    type="checkbox"
                    name="featured"
                    checked={form.featured}
                    onChange={(event) => {
                        setForm({
                            ...form,
                            featured: event.target.checked,
                        });
                    }}
                />
                <label>
                Featured
            </label>
            </div>

            {/* Submit button */}
            <div style={{display:"flex",justifyContent:"center"}}>
            <button type="submit" class="btn btn-primary"> Submit</button>
            </div>
        </form>
           </div>
        </div>
    );
};

export default NewMovie;