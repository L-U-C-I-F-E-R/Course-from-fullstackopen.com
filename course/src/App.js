import { useState, useEffect } from 'react' 
import servService from './services/notes.js'
import './index.css'

const App = () => {
    const [persons, setPersons] = useState([])

    const [newPerson, setNewPerson] = useState('')
    const [number, setNumber] = useState('')
    const [search, setSearch] = useState('')
    const [message, setMessage] = useState('')
    const [searchON, setSearchON] = useState(false)

    const hook = () => {
    servService
        .getAll()
        .then(respon => {
          setPersons(respon)
        })
    console.log('reacting')
    }

    useEffect(hook, [])

    const AddName = (event) => {
        event.preventDefault()
        const newName = {
            name: newPerson,
            number: number
        }
        //it`s working check on duplicate
        const val = persons.map(person => JSON.stringify(person.name) === JSON.stringify(newName.name))
        // console.log(val) // ------ it`s [true, false]
        const falseOrTrue = val.some(element => element === true)
        // console.log(falseOrTrue) // it`s just 'true' or 'false'
        if (falseOrTrue === false){
                servService
                    .create(newName)
                    .then(respon => {
                        setPersons(persons.concat(respon))
                    })
                setNewPerson('') 
                setMessage(newName.name)
                
            } else {
                alert(`${newName.name} is already added`)
                // Message(newName.name, 2)
            }
    }

    const Message = () => {
      
        if (message !== '') {
            return <p className='error'> Added {message}</p>
        }
        setTimeout(()=>{
        setMessage('')
        }, [5000])
    }

    const HandlerChange = (a, event) => {
        console.log(a)
        switch (a) {
            case 1: setNewPerson(event.target.value);
            break;
            case 2: setNumber(event.target.value);
            break;
            case 3: setSearch(event.target.value);
            break;
        }
    }

    const searchName = () => { 
        // if (searchON === true && search === ''){
        //     setSearchON(false)
        // }
       if (search !== '') 
       {
        let some = persons.filter((person) => {
            let name = JSON.stringify(person.name)
            let nameLowerCase = name.toLowerCase()
            if (name.includes(search) || nameLowerCase.includes(search)) {  
                return person   
            }   
        
        })
        return <ul> 
        {some.map(result => <li key={result.id}>{result.name}: {result.number}</li>)} </ul> }
    }

    const DeleteName = (id) => {
        console.log(id)
        const index = persons.findIndex(index => index.id === id)
        
        if (window.confirm(`Delete ${persons[index].name}?`)) {
           servService
            .httpdelete(id)
            .then(() => hook()) 
        }
    }

    const showName = () => {
        console.log(searchON)
        console.log(search)
        if (search === '') {
           

            return <ul>
            {persons.map(person => <li key={person.id}>{person.name}: {person.number}
            <button onClick={() => {DeleteName(person.id)}}>delete</button>
            </li>)}
            </ul> 
            }  
        }

return(
    <div>
        <h1>Phonebook</h1>
        {Message()}
        <input onChange={(e) => HandlerChange(3, e)}
        value={search}/>
        <button onClick={() => {setSearchON(!searchON)}}>
        search</button>
        <h1>Add a new</h1>
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
        {showName()}
        {searchName()}
            {/* {console.log(persons[2].number)} */}
            {/* {console.log(Object.getOwnPropertyNames(persons))} */}
    </div>    
)
}

export default App;

     