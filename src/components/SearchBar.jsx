import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
  const navigate = useNavigate();
  const[searchTerm, setSearchTerm] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className="px-6 py-2 text-white"
      >
        <label htmlFor="search-field" className="sr-only">
          Search all songs
        </label>
        <div className="flex flex-row items-center justify-start gap-3">
          <FiSearch className="h-5 w-5" />
          <input
            type="text"
            name="search-field"
            id="search-field"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none placeholder-white text-base text-white p-4"
          />
        </div>
      </form>
    </>
  );
};

export default SearchBar;
