import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components';

import COLORS from '@/data/colors';

const Cont = styled.div`

`;

const Fact = () => {
    const jokeRef = useRef(null);
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(false);
    const getJoke = async () => {
        setLoading(true);
        let jokeFet =  fetch("/api/joke", {
          method: "POST",
          cache: 'no-store',
          body: JSON.stringify(Math.random())
        },
          
          );
        jokeFet = await (await jokeFet).json();
     
        jokeRef.current.innerHTML = jokeFet.name.facts[0];
        setLoading(false);
      }
    
        useEffect(() => {
            getJoke();
        },[])
      
      
      
  
  return (
    <Cont colors = {COLORS} >
        <div className="default-section">
        <h3 className = 'mar-bottom-8'>Want to hear a dog Fact?</h3>
    
        <div className="blue-line mar-bottom-32"></div>
        <p className = 'mar-bottom-32' ref = {jokeRef}></p>
        <button className='default-btn' onClick={getJoke}>
            {loading ? <span className="loader"></span> :  <h5>New Fact</h5>}
           
        </button>
      </div>
    </Cont>
  )
}

export default Fact;