import {useState} from 'react'
import styled from 'styled-components'
import COLORS from '@/data/colors'
import Input from './Input';
import DogImage from './DogImage';
const Cont = styled.div`
    .photo-section {
        
    }

    .photo-content {
      display: flex;
      & > div:nth-of-type(1) {
        flex-basis: 30%;
      }      
      & > :last-of-type {
        flex-basis: 70%;
      }    
    }

`;

const DogPhoto = () => {
  const [url, setUrl] = useState("");
  const [breed, setBreed] = useState('');
  const [filter, setFilter] = useState('random');
  

  const fetchUrl = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_HOSTNAME}/api/images/random`, {method: "GET", cache: 'no-cache'});
    const {image} = await response.json();
    setUrl(image.message);
  }
  useState(()=> {
    fetchUrl();
  }, []);
   
  console.log('url');
  console.log(url);
  return (
    <Cont className="default-section photo-section">
        <h3 className='mar-bottom-8'>Want to see a dog photo?</h3>
        <div className="blue-line mar-bottom-32"></div>
        <div className="photo-content">
         <Input breed = {breed} setBreed={setBreed} filter = {filter} setFilter={setFilter}/>
          <DogImage url = {url} />
        </div>
    </Cont>
  )
}

export default DogPhoto