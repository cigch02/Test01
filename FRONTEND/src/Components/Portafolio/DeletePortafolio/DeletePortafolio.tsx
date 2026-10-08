import React, { type SyntheticEvent } from 'react'

interface Props  {
    portafolioValue: string;
    onDelete: (e: SyntheticEvent) => void;
}

const DeletePortafolio = ({portafolioValue, onDelete}: Props) => {
  return (
    <div>
        <form onSubmit={onDelete}>
            <input type="hidden" value={portafolioValue} />
            <button className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
            X
            </button>   
        </form>
    </div>
  )
}

export default DeletePortafolio