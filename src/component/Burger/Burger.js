import React from 'react';
import classes from './Burger.module.css';
import Ingredients from './Ingredients/Ingredients';
const Burger = (props) =>{
    //burgerIngredients are object not array,so  conversion
    let transformedIngredients = Object.keys(props.burgerIngredients)
        .map(igKey => {
            return [...Array(props.burgerIngredients[igKey])].map((_,i)=>{
                return <Ingredients key={igKey+i} type={igKey} />
            });
        })
        /*for checking array has value or not*/
        .reduce((accumulator,currentValue)=>{
            return accumulator.concat(currentValue)
        },[])
        if(transformedIngredients.length===0){
            transformedIngredients=<p>Please add Ingredients!!!</p>;
        }
    return(
        <div className={classes.Burger}>
            <Ingredients type="bread-top"/>
            {transformedIngredients}
            <Ingredients type="bread-bottom"/>
        </div>
    );
};

export default Burger;