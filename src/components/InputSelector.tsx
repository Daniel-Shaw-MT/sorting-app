// Select number of input boxes required

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { RenderInputs } from './RenderInputs';
import '../main.css';


interface formInputs {
    count: number;
}
let number: any;
let numbers: number[] = [];


export const InputSelector: React.FC = () => {
    // const {register, handleSubmit} = useForm();
    
    const [refresh, setRefresh] = useState(0);
    // Form initialization
    const { register, handleSubmit, formState: { errors }
    } = useForm<formInputs>();

    const formSubmitHandler: SubmitHandler<formInputs> = (data: formInputs) => {
      number = data;
      addToList();
    }

    // Add number to array to be sorted
    const addToList = () => { 
        numbers.push(number.count);
        setRefresh(1);
    }

    const clearList = () => {
        numbers = [];
        setRefresh(2)
        }

    return (
        <div className='container'>
            <h1>Input numbers to sort.</h1>
            <form onSubmit={handleSubmit(formSubmitHandler)}>
            <input className="style2" type="number" {...register('count', { required: true })}/>
            <br></br>
            {errors.count && <span>This Field Is Required</span>}
            <br></br>   
            <input type="submit" value="Add to list"/>
            </form>
            <button onClick={clearList}>Clear Inputs</button>

            <RenderInputs numbers={numbers}/>
            
        </div>
    )
}


