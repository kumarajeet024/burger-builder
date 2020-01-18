import React,{Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../component/Burger/Burger';
import Controls from "../../component/Burger/Controls/Controls";
import Modal from "../../component/UI/Modal/Modal";
import OrderSummary from "../../component/OrderSummary/OrderSummary";
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
        purchasing : false,
    }

    updatePurchasable(ingredients){
        // const ingredients = {
        //     ...this.state.burgerIngredients
        // };
        let sum=0;
        for(let key of Object.values(ingredients)){
            sum+=key;
        }
        return sum>0;
    }

     addingredientsHandler = (type) => {
        const updateCount = this.state.burgerIngredients[type]+1;   
        const updateIngredient = {
            ...this.state.burgerIngredients
        };
        updateIngredient[type]=updateCount;
        const newPrice= this.state.totalPrice + ingredients_price[type];
        const isPurchase = this.updatePurchasable(updateIngredient);
        this.setState({burgerIngredients:updateIngredient,
                       totalPrice:newPrice,
                       purchasable :isPurchase,              
        });
        
    }

    removeIngredientsHandler = (type) => {
        if(this.state.burgerIngredients[type]>0){
        const updateCount = this.state.burgerIngredients[type]-1;
        const updateIngredient = {
            ...this.state.burgerIngredients
        };
        updateIngredient[type]=updateCount;
        const newPrice = this.state.totalPrice - ingredients_price[type];
        const isPurchase=this.updatePurchasable(updateIngredient);
        this.setState({burgerIngredients:updateIngredient,
            totalPrice:newPrice,
            purchasable:isPurchase,
        });
        }
        
    }

    purchasingHandler = () => {
        this.setState({purchasing:true})
    }

    purchasingCancel = () => {
        this.setState({purchasing:false})
    }

    purchasingContinueHandler = () =>{
        alert("You have purchased");
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
                <Modal show={this.state.purchasing} modalClicked={this.purchasingCancel}>
                    <OrderSummary ingredients ={this.state.burgerIngredients} 
                    cancel={this.purchasingCancel} 
                    continue={this.purchasingContinueHandler}
                    price={this.state.totalPrice}></OrderSummary>
                </Modal>
                <Burger burgerIngredients={this.state.burgerIngredients} />
                <Controls addedIngredient = {this.addingredientsHandler} 
                removeIngredient = {this.removeIngredientsHandler}
                disabled={disabledInfo}
                price = {this.state.totalPrice}
                purchasable = {this.state.purchasable}
                show={this.purchasingHandler}
                />
            </Aux>
        );
    }
} 

export default Builder;