import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./style.css";
import quizService from "./qus_ans"
import Qbox from "./components/qbox"
import Result from "./components/ansBox" 

class Quiz extends Component{
    state = {
        questionBank: [],
        score: 0,
        responses:0
    };

    getQuestions = () => {
        quizService().then(question =>{
            this.setState({
                questionBank: question
            });
        });
    };

    computeAnswer = (answer, correctAnswer) => {
        if(answer === correctAnswer){
            this.setState({
                score: this.state.score + 1
            });
        }
        this.setState({ 
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5 
        })
    };

    playAgain = () =>{
        this.getQuestions();
        this.setState({
            score: 0,
            responses: 0
        })
    };

    componentDidMount(){
        this.getQuestions();
    }

    render(){
        return(
            <div className="container">
                <div className="title">Quiz</div>
                {this.state.questionBank.length > 0 && this.state.responses < 5 &&  this.state.questionBank.map(
                    ({question, answers, correct, questionId}) => (
                        <Qbox 
                            question={question} 
                            options={answers} 
                            key ="questionId"
                            selected= {answer => this.computeAnswer(answer, correct)}/>
                    )
                )}
                {this.state.responses === 5 ? (
                    <Result score={this.state.score} playAgain={this.playAgain}/>
                    // <h2>{this.state.score} / {this.state.responses}</h2>
                ) : null}
            </div>
        )
    }
}

ReactDOM.render(
    <Quiz/>,
    document.getElementById('root')
);