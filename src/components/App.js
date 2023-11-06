import React , {useEffect,useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import Search from "./Search";


function App() {
  const [ list, setList ] = useState([])
 const[ search , setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then((r) => r.json())
    .then((data)=> setList(data))

  }, [])
  const handleFavoriteToggle = (id) => {
    const updatedListings = list.map((listing) =>
      listing.id === id
        ? { ...listing, favorite: !listing.favorite }
        : listing
    );
    setList(updatedListings);
  };
function handleOnDelete(id){
const deleteItem = list.filter(item => item.id !== id)
  
  setList(deleteItem)}

function handleSearch(input){
    setSearch(input)

}


  const filteredListings = list.filter(item => 
    item.description.toLowerCase().includes(search.toLowerCase())
  )

  
  return (
    <div className="app">
      <Header setSearch={handleSearch} />
 
      <ListingsContainer listing={filteredListings} setFavorite={handleFavoriteToggle} setOnDelete={handleOnDelete} />
    </div>
  );

  }
export default App;
