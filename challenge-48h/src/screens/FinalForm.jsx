import React, { useState } from 'react'

// CSS :
import '../styles/off-screen.css';

function FinalForm() {
    const [lieu, setLieu] = useState("");
    const [arme, setArme] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if(lieu == 'toto' && arme == 'titi'){
            alert(`Bravo t'as gagné: ${lieu}!`);
        }
        else{
            alert(`T'as perdu!`);
            window.location.reload(false);
        }
      }

    return (
        <form onSubmit={handleSubmit}>
        <label>
          <p>De quoi va-t-il mourir ?</p> 
          <input type="text"
          name='arme'
          value={arme}
          onChange={(e) => setArme(e.target.value)}/>
        </label>
        <label>
          <p>Ou?</p>
          <input type="text" 
          name='lieu'
          value={lieu}
          onChange={(e) => setLieu(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default FinalForm