import React from 'react';
import './App.css';
import Row from './Row'
import Banner from './Banner'
import requests from './requests'

function App() {
  return (
    <div className="App">
     {/*  Nav  */}

     {/*  Banner */}
     <Banner/>
     <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow="true"></Row>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
     <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
     <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}></Row>
     <Row title="Comedy Movies" fetchUrl={requests.fetchComedayMovies}></Row>
     <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMoives}></Row>
     <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}></Row>
     <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
   
    </div>
  );
}

export default App;
