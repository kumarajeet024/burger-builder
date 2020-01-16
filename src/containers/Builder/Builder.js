import React,{Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../component/Burger/Burger';
import Controls from "../../component/Burger/Controls/Controls";
const ingredients_price = {
    salad : 1.5,
    meat : 1.2,
    cheese : 0.9,
    bacon : 1.1

};

class Builder extends Component{
    state={
        burgerIngredients : {
            meat:0,
            bacon:0,
            salad:0,
            cheese:0
        },
        totalPrice : 50,
        purchasable : false,
    }

    updatePurchasable(){
        const ingredients = {
            ...this.state.burgerIngredients
        };
        let sum=0;
        for(let key in ingredients){
            
        }

    }

     addingredientsHandler = (type) => {
        const updateCount = this.state.burgerIngredients[type]+1;   
        const updateIngredient = {
            ...this.state.burgerIngredients
        };
        updateIngredient[type]=updateCount;
        const newPrice= this.state.totalPrice + ingredients_price[type];
        this.setState({burgerIngredients:updateIngredient,
                       totalPrice:newPrice,               
        });
        this.updatePurchasable();
    }

    removeIngredientsHandler = (type) => {
        if(this.state.burgerIngredients[type]>0){
        const updateCount = this.state.burgerIngredients[type]-1;
        const updateIngredient = {
            ...this.state.burgerIngredients
        };
        updateIngredient[type]=updateCount;
        const newPrice = this.state.totalPrice - ingredients_price[type];
        this.setState({burgerIngredients:updateIngredient,
            totalPrice:newPrice,});
        }
    }

    render(){
        const disabledInfo = {
            ...this.state.burgerIngredients
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0
        }
        return(
            <Aux>
                <Burger burgerIngredients={this.state.burgerIngredients} />
                <Controls addedIngredient = {this.addingredientsHandler} 
                removeIngredient = {this.removeIngredientsHandler}
                disabled={disabledInfo}
                price = {this.state.totalPrice}/>
            </Aux>
        );
    }
} 

export default Builder;