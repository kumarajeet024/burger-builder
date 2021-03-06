import React from 'react';
import Aux from '../../hoc/Aux';
import Button from "../UI/Button/Button";



const orderSummary = (props) =>{

    const ingredientSummary = Object.keys(props.ingredients).map(
        igKey => {
        return (<li key={igKey}><span style={{textTransform : 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}</li>)
        }
    );

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h4><strong>Total Price : {props.price.toFixed(2)}</strong></h4>
            <p>Continue to chechout ?</p>
            <Button btntype={'Danger'} clicked={props.cancel}>CANCEL</Button>
            <Button btntype={'Success'} clicked={props.continue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;