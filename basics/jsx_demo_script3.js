function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}

class JSX_Demo extends React.Component{
    render(){
        const rNum = getNum();
        return(
            <div>
                <h1>Number you generated >>> {rNum}</h1>
                <p>{rNum === 7 ? 'Congrats' : 'Try Again'}</p>
            </div>
        );
    }
}

ReactDOM.render(<JSX_Demo/>, document.getElementById('main'));