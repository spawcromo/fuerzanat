import React from 'react'
import { GenerateCards } from '../components/GenerateCards';
import { Slider } from '../components/Slider';
import { Comprar } from '../components/Comprar';



export default function HomeScreen(props) {





    return (
        <>
            
            <Slider />
            <GenerateCards />
            <Comprar props={props}/>


        </>
    )
}
