import React,{Component} from "react";
import Aux from "../../hoc/Aux";
import Burger from '../../component/Burger/Burger';

class Builder extends Component{
    render(){
        return(
            <Aux>
                <Burger />
                <div>Controls</div>
            </Aux>
        );
    }
} 

export default Builder;