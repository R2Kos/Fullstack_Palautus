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
      <Content osa1={part1} osa2={part2} osa3={part3}  />
      <Total summa={part1.exercises+part2.exercises+part3.exercises} />

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
      <Part osa={props.osa1}  />
      <Part osa={props.osa2}  />
      <Part osa={props.osa3}  />
    </div>
  )
}

const Part = (props) => {
  return (
    <p>{props.osa.name} {props.osa.exercises}</p>
  )
}
const Total = (props) => {
  return (
    <p>Number of exercises {props.summa}</p>   
  )
}
export default App