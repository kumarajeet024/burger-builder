import React from 'react';
import classes from './Control.module.css';

const control =(props)=>(
    <div className={classes.BuildControl}>
        
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={props.remove} disabled = {props.disabled}>-</button>
        <button className={classes.More} onClick={props.added}>+</button>
    </div>
);
export default control;