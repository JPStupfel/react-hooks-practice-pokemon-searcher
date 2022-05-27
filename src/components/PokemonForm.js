import React, {useState} from "react";
import { Form } from "semantic-ui-react";
import { v4 as uuidv4 } from 'uuid';

function PokemonForm({handleSubmit}) {

  const dummyPoke = 

  {
    "id": uuidv4(),
    "name": "mewtwo",
    "hp": 106,
    "sprites": {
      "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
      "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/150.png"
    }
  }
  
  
  

  const [newPoke, setNewPoke] = useState(dummyPoke)

  function handleInput(event){
    const type = event.target.name;

    const thisNewPoke = {...newPoke}
    thisNewPoke.id = uuidv4()

    switch(type){
      case 'name':
        
      setNewPoke({...thisNewPoke, 'name': event.target.value}); 
      break;

      case 'hp':

        setNewPoke({...thisNewPoke, 'hp': parseInt(event.target.value,10)})
        ;
      break;

      case 'front':
      case 'back':

        thisNewPoke.sprites[event.target.name] = event.target.value;
        setNewPoke(thisNewPoke)
        ;
      break;

    }



  }


console.log(newPoke)
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(event) => { event.preventDefault(); 
          //debugger
          handleSubmit(newPoke);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={handleInput} />
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={handleInput}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="front" onChange={handleInput}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="back" onChange={handleInput}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
