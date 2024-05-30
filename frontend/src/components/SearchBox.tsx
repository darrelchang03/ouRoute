import { useState } from "react"

// Syntax for passing a function prop that returns void
function SearchBox({ onSubmit = ( field: string) => {} }) {
    const [destination, setDestination] = useState("")
    const [source, setSource] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (source === "") return

        onSubmit(source)
    } 
        
    return (
        <>
            <form onSubmit={handleSubmit}className="search-fields-form">
                <label>
                    <input type="text" value={source} onChange= { e => setSource(e.target.value)}/>
                </label>
                <label>
                    <input type="text" value={destination}  onChange= { e => setDestination(e.target.value)}/>
                </label>
            </form>
        </>
    )    
}

export default SearchBox