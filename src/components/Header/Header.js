import React, { useEffect } from "react";
import "./Header.css";
import Search from "../Search/Search";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
export default function Header() {
  // const language = useSelector((state) => state.language.current_lang)

  const apiKey = "2446e9a48c85eec86da9892f726ac9a6";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
        );
        // Log the API response data to the console
        console.log(response.data);
      } catch (error) {
        // Handle any errors that occur during the API request
        console.error(error);
      }
    };

    // Call the fetchData function when the component mounts
    fetchData();
  }, []);

  return (
    <div>
      <div className="HeaderBg p-4 m-4">
        <div className="custom-container">
          <h1 className="mb-5 p-2">Welcome to our movie app</h1>
          <h6 className="mb-5 p-2">
            Millions of movies, TV shows and people to discover. Explore now.
          </h6>
          <Search />
        </div>
      </div>
    </div>
  );
}
