import React from 'react';
import classes from './Controls.module.css';
import Control from './Control/Control';

const buildcontrol = [
    {label: 'Salad',type:'salad'},
    {label: 'Bacon',type:'bacon'},
    {label: 'Cheese',type:'cheese'},
    {label: 'Meat',type:'meat'},
];

const controls =(props)=>(

        <div className={classes.Controls}>
            <h3 className={classes.Price}>Current price : <strong>{props.price.toFixed(2)}</strong></h3>
            {buildcontrol.map(ctrl => (
                <Control key={ctrl.label} label = {ctrl.label} 
                added={()=>props.addedIngredient(ctrl.type)}
                remove={()=>props.removeIngredient(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
                />
            ))}
            <button className={classes.OrderButton}>Order Now</button>
        </div>
);

export default controls;