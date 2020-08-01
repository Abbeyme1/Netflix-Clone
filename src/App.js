import React from "react";
import "./App.css";
import Row from "./Components/Row/Row";
import requests from "./requests";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchedActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchedComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchedHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchedRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
