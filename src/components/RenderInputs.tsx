// Calculates and renders array in order specified

import React, { useState } from 'react'
import { ListView } from './ListView';

// Passes in the numbers array
interface Props {
    numbers: number[];
}

let sortedArr: number[] = [];
export const RenderInputs: React.FC<Props> = ({
    numbers
}) => {
    
    
    const [refresh, setRefresh] = useState(0);
    // Sorts numbers in an ascending fashion
    const orderAsc = () => {

        sortedArr = numbers.sort((a, b) => a < b ? -1 : a > b ? 1 : 0)
        setRefresh(refresh+1);
        console.log(sortedArr);
    }

    // Sorts numbers in a descending fashion
    const orderDesc = () => {

        sortedArr = numbers.sort((a, b) => a < b ? 1 : a > b ? -1 : 0)
        console.log(sortedArr);
        setRefresh(refresh+1);
      
    }



    return (
        <div>
            <h1>List View</h1>
        <button onClick={orderAsc}>Order in Ascending</button>   
        <button onClick={orderDesc}>Order in Descending</button>
        <ListView RenderArr={sortedArr}/>
        </div>
    )
}


