import Card from '../Card/Card'

interface Props {}

const CardList = () => {
  return (
    <div>
        <Card companyName='Apple Inc.' ticker='AAPL' price={110} />
        <Card companyName='Microsoft Corporation' ticker='MSFT' price={200} />
        <Card companyName='Amazon.com Inc.' ticker='AMZN' price={100} />
    </div>
  )
}

export default CardList