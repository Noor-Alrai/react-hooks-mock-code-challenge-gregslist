import React , {useState} from "react";

function ListingCard(props) {
   const{id,description, image, location ,favorite ,setFavorite, setOnDelete} = props

  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite? (
          <button onClick={() => setFavorite(id)} className="emoji-button favorite active">★</button>
        ) : (
          <button  onClick={() => setFavorite(id)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={()=> setOnDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
