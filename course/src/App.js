import { useState, useEffect } from 'react' 
import axios from "axios"


const App = () => {
    const [input, setInput] = useState('')
    const [countries, setCountries] = useState()
    const [listCountries, setListCountries] = useState([])

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
            // console.log(country.name.common)
        // console.log(listCountries)
        
        // array = countries.map((data) => {
        //     const country = JSON.stringify(data.name.common)
        //     if (country.includes(input) || country.toLowerCase().includes(input)){
        //         return country
        //     } 
        // })
        // let array = new Array()
        // setListCountries(array)
        // for(const data of countries){
        //     const country = data.name.common
        //     if (country.includes(input) || country.toLowerCase().includes(input)){
        //        array.push(country)
        //     }
        // }
        // console.log(array.length)
        
        // if (array.length < 11 || array.length === 0 ){
        //     setListCountries(array)
        //     console.log(listCountries)
        // }
    }

    // const showCountry = () => {
    //     if (listCountries.length > 10 || listCountries.length === 0){
    //         return <p>Not founded or too many matches, specify another filter</p>
    //     }if (listCountries.length == 1){
    //         return <ul>{listCountries[0]}</ul>
    //     } else{
    //          return <ul>{listCountries.map((country) => {<li>{country}</li>})}</ul>
    //     }
    // }

    const HandlerEvent = (event) => {
        setInput(event.target.value)
        console.log(input)
    }
    
return(
    <div>
        {/* <form onChange = {(e) => {searchCountry(e)}}> */}
            Find countries: <input 
                            value={input}
                            onChange={HandlerEvent}
                            // type='text'
                            
                            />
            
        {/* </form> */}
        <div>
            {/* {showCountry()} */}
        </div>
    </div>    
)
}

export default App;

