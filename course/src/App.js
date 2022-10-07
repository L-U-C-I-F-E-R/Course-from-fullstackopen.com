import { useState, useEffect } from 'react' 
import axios from "axios"


const App = () => {
    

    const hook = () => {
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log(response.date)
          setPersons(response.data)
        })
    }

    useEffect(hook, [])

    const AddName = (event) => {
        event.preventDefault()
        const newName = {
            name: newPerson,
            number: number,
            id: persons.length + 1
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
            case 2: setNumber(event.target.value);
            break;
            case 3: setSearch(event.target.value);
            break;
        }
    }

    const searchName = () => { 
       if (search !== '') {let some = persons.filter((person) => {
            let name = JSON.stringify(person.name)
            let nameLowerCase = name.toLowerCase()
            if (name.includes(search) || nameLowerCase.includes(search)) {  
                return person   
            }    
            
        })
        return <ul> 
        {some.map(result => <li key={result.id}>{result.name}: {result.number}</li>)} </ul> }
       
       //it`s working

        // if (search != ''){
        //     let some = persons.map((person) => {
        //         let name = JSON.stringify(person.name)
        //         let nameLowerCase = name.toLowerCase()
        //         if (name.includes(search) || nameLowerCase.includes(search)) {  
        //             return person
        //     }})
        //     // console.log(some)
        //     return <ul>
        //         {some.map(result => {if(result != undefined){ return <li key={result.id}>{result.name}: {result.number}</li>}})} </ul> 
        // }


        // not working because nothing return
    //      if (search != ''){
    //         persons.forEach((person) => {
    //             let name = JSON.stringify(person.name)
    //             let nameLowerCase = name.toLowerCase()
    //             if (name.includes(search) || nameLowerCase.includes(search)) {  
    //                 console.log('<ul><li key={person.id}>{person.name}: {person.number}</li></ul>')
    //         }})
    //        }
        
    }

    const showName = () => {
        if (search === '') {
            return <ul>
            {persons.map(person => <li key={person.name}>{person.name}: {person.number}</li>)}
            </ul> 
            }  
        }

return(
    <div>
        <h1>Phonebook</h1>
        <input onChange={(e) => HandlerChange(3, e)} 
        value={search}/>
        <button onClick={searchName}>search</button>
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

