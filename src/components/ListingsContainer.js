import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing , setFavorite ,setOnDelete}) {
 
  return (
    <main>
      <ul className="cards">
        {listing.map((list) => 
        <ListingCard key={list.id} description={list.description} id={list.id} image={list.image} 
        favorite={list.favorite} setFavorite={setFavorite} location={list.location} setOnDelete={setOnDelete} />
        )}
      </ul>
    </main>
  );
}

export default ListingsContainer;
