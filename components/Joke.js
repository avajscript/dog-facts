import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';

import COLORS from '@/data/colors';

const Cont = styled.div`
.joke {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    border-radius: 16px;
    padding: 12px 16px;
   
  }
`;

const Joke = () => {
    const jokeRef = useRef(null);
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(false);
    const getJoke = async () => {
        setLoading(true);
        let jokeFet = fetch("http://localhost:3000/api/joke");
        jokeFet = await (await jokeFet).json();
     
        jokeRef.current.innerHTML = jokeFet.name.facts[0];
        setLoading(false);
      }
    
        useEffect(() => {
            getJoke();
        },[])
      
      
      
  
  return (
    <Cont colors = {COLORS}>
        <div className="joke">
        <h3 className = 'mar-bottom-8'>Want to hear a dog joke?</h3>
        <h4 className="regular mar-bottom-8">Click below</h4>
        <div className="blue-line mar-bottom-32"></div>
        <p className = 'mar-bottom-32' ref = {jokeRef}></p>
        <button className='default-btn' onClick={getJoke}>
            {loading ? <span className="loader"></span> :  <h5>New Fact</h5>}
           
        </button>
      </div>
    </Cont>
  )
}

export default Joke