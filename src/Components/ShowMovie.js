import React , {useState, useEffect} from 'react';
import axios from 'axios';

const ShowMovie = () => {

    const [number, setNumber] = useState(1);
    const [movie, setMovie] = useState(1);

    const handleNumber = (e) => {
        setNumber(e.target.value);
    };

    useEffect( () => {
        axios.get(`https://swapi.dev/api/films/${number}/`)
        .then(res => {
            setMovie(res.data);
            // console.log(res.data);
        })
        .catch(err => {
            console.log("error !!!");
        });
    }, [number]);

    return (
        <div>
            <h1>Show Movie !!!!</h1>
            <h3>{movie.title}</h3>
            <p>Director : {movie.director}</p>
            <select onClick={handleNumber}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    );
}

export default ShowMovie;