import React, { useState, type ChangeEvent, type SyntheticEvent } from 'react'
import CardList from '../../Components/CardList/CardList'
import type { CompanySearch } from '../../../company';
import { searchCompanies } from '../../api';
import Navbar from '../../Components/Navbar/Navbar';
import Search from '../../Components/Search/Search';
import ListPortafolio from '../../Components/Portafolio/ListPortafolio/ListPortafolio';

const SearchPage = () => {
      const [search, setSearch] = useState<string>("");
    const [portafolioValues, setPortafolioValue] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [error, setError] = useState<string>("");

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    const OnPortafolioCreate = (e: any) => {
      e.preventDefault();
      const existingPortafolio = portafolioValues.find((value) => value === e.target[0].value);
      if (existingPortafolio) {
        alert("This company is already in your portfolio.");
        return;
      }
      const updatedPortafolio = [...portafolioValues, e.target[0].value];
      setPortafolioValue(updatedPortafolio);
      console.log(updatedPortafolio);
    }

    const OnPortafolioDelete = (e: any) => {
      e.preventDefault();
      const removed = portafolioValues.filter((value) => {
        return value !== e.target[0].value;
      });
      setPortafolioValue(removed);
      console.log(removed);
    }

    const OnSearchSubmit = async (e: SyntheticEvent) => {
      e.preventDefault();
      const result = await searchCompanies(search);
      if (typeof result === "string") {
        setError(result);
      } else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
        console.log(result.data);
      }
    }
  return (
    <div className="App">
      <Search search={search} handleSearchChange={handleSearchChange} OnSearchSubmit={OnSearchSubmit} />
      <ListPortafolio portafolioValues={portafolioValues} OnPortafolioDelete={OnPortafolioDelete} />
      <CardList searchResults={searchResult} onPortafolioCreate={OnPortafolioCreate} />
      {error && <h1>{error}</h1>}
    </div>
  )
}

export default SearchPage