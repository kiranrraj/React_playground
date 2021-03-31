
function JSX_Demo(){
    // console.log("hello");
    return <h1> Hello Kiran </h1>
    }

function Container(){
    return(
        <div> 
            <JSX_Demo />
            <p>There is something going on</p>
        </div>
    );
}
        
ReactDOM.render(<Container/>, document.getElementById('main'));