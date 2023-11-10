import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';
import COLORS from '@/data/colors';

const Cont = styled.div`
  position: relative;
  width: 100%;
  height: 600px;
  margin-left: 32px;
  border-radius: 8px;
  overflow: hidden;
`;

const DogImage = ({url}) => {
  return (
    <Cont>
      <Image 
        src = {url}
        alt = 'Dog'
        fill
        style = {{
          objectFit: "contain"
        }}
      />
    </Cont>
  )
}

export default DogImage