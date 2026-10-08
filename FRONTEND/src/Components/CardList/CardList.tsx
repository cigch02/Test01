import type { SyntheticEvent } from "react";
import type { CompanySearch } from "../../../company";
import Card from "../Card/Card";
import {v4 as uuidv4} from "uuid";

interface Props {
  searchResults: CompanySearch[];
  onPortafolioCreate: (e: SyntheticEvent) => void;
}

const CardList = ({ searchResults, onPortafolioCreate }: Props) => {
  return (
    <>
    <div>
      {/* previously hardcoded cards, now replaced with dynamic rendering based on searchResults 
      <Card companyName="Apple Inc." ticker="AAPL" price={110} />
      <Card companyName="Microsoft Corporation" ticker="MSFT" price={200} />
      <Card companyName="Amazon.com Inc." ticker="AMZN" price={100} />*/}
      {searchResults.length > 0 ? (
        searchResults.map((result) => {
          return <Card id={result.symbol} key={uuidv4()} searchResult={result} onPortafolioCreate={onPortafolioCreate} />;
        })
      ) : (
        <><h1>No results found</h1>
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
              No results!
        </p></>
      )}
      </div>
    </>
  );
};

export default CardList;
