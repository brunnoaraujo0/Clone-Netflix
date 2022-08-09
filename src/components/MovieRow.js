import './MovieRow.css'
import React, { useState } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
function MovieRow({title, item}) {
    const [scrollX, setScrollx] = useState(-400);

    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if(x > 0 ) {
            x = 0;
        }setScrollx(x);
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = item.length * 150;
        if(window.innerWidth - listW > x) {
            x = (window.innerWidth - listW) - 60;
        }
        setScrollx(x);
    }
return(
    <div className="movieRow">
     <h1>{title}</h1>
     <div className="movieRow--left" onClick={handleLeftArrow}>
        <FaAngleLeft style={{fontSize: 50}}/>
     </div>
     <div className="movieRow--right" onClick={handleRightArrow}>
        <FaAngleRight style={{fontSize: 50}}/>
     </div>
     <div className="movieRow--listarea">
        <div className="movieRow--list" style={{marginLeft: scrollX, width: item.length * 150}}>
        {item.length > 0 && item.map((items) => (
            <div key={items.id} className="movieRow--item">
                <img alt='' src={`https://image.tmdb.org/t/p/w300${items.poster_path}`}/>
            </div>
                

            ))}
        </div>
           
     </div>
    </div>
)
}
export default MovieRow