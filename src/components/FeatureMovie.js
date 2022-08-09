import React from "react";
import './FeatureMovie.css';
import { useState } from "react";

function FeatureMovie({item}) {
    const [data, setData] = useState({})
    calma(item.id);
    async function calma(id) {
    
        await fetch(`https://api.themoviedb.org/3/tv/${id}?language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f`)
         .then((data) => data.json())
         .then((data) => setData(data));
   
       }

       let firstDate = new Date(data.first_air_date);

       let genres = [];
       for(let i in data.genres){
        genres.push(data.genres[i].name);
       }

  return (
    <section className="featured" style={
        {
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${data.backdrop_path})`
        }
    }>
        <div className="featured--vertical">
            <div className="featured--horizontal">
                <div className="featured--name">{data.original_name}</div>
                <div className="featured--info">
                    <div className="featured--points">{data.vote_average} pontos</div>
                    <div className="featured--year">{firstDate.getFullYear()}</div>
                    <div className="featured--seasons">{data.number_of_seasons} Temporada{data.number_of_seasons !== 1 ? 's' : ''}</div>
                
                </div>
                <div className="featured--description">{data.overview}</div>
                <div className="featured--buttons">
                    <a href={`/watch/${data.id}`} className="featured--watchbutton">► Assistir</a>
                    <a href={`/list/add/${data.id}`} className="featured--mylistbutton">+ Minha lista</a>
                </div>
                <div className="featured--genres"><strong>Gêneros: </strong>{genres.join(', ')}</div>
            </div>
        </div>
    </section>
  )
}export default FeatureMovie