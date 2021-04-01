import React from 'react';

function Result ({score, playAgain}){
    return (
    <div className="score-board">
        <div className="score"> Your Score is {score} / 5
            <button className="playBtn" onClick={playAgain}>Play Again</button>
        </div>

    </div>)
};

export default Result;