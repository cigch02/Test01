import { useState, type ChangeEvent, type SyntheticEvent } from "react";
 
interface SearchProps {
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
    OnSearchSubmit: (e: SyntheticEvent) => void;
};

const Search = ({ search, handleSearchChange, OnSearchSubmit }: SearchProps) => {
    return (
    <>
    {/*
    Previously hardcoded search input and button, now replaced with just press enter to search functionality
    <div>
        <input value={search} onChange={(e) => handleChange(e)} />
        <button onClick={(e) => onclick(e)}>Search</button>
    </div>*/}
    {/*
    second version of the Search component before it was refactored to use a form element for submission.
    <form onSubmit={OnSearchSubmit}>
        <input value={search} onChange={(e) => handleSearchChange(e)} />
    </form>*/}
        <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <form
          className="form relative flex flex-col w-full p-10 space-y-4 bg-darkBlue rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={OnSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none, bg-white"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
    </>
  );
};

export default Search
