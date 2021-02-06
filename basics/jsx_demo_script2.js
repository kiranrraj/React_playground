function getMood(){
    const moods = ["Angry", "Hungry", "Desperate", "Depressed", "Excited"];
    return moods[Math.floor(Math.random() * moods.length)];
}


class JSX_Demo extends React.Component{
    render(){
        return(
            <h1>My current mood is {getMood()}</h1>
        );
    }
}

ReactDOM.render(<JSX_Demo/>, document.getElementById('main'));