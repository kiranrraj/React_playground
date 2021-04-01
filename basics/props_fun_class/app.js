function Component_fun(props){
    return (`Hello ${props.name}`);
}

function Head(){
    return(
        <div>
            <h1><Component_fun name="kiran" /></h1>
        </div>
    )
}

class App extends React.Component {
    render() {
        return (
            <div>
                <PrintDetails
                    name="Kiran"
                    address={["Building No:3", "Venjaramoodu", "Trivandrum"]}
                />

                <PrintDetails
                    name="Adithyan"
                    address={["Building No:4", "Venjaramoodu", "Trivandrum"]}
                />
                <Head/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));