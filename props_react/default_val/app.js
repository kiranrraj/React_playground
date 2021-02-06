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
                <PrintDetails
                    address={["Building No:4", "Venjaramoodu", "Trivandrum"]}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('main'));