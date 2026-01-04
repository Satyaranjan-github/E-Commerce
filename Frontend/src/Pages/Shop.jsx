import Hero from '../Components/Hero/Hero'
import NewCollection from '../Components/NewCollection/NewCollection'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Offer from '../Components/Offer/Offer'
import Popular from '../Components/Popular/Popular'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offer/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
