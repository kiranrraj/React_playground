class PrintDetails extends React.Component{
    render(){
        const address = this.props.address
        return(
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    {address.map((elem, i) => <li key={i}>{elem}</li>)}
                </ul>
            </div>
        );
    }
}