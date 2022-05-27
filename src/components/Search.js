import { useCallback } from "react/cjs/react.production.min";
import React, {useState, useEffect} from "react";

function Search({handleSearch}) {
  const [search, setSearch] = useState('')

 

  function handleInput(event){
    setSearch(event.target.value)
   // handleSearch(search)
  }

   useEffect(
    ()=>{if (search) {handleSearch(search)}},[search]
  )

console.log(search)
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleInput} value={search} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
