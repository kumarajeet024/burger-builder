import React,{Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../component/Burger/Burger';
import Controls from "../../component/Burger/Controls/Controls";

class Builder extends Component{
    state={
        burgerIngredients : {
            meat:0,
            bacon:0,
            salad:0,
            cheese:0
        }
    }
    render(){
        return(
            <Aux>
                <Burger burgerIngredients={this.state.burgerIngredients} />
                <Controls />
            </Aux>
        );
    }
} 

export default Builder;