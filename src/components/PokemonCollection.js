import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({displayList}) {
  
  const pokes = displayList.map(e=><PokemonCard key={e.id} mon={e}/>)

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokes}
    </Card.Group>
  );
}

export default PokemonCollection;
