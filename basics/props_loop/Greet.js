class Greet extends React.Component{
    render(){
        return(
            <h1>Greetings from {this.props.from} to the {this.props.to}</h1>
        );
    }
}