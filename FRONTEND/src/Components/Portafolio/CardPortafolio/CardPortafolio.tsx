import React, { type SyntheticEvent } from 'react'
import DeletePortafolio from '../DeletePortafolio/DeletePortafolio';
import { Link } from 'react-router-dom';

interface Props {
    portafolioValue: string;
    onDelete: (e: SyntheticEvent) => void;
}

const CardPortafolio = ({portafolioValue, onDelete}: Props) => {
    return (
        <>
        <div className="flex flex-col w-72 p-8 space-y-4 text-center rounded-lg shadow-lg">
            <Link to={`/company/${portafolioValue}`} className="pt-6 text-xl font-bold" >
                {portafolioValue}
            </Link>
            <DeletePortafolio portafolioValue={portafolioValue} onDelete={onDelete} />
        </div>
        </>
  );
};

export default CardPortafolio