"use client";

import styled from 'styled-components';
import COLORS from '@/data/colors';

const Cont = styled.div`
    padding: 16px 32px;
    display: flex;
    border-bottom: 1px solid black;
`;

const Navbar = () => {
  return (
    <Cont colors = {COLORS}>
        <div>
            <h3>Dog Facts</h3>
        </div> 
        <div>

        </div>
    </Cont>
  )
}

export default Navbar