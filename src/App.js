import MovieRow from "./components/MovieRow";
import { useEffect, useState } from "react";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";
import React from "react";
import './App.css';
import footer from './footer.png';


function App() {
  const [filmes, setFilmes] = useState([])
  const [recomendados, setRecomendados] = useState([])
  const [alta, setAlta] = useState([])
  const [comedia, setComedia] = useState([])
  const [acao, setAcao] = useState([])
  const [terror, setTerror] = useState([])
  const [romance, setRomance] = useState([])
  const [documentario, setDocumentario] = useState([])
  const [featureData, setFeatureData] = useState(null) /* Criou essa const pra so exibir o feature quando tiver dados*/
  const [blackHeader, setBlackHeader] = useState();
  


  useEffect(() => {
      fetch("https://api.themoviedb.org/3/discover/tv?with_networks=213&language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f")
      .then((data) => data.json())
      .then((data) => setFilmes(data.results));

      fetch("https://api.themoviedb.org/3/trending/all/week?language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f")
      .then((data) => data.json())
      .then((data) => setRecomendados(data.results));

      fetch("https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f")
      .then((data) => data.json())
      .then((data) => setAlta(data.results));

      fetch("https://api.themoviedb.org/3/discover/movie?with_genres=28&language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f")
      .then((data) => data.json())
      .then((data) => setAcao(data.results));

      fetch("https://api.themoviedb.org/3/discover/movie?with_genres=35&language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f")
      .then((data) => data.json())
      .then((data) => setComedia(data.results));

      fetch("https://api.themoviedb.org/3/discover/movie?with_genres=27&language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f")
      .then((data) => data.json())
      .then((data) => setTerror(data.results));

      fetch("https://api.themoviedb.org/3/discover/movie?with_genres=10749&language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f")
      .then((data) => data.json())
      .then((data) => setRomance(data.results));

      fetch("https://api.themoviedb.org/3/discover/movie?with_genres=99&language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f")
      .then((data) => data.json())
      .then((data) => setDocumentario(data.results));

      loadAll();

    }, [])

    async function loadAll() {
      let randomChosen = Math.floor(Math.random() * (19))
      fetch("https://api.themoviedb.org/3/discover/tv?with_networks=213&language=pt-BR&api_key=622c716d97e8f146ede73f3c1532dc6f")
      .then((data) => data.json())
      .then((data) => setFeatureData(data.results[randomChosen]));

    }
    
   

      useEffect(() => {
        const scrollListener = () => {
          if(window.scrollY > 10){
            setBlackHeader(true);
          }
          else {
            setBlackHeader(false);
          }
        }
        window.addEventListener('scroll', scrollListener);
        return () => {
          window.removeEventListener('scroll', scrollListener);
        }
      }, [])
    
  
  
      

  
  return( <div>

   <Header black={blackHeader}/>

    {featureData &&
      <FeatureMovie item={featureData}/>
    }
    <section className="list">
    <MovieRow  title="Filmes Originais" item={filmes}/>
    <MovieRow  title="Em Alta" item={alta}/>
    <MovieRow  title="Recomendados para você" item={recomendados}/>
    <MovieRow  title="Ação" item={acao}/>
    <MovieRow  title="Terror" item={terror}/>
    <MovieRow  title="Romance" item={romance}/>
    <MovieRow  title="Comedia" item={comedia}/>
    <MovieRow  title="Documentarios" item={documentario}/>
    </section>
    
    <footer>
      <img src={footer} alt=' '/>
      
    </footer>

    {filmes.length <=0 && 
    <div className="loading">
    <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt=""/>
   </div>
    
    }
    
  </div>);
}

export default App