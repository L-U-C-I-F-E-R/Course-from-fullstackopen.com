import { useState } from 'react' 

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Forest Gamp'},
        {name: 'Forest Gam'}
])

    const [newPerson, setNewPerson] = useState('')
    const [number, setNumber] = useState('')

    const AddName = (event) => {
        event.preventDefault()
        const newName = {
            name: newPerson,
            number: number
        }
        //it`s working check on duplicate
        const val = persons.map(person => JSON.stringify(person.name) === JSON.stringify(newName.name))
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


    const HandlerChange = (a, event) => {
        console.log(a)
        switch (a) {
            case 1: setNewPerson(event.target.value);
            break;
            case 2: setNumber(event.target.value)
        }
    }

return(
    <div>
        <h1>Phonebook</h1>
        <form onSubmit={AddName}>
            <div>
                Name: <input onChange={(e) => HandlerChange(1, e)}
                value={newPerson}/>
            </div>
            <div>
                Number: <input onChange={(e) => HandlerChange(2, e)} 
                value={number}/>
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
        <h1>Numbers</h1>
        <ul>
            {persons.map(person => <li key={person.name}>{person.name}: {person.number}</li>)}
            {/* {console.log(persons[2].number)} */}
            {/* {console.log(Object.getOwnPropertyNames(persons))} */}
        </ul>
    </div>    
)

}

export default App;

