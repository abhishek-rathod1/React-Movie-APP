import React from "react";

const GenreFilter = ({ genres, genre, setGenre }) => {
  // console.log(genres);
  function handleClick(e){
    let selectedGenre = e.target.value;
    console.log('Filtering by ', selectedGenre);
    setGenre(selectedGenre);

  }

  return (
    <div className="genre-container">
      <h3>Filter by Genre</h3>
      <div className="btn-container">
      {genres.map((genre, index) => 
        // console.log(genre);
        <button value={genre} className="btn" key={index} onClick={handleClick}>{genre}</button>
      )}

      </div>
    </div>
  );
};

export default GenreFilter;
