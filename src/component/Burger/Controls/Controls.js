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
            {buildcontrol.map(ctrl => (
                <Control key={ctrl.label} label = {ctrl.label} />
            ))}
        </div>
);

export default controls;