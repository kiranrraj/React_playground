import React from 'react';
import Part from './Part';

const part1 = 'Fundamentals of React'
const exercises1 = 10
const part2 = 'Using props to pass data'
const exercises2 = 7
const part3 = 'State of a component'
const exercises3 = 14

const Content = (props) => {
    return (
        <Part part = {part1} excercises = {exercises1}/>
      )
}

export default Content;