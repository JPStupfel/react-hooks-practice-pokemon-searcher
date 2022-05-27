import React, {useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [list, setList] = useState([])
  const [displayList, setDisplayList] =useState([])

  useEffect(
    ()=>
    fetch('http://localhost:3001/pokemon').then(r=>r.json()).then(d=>{setList(d);setDisplayList(d)}),[]
  )

  function handleSearch(search){
    const searchField = list.filter(e=>e.name.toLowerCase().includes(search.toLowerCase()))
    setDisplayList(searchField)
  }

  function handleSubmit(newPoke){
  
    //console.log([list[0],newPoke])

    fetch('http://localhost:3001/pokemon', {method: "POST", headers: {'Content-type':"application/json"},body: JSON.stringify(newPoke)}).then(r=>r.json).then(d=>console.log(d))

    setList(prev=>[...prev,newPoke])
    setDisplayList(prev=>[...prev,newPoke])

  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm handleSubmit={handleSubmit}/>
      <br />
      <Search handleSearch={handleSearch}/>
      <br />
      <PokemonCollection displayList={displayList}/>
    </Container>
  );
}

export default PokemonPage;
