import {useState} from 'react'
import styled from 'styled-components';
import COLORS from '@/data/colors';

const Cont = styled.div`

`;

const Input = () => {
    const [filter, setFilter] = useState('random');

    const filterBtns = ['random', 'breed'].map((fil, index) => {
        return (
            <div key = {index} className={fil === filter ? "default-btn mar-right-8" : "unselected-btn mar-right-8"}>
                    <h5>
                        {fil}
                    </h5>
            </div>
        )
    })
  return (
    <Cont colors = {COLORS}>
        <div className="flex space-between">
           {filterBtns}
        </div>
    </Cont>
  )
}

export default Input