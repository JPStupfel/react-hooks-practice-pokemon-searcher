import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({mon}) {

  const [front, setFront] = useState(true)

  return (
    <Card onClick={()=>setFront(prev=>!prev)}>
      <div>
        <div className="image">
          <img
          src={front ? mon.sprites.front : mon.sprites.back} 
          alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{mon.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {mon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
