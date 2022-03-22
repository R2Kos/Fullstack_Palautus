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
  console.log(course)
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}  />
      <Total parts={course.parts} />

    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part osa={props.parts[0]}  />
      <Part osa={props.parts[1]}  />
      <Part osa={props.parts[2]}  />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.osa.name} {props.osa.exercises}</p>
  )
}
const Total = (props) => {
  var summa = 0
  props.parts.forEach(value => {
    summa += value.exercises
  });
  return (
    <p>Number of exercises {summa}</p>   
  )
}
export default App