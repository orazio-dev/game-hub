import React from "react";
import useGenres from "../hooks/useGeneres";
import { MdOutlineSystemSecurityUpdateGood } from "react-icons/md";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
