import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component{
    constructor(props) {
        super(props);
        this.state = { selectedDishDetail: this.props.dsdetail};
    }

    dishFun(dish) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1' >
                    <Card>
                        <CardImg width="300px" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>   
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    commentFun(comments){
        if (comments == null) {
            return (<div></div>)
        }
        const commentList = comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {commentList}
                </ul>
            </div>
        )
    }


    render(){
        const dish = this.props.dish
        if (dish == null) {return (<div></div>);}
        const dishVal = this.dishFun(dish);
        const commentVal = this.commentFun(dish.comments);

        return (
            <div className='row'>
                {dishVal}
                {commentVal}
            </div>
        )
    }

}

export default DishDetail;