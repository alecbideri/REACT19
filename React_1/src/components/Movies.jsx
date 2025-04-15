import React from "react";

const Movies = () => {
  const [movies, setMovies] = React.useState([
    {
      id: 1,
      title: "Spiderman",
      rating: 5,
    },
    {
      id: 2,
      title: "Superman",
      rating: 7,
    },
  ]);

  const handleOnClick = () =>
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick 2" } : m)),
    );

  return (
    <div>
      {movies.map((m) => (
        <li key={Math.random()}>{m.title}</li>
      ))}

      <button onClick={handleOnClick}>Update movie title</button>
    </div>
  );
};
export default Movies;
