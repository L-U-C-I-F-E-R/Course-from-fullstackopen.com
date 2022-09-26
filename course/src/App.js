import { useState } from 'react' 

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Forest Gamp'},
        {name: 'Forest Gam'}
])

    const [newPerson, setNewPerson] = useState('')

    const AddName = (event) => {
        event.preventDefault()
        const newName = {
            name: newPerson
        }
        //it`s working check on duplicate
        const val = persons.map(person => JSON.stringify(person) === JSON.stringify(newName))
        console.log(val) // ------ it`s [true, false]
        const falseOrTrue = val.some(element => element === true)
        console.log(falseOrTrue) // it`s just 'true' or 'false'
        if (falseOrTrue === false){
                setPersons(persons.concat(newName))
                setNewPerson('') 
            } else {
                alert(`${newName.name} is already added`)
            }
    }


    const HandlerChange = (event) => {
        setNewPerson(event.target.value)
        console.log(event.target.value)
    }

return(
    <div>
        <h1>Phonebook</h1>
        <form onSubmit={AddName}>
            <div>
                name: <input onChange={HandlerChange}
                value={newPerson}/>
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
        <h1>Numbers</h1>
        <ul>
            {persons.map(person => <li key={person.name}>{person.name}</li>)}
            {console.log(Object.getOwnPropertyNames(persons))}
        </ul>
    </div>    
)

}

export default App;

