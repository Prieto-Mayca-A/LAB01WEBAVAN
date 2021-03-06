import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course}/>
    </div>
  )
  
}
ReactDOM.render(<App />, document.getElementById('root'));

/*

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1.exercises1} exercises2= {part2.exercises2} exercises3= {part3.exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
*/
/*
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part1={part1} exercises1={exercises1} 
               part2={part2} exercises2={exercises2} 
               part3={part3} exercises3={exercises3}/>
               
      <Total exercises1={exercises1} exercises2 = {exercises2} exercises3 = {exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
*/