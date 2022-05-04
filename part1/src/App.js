const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.exercise1}</p>
      <p>{props.part2} {props.exercise2}</p>
      <p>{props.part3} {props.exercise3}</p>
    </div>
  )
}

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </>
  )
}

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
      <Header course = {course.name}/>
      <Content part1 = {course.parts[0].name} exercise1 = {course.parts[0].exercises} 
      part2 = {course.parts[1].name} exercise2 = {course.parts[1].exercises} 
      part3 = {course.parts[2].name} exercise3 = {course.parts[2].exercises} />
      <Total exercise1 = {course.parts[0].exercises} exercise2 = {course.parts[1].exercises} exercise3 = {course.parts[2].exercises}/>
    </div>
  )
}

export default App