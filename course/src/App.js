import { useState, useEffect } from 'react' 
import axios from "axios"


const App = () => {
    const [input, setInput] = useState('')
    const [countries, setCountries] = useState()

    useEffect(() => {
        axios
        .get('https://restcountries.com/v3.1/all')
        .then(responce => {
            setCountries(responce.data)
            console.log('OK')
        })
    },[])
    

    const searchCountry = () => {
        // console.log(countries[1].name.common)
        const result = []
        for(const data of countries){
            // console.log(country.name.common)
            const country = JSON.stringify(data.name.common)
            // console.log(country)
            // if (country.includes(input) || country.toLowwerCase().includes(input)){
            //     result.concat(country)
            // }
        }
        
    }

    const showCountry = () => {

    }

    const HandlerEvent = (event) => {
        // event.preventDefault()
        setInput(event.target.value)
        console.log(input)
    }

return(
    <div>
        <form onChange = {searchCountry}>
            <p>Find countries</p>
            <input 
                onChange={HandlerEvent}
                value={input}/>
        </form>
    </div>    
)
}

export default App;

