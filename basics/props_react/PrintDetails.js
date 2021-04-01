class PrintDetails extends React.Component{
    render(){
        const address = this.props.address
        return(
            <div>
                <h1>{this.props.name}</h1>
                <ul>
                    {address.map((add, i) => <li key={i}>{add}</li>)}
                </ul>
            </div>
        );
    }
}