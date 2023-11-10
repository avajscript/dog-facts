"use client";
import React from 'react'
import styled from 'styled-components';


const Cont = styled.div`
    padding: 16px 32px;
    background-color: ${props=>props.colors.darkBlue};
    h1, h2, h3, h4, h5, p {
        color: ${props=>props.colors.paleBlue};
    }
`;

import COLORS from '@/data/colors'
const Footer = () => {
  return (
    <Cont colors = {COLORS}>
        <p className='mar-bottom-8'>Created by Matthew Pierce, <a href="https://github.com/avajscript" target='_blank'>Github</a></p>
        <h5 className='underline mar-bottom-8'>
            This webpage uses the following free apis
        </h5>
        <ul>
            <li>
                <p> <a target='blank'  href="https://kinduff.github.io/dog-api/">Kinduff dog-api</a></p>
            </li>
            <li>
                <p> <a target='blank'  href="https://dog.ceo/dog-api/">Dog.ceo Dog Api</a></p>
            </li>
            
        </ul>
    </Cont>
  )
}

export default Footer