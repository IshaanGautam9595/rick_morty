import React, { useEffect, useState } from 'react'
import Characters from './components/Characters';
import Navbar from './components/Navbar';
import Pagination from './components/Pagination';

function App() {

  const [ characters, setCharacters ] = useState([]);
  const [info, setInfo ] = useState({});

  const initialUrl = "https://rickandmortyapi.com/api/character/";

  const fetchCharacter = (url) => {
  fetch(url)
  .then(response => response.json())
  .then((data)=> {
  setCharacters(data.results);
  setInfo(data.info);
  })
  .catch(error => console.error(error))
};

const onPrevious = () => {
  fetchCharacter(info.prev);
}

const onNext = () => {
  fetchCharacter(info.next);
}

useEffect(() => {
  fetchCharacter(initialUrl);
}, [])


  return (
    <>
      <Navbar brand="Rick and Morty App" />

    <div className="container mt-5">
      <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext} />
      <Characters characters={ characters } />
      <Pagination />
    </div>
    </>
  )
}

export default App