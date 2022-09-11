
const List = ({courses}) => {
    
    return <div>
    <h1>{courses.name}</h1>
    <ul>
        {courses.parts.map(part => <li key ={part.id}>{part.name} {part.exercises}</li> )}
    </ul>
   <p>All exercises: {courses.parts.reduce((pV, cV) => pV + cV.exercises, 0)}</p>
</div>
}

const Course = ({courses}) =>{

    return <div>
        <h1></h1>
        <List courses = {courses[0]}/>   
        <List courses = {courses[1]}/>   
    </div>
  }

  export default Course

//   <ul>
//         {courses.map(courses => courses.parts.map(part => <li key ={part.id}>{part.name} {part.exercises}</li> )) }
//         </ul>  ----- map in map