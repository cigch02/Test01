
interface Props {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({companyName,ticker,price}:Props) => {
  return (
  <div className="card">
    <img src="https://picsum.photos/536/354" alt="image" />
    <div className="details">
      <h2>{companyName} ({ticker})</h2>
      <p>${price.toFixed(2)}</p>
    </div>
    <p className="infon">lorem ipsum dolor sit amet</p>
  </div>
  );
};

export default Card;