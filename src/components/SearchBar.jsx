import { useState } from "react";


function SearchBar({enSubmit}){

    const [term, setTerm ] = useState("")

    function handleFormSubmit(event){
        event.preventDefault();
        enSubmit(term)
    }

    const handleChange = (event) =>{
        setTerm(event.target.value);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={term} onChange={handleChange}/>
            </form>
        </div>
    )
}

    

export default SearchBar;