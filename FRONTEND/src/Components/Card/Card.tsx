import type { SyntheticEvent } from "react";
import type { CompanySearch } from "../../../company";
import AddPortafolio from "../Portafolio/AddPortafolio/AddPortafolio";
import { Link } from "react-router-dom";

interface Props {
    /*
    property types for the Card component before it was refactored to accept a CompanySearch object as a prop.
    companyName: string
    ticker: string
    price: number */
    id: string;
    searchResult: CompanySearch;
    onPortafolioCreate: (e: SyntheticEvent) => void;
}

const Card = ({id, searchResult, onPortafolioCreate}:Props) => {
  return (
    <>
  {/*
  firter version of the Card component before it was refactored to accept a CompanySearch object as a prop.
  <div className="card">
    <img alt="company logo" />
    <div className="details">
      <h2>{searchResult.name} ({searchResult.symbol})</h2>
      <p>${searchResult.currency}</p>
    </div>
    <p className="info">{searchResult.exchange} - {searchResult.exchangeFullName}</p>
    </div>*/}
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={id}
      id={id}
    >
      <Link to={`/company/${searchResult.symbol}`} className="font-bold text-center text-veryDarkViolet md:text-left">
        {searchResult.name} ({searchResult.symbol})
      </Link>
      <p className="text-veryDarkBlue">{searchResult.currency}</p>
      <p className="font-bold text-veryDarkBlue">
        {searchResult.exchange} - {searchResult.exchangeFullName}
      </p>
    <AddPortafolio onPortafolioCreate={onPortafolioCreate} symbol={searchResult.symbol} />
    </div>
    </>
  );
};

export default Card;