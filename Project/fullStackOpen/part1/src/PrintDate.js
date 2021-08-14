const now = new Date();

const PrintDate = () =>{
    return(
        <p>The time when the page is rendered {now.toString()}</p>
    )
}

export default PrintDate;