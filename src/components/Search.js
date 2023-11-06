import React, { useState } from "react";

function Search({setSearch}) {
  const [searchByName, setSearchByName]= useState("")
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch(searchByName)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchByName}
        onChange={(e) => setSearchByName(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
