import './ChartBar.css'


const ChartBar = (props) => {

    let fillHeight = "0%";

    if(props.maxValue > 0){
        fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
        // console.log(fillHeight)
    }

    return(
        <div className="chartBar">
            <div className="charBar--wrapper">
                <div className="charBar--fill" style={{height: fillHeight}}></div>
            </div>
            <div className="charBar--label">Month</div>
        </div>
    )
};

export default ChartBar;