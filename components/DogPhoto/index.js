import React from 'react'
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
        flex-basis: 25%;
      }      
      & > :last-of-type {
        flex-basis: 75%;
      }    
    }

`;

const DogPhoto = () => {
  return (
    <Cont className="default-section photo-section">
        <h3 className='mar-bottom-8'>Want to see a dog photo?</h3>
        <div className="blue-line mar-bottom-32"></div>
        <div className="photo-content">
         <Input />
          <DogImage />
        </div>
    </Cont>
  )
}

export default DogPhoto