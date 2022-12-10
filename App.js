import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} isLargeRow></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow></Row>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} isLargeRow></Row>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow></Row>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow></Row>
    </div>
  );
}

export default App;
