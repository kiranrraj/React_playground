import React, { Component } from "react";
import { Card, CardImg, CardImgOverlay, CardTitle  } from "reactstrap";
import DishDetail from './DishDetailsComponent';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state = { currentDish: null};  
    }

    onSelect(dish){ this.setState({currentDish: dish}); }

    render(){
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={ dish.id } className="col-12 col-md-5 m-1">    
                    <Card onClick={ () => this.onSelect( dish ) } >
                        <CardImgOverlay>
                        <CardImg width="100%" src={ dish.image } alt={ dish.name } />
                            <CardTitle> { dish.name }</CardTitle>
                        </CardImgOverlay>
                    </Card>                
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    { menu }
                </div>
                <DishDetail dish={this.state.currentDish} />
            </div>
        );
    }
}

export default Menu;