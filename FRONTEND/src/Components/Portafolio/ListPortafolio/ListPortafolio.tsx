import React, { type SyntheticEvent } from 'react'
import CardPortafolio from '../CardPortafolio/CardPortafolio';

interface Props {
    portafolioValues: string[];
    OnPortafolioDelete: (e: SyntheticEvent) => void;
}

const ListPortafolio = ({portafolioValues, OnPortafolioDelete}: Props) => {
  return (
    <>
    {/*
    first version of the ListPortafolio component before it was refactored to use the CardPortafolio component for each portafolio value.
    <h3>Portafolio</h3>
    <ul>    
        {portafolioValues && portafolioValues.map((portafolioValue) => {
            return <CardPortafolio portafolioValue={portafolioValue} onDelete={OnPortafolioDelete} />
        }  
        )}
    </ul>*/}
        <section id="portfolio">
      <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
        My Portfolio
      </h2>
      <div className="relative flex flex-row flex-wrap items-center justify-center max-w-5xl mx-auto gap-7 px-10 mb-5 md:px-6">
        <>
          {portafolioValues.length > 0 ? (
            portafolioValues.map((portafolioValue) => {
              return (
                <CardPortafolio
                  portafolioValue={portafolioValue}
                  onDelete={OnPortafolioDelete}
                />
              );
            })
          ) : (
            <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
              Your portfolio is empty.
            </h3>
          )}
        </>
      </div>
    </section>
    </>
  )
}

export default ListPortafolio