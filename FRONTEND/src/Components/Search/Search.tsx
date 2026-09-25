import { useState, type ChangeEvent, type SyntheticEvent } from "react";


const Search = () => {
    const [search, setSearch] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        console.log(e);
    }

    const onclick = (e: SyntheticEvent) => {
        console.log(e);
    }

    return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)} />
        <button onClick={(e) => onclick(e)}>Search</button>
    </div>
  )
}

export default Search
